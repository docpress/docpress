# docpress

Documentation website generator.

Docpress generates websites from your project's basic documentation; that is, at the very least, a `README.md` file. It also supports multiple Markdown pages in `docs/`.

Under heavy development now; guides and instructions will magically appear here when we're stable.

## Examples

* http://ricostacruz.com/dom101 (single readme)
* http://ricostacruz.com/onmount (multiple pages)

## Usage

Still under heavy development, consider this a preview.

```
npm install -g rstacruz/docpress
```

Your project should have `docs/README.md` as the table of contents.

Go to your project and run the server via `docpress s`, or build it via `docpress b`. The built site will be in `_docpress`.

```
docpress s[erve]
docpress b[uild]
```

Optional config can be specified in `docs/docpress.json`:

```json
# docs/docpress.json
{
  "plugins": {
    "docpress-core": {},
    "docpress-base": {}
  }
}
```
