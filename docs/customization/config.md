# Configuration

To set configuration, create a file called `docpress.json` inside your project's `docs/`. Alternatiely, there are also these 2 ways to set configuration:

* Create a file called `docpress.json` in your project's root.
* In your project's `package.json`, make a new key called `docpress`.

## Example

Here's an example `docpress.json`:

```json
{
  "docs": "docs",
  "github": "rstacruz/onmount"
}
```

Or in `package.json`:

```js
{
  "name": "myproject",
  "version": "1.0.0",
  /* ... */
  "docpress": {
    "github": "rstacruz/myproject"
  }
}
```

## Available configuration

| Key | Default | Description |
|-----|---------|-------------|
| **docs** | `"docs"`| The documents folder to parse. Defaults to `"docs"`. This option is only available if it's defined on `docpress.json` (in the project root) or under *docpress* in `package.json`. |
| **dist** | `"_docpress"` | The folder builds are saved to. Defaults to `"_docpress"`. This option is only available if it's defined on `docpress.json` (in the project root) or under *docpress* in `package.json`. |
| **github** | *None* |The repo slug (`user/repo`) for the project. If set, `docpress-core` will add a link to GitHub from the generated page. |
| **css** | *None* | CSS resources to load. See [Custom CSS](css.md) for details. |
| **googleAnalytics** | *None* | [Google Analytics](analytics.md) support. |
| **googleAnalytics.id** | *None* | Google Analytics ID. |
| **googleAnalytics.domain** | *None* | Restrict Google Analytics only to this domain. |
| **plugins** | ... | List of plugins. See [Using plugins](plugins.md) for details. |
| **markdown** | ... | [markdown-it] options and plugins. See [Markdown configuration](markdown.md) for details. |
<!--{table:.wide}-->

[markdown-it]: https://www.npmjs.com/package/markdown-it
