Disqus
================

Enable [Disqus](https://disqus.com) comments in your pages by adding the `disqus` configuration key in `docpress.json`.

##### `docpress.json`
<!-- {.file-heading} -->

```json
{
  "disqus": {
    "shortname": "mythbusters-js-org",
    "exclude": "index|bibliography|resources|contributing"
  }
}
```

#### shortname

Type: `string`

Your disqus shortname.

#### exclude

Type: `string`

An `RegExp` expression that you can provide for specify in what pages disable comments.
