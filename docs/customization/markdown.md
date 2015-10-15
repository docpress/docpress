# Markdown configuration

You can customize how Docpress renders your Markdown content to HTML. Place your configuration inside the `markdown` setting.

##### `docpress.json`
<!-- {.file-heading} -->

```js
{
  "markdown": {
    "typographer": true
  }
}
```

## Available settings
All of [markdown-it] settings are supported.

| Setting | Default | Description |
|----|----|----|
| `html` | *true* | Enable HTML tags |
| `xhtmlOut` | *false* | Use `/` to close tags (`<br />`) |
| `breaks` | *false* | Convert new lines in paragraphs to line breaks |
| `langPrefix` | *"lang-"* | CSS language prefix for fenced blocks |
| `linkify` | *true* | Auto-convert URLs to links |
| `typographer` | *true* | Replace quotes and such |
| `quotes` | *'“”‘’* | Quotes to use for `typograher` setting |
| `highlight` | *Function* | Syntax highlighting function (uses highlight.js by default) |

## Plugins

You can also put Markdown-it plugins under the `markdown.plugins` option. These will allow you to customize Markdown parsing behavior through npm packages; search npm for "[markdown-it](https://www.npmjs.com/search?q=markdown-it)" to see available plugins.

##### `docpress.json`
<!-- {.file-heading} -->

```js
{
  "markdown": {
    "plugins": {
      "decorate": {}
    }
  }
}
```

The names (`decorate` in the example) correspond to an npm package prefixed by `markdown-it-`. For instance, to load the [markdown-it-emoji] plugin, use:

```js
"emoji": {}
```

The value (`{}` in the example) are options to be passed onto the plugin. Use `{}` when you don't want to pass any options.

## Installing Markdown plugins

To use Markdown plugins, be sure to install them via npm first.

```sh
npm init  # if you don't have package.json
npm install --save --save-exact markdown-it-emoji
```

## Bundled plugins

Some officially-endorsed plugins are bundled into `docpress-core` already. You can use them without installing via npm.

* **decorate** ([markdown-it-decorate]) -- Enables custom class names.

[markdown-it]: https://www.npmjs.com/package/markdown-it
[markdown-it-emoji]: https://www.npmjs.com/package/markdown-it-emoji
[markdown-it-decorate]: https://www.npmjs.com/package/markdown-it-decorate
