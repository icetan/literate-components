#!/bin/bash


usage() {
  echo >&2 "
  Usage: $(basename $0) FONT_FAMILY < FONT_FILE > JS_FILE

    FONT_FAMILY:          The name of the font-family

    FONT_FILE (stdin):    The .woff font file to convert
    JS_FILE   (stdout):   JavaScript output
"
  exit 1
}

test "$1" || usage

echo "import { css, injectGlobal, InterpolationValue } from 'styled-components'

injectGlobal\`
  @font-face {
    font-family: '$1';
    font-style: normal;
    font-weight: normal;
    src: url(data:application/x-font-woff;charset=utf-8;base64,$(base64 | tr -d '\n')) format('woff');
  }
\`

export default css\`
  font-family: '$1';
\`"
