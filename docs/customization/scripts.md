# Custom Scripts

Put your extra JS files inside the `scripts` setting.
You can put external files (hosted online) or local JS files (local files need to be inside the `docs/` directory).

##### docpress.json
<!-- {.file-heading} -->

```json
{
  "scripts": [
    "http://site.com/external.js",
    "scripts/myscript.js"
  ]
}
```

Scripts will be included in the `<head>` tag, after the base theme `assets/script.js` file.

> This article is a stub; you can help by expanding it.
