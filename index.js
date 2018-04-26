#!/usr/bin/env node

const fs = require('fs')
const { promisify } = require('util')
const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)

const minimist = require('minimist')

async function readFiles(files) {
  const result = await Promise.all(files.map(fn => (
    fn === "-"
      ? readStdin()
      : readFileAsync(fn, 'utf8')
    )
  ))
  return result.join('\n')
}

function readStdin(cb) {
  return new Promise((res, rej) => {
    const input = []
    process.stdin.resume()
    process.stdin.setEncoding('utf8')
    process.stdin.on('data', chunk => { input.push(chunk) })
    process.stdin.on('error', (err) => { rej(`Error reading STDIN: ${err}`) })
    process.stdin.on('end', () => {
      input.push('\n')
      res(input.join(''))
    })
  })
}

function getJavaScript(input) {
  const re = /^(<!-- +@(\w+) *-->\n)?(?:```.*\n([\s\S]*?)\n```|(^    .+\n(?:^    .+\n|^ *\n)+))/mg
  const output = []
  let r, c = 0
  while (r = re.exec(input)) {
    output.push(
      r[1]
        ? r[2]+'("_lit_'+(c++)+'",\n'+(r[3] || r[4])+'\n);'
        : r[4] || r[4]
    )
  }

  return output.join('')
}

function getMarkdown(input) {
  const re = /^(<!-- +@(\w+) *-->\n)?(```.*\n(?:[\s\S]*?)\n```|(:?^    .+\n(?:^    .+\n|^ *\n)+))/mg
  let c = 0

  return input.replace(re, function() {
    const r = arguments
    return (r[1]
      ? r[1]+'\n\n<div class="sep"></div><div class="lit '+r[2]+'" id="_lit_'+(c++)+'"></div>\n\n'+r[3]
      : r[3]
    ) + '\n\n<div class="sep"></div>\n\n'
  })
}

function getHtml(template, input) {
  const marked = require('marked')
  const { highlightAuto } = require('highlight.js')

  marked.setOptions({
    highlight: code => highlightAuto(code).value,
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
  });

  return  template.replace('{{content}}', marked(input))
}

function usage() {
  console.warn(`
  Usage: ${process.argv[1]} OPTION... FILE...

  OPTION:
    --code FILE           the file to write all the code blocks to concatenated
    --markdown FILE       the file to write the resulting markdown to
    --html FILE           the file to write the HTML converted markdown to
    --template FILE       the file to use as a template for HTML output where
                            "{{content}}" will be substituted

  FILE:                   markdown file to use as input, use "-" to read from
                            STDIN
  `)
  process.exit(1)
}

async function main(argv) {
  async function parse(input) {
    if (argv.code) {
      writeFileAsync(argv.code, getJavaScript(input))
    }

    if (argv.markdown) {
      writeFileAsync(argv.markdown, getMarkdown(input))
    }

    if (argv.html) {
      const template = argv.template
        ? await readFileAsync(argv.template, 'utf8')
        : '{{content}}'
      writeFileAsync(argv.html, getHtml(template, getMarkdown(input)))
    }
  }

  if (argv.help || Object.keys(argv).length <= 1 || argv._.length === 0) {
    usage()
  }

  parse(await readFiles(argv._))
}

main(minimist(process.argv.slice(2)))
