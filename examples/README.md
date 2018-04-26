# Design Guide

Some words about [Atomic Design](http://atomicdesign.bradfrost.com/).

## Setup

This is some setup code

    import React from 'react'
    import ReactDOM from 'react-dom'

Create a `render` function to use for displaying example components.

    const render = (id, ...els) => {
      let el = document.getElementById(id)
      if (el != null) ReactDOM.render(<div>{els}</div>, el)
    }

## Atoms

> Atoms of our interfaces serve as the foundational building blocks that
> comprise all our user interfaces.
>
> <cite>— [Brad Frost](http://atomicdesign.bradfrost.com/chapter-2/#atoms)</cite>

Here is some info about atoms in Atomic Design.

### Buttons

Import button atoms to `buttons`.

    import { buttons } from 'literate-component-examples'

Prima buttons.

<!-- @render -->
```html
<buttons.Primary type="submit" onClick={() => alert("Hello!")}>
    Primary Button
</buttons.Primary>
```

<!-- @render -->
```html
<buttons.Secondary type="submit">Secondary Button</buttons.Secondary>
```

<!-- @render -->
```html
<buttons.Remove type="submit">Remove Button</buttons.Remove>
```

### Texts

Different text formats.

    import { texts } from 'literate-component-examples'

<!-- @render -->
```html
<texts.MainHeading>Main Heading</texts.MainHeading>,

<texts.Title>Title</texts.Title>,

<texts.Subtitle>Subtitle</texts.Subtitle>,

<texts.Label>Label</texts.Label>,

<texts.Paragraph>Paragraph</texts.Paragraph>
```
## Molecules

> Quote to explain molecules
>
> <cite>— [Brad Frost](http://atomicdesign.bradfrost.com/chapter-2/#atoms)</cite>

### Blocks

Blocks are larger components containing mostly text.

    import { blocks } from 'literate-component-examples'

A detailed block.

<!-- @render -->
```html
<blocks.Detail title="Title of list" subtitle="Subtitle" label="Label">
    Description
</blocks.Detail>
```

A status block.

<!-- @render -->
```html
<blocks.Status>Status</blocks.Status>
```
## Organisms

> Quote to explain organisms
>
> <cite>— [Johan Hegard](http://atomicdesign.bradfrost.com/chapter-2/#organisms)</cite>

### Layout

Layout organisms.

    import { layouts } from 'literate-component-examples'

<!-- @render -->
```html
<layouts.TwoColumn>
    <blocks.Status>Left</blocks.Status>
    <blocks.Status>Right</blocks.Status>
</layouts.TwoColumn>
```

### List

List organisims.

    import { lists } from 'literate-component-examples'

A list of detailed blocks in a two column layout.

<!-- @render -->
```html
<lists.Unordered>
    <blocks.Detail title="Title 1" subtitle="Subtitle" label="Label">
        Description 1
    </blocks.Detail>
    <blocks.Detail title="Title 2" subtitle="Subtitle" label="Label">
        Description 2
    </blocks.Detail>
</lists.Unordered>
```
