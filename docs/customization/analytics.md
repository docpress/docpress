Google Analytics
================

Enable [Google Analytics] tracking in your docpress site by adding the `googleAnalytics` configuration key in `docpress.json`.

##### `docpress.json`
<!-- {.file-heading} -->

```json
{
  "googleAnalytics": {
    "id": "UA-12345678-1",
    "domain": "docpress.github.io"
  }
}
```

The `id` is the tracking ID given by Google Analytics. The `domain` is optional, but if enabled, the analytics code will only be used in this domain; this prevents pageviews from being logged when viewing your site in your local development machine.
  
[Google Analytics]: https://google.com/analytics
