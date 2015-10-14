# Docpress
<!--{h1:.-with-tagline}-->

> Markdown publishing

Documentation website generator.<br>
Generates great websites from Markdown files.

[![Status](https://travis-ci.org/docpress/docpress.svg?branch=master)](https://travis-ci.org/docpress/docpress "See test builds")

## What is it

Docpress generates websites from your project's basic documentation; that is, at the very least, a `README.md` file. It also supports multiple Markdown pages in `docs/`.

Under heavy development now; guides and instructions will magically appear here when we're stable.

## Examples

* http://ricostacruz.com/dom101 (single readme)
* http://ricostacruz.com/onmount (multiple pages)

## Usage

Still under heavy development, consider this a preview.
See the [Getting Started](docs/getting-started/quickstart.md) guide for more details.

```sh
$ npm install -g docpress
$ echo "# My project" > README.md
$ echo "Documented by Markdown files." >> README.md
$ docpress serve

            ∴  Docpress
            ┊  starting...
            ┊
     build  ✓  320ms
     watch  ✓  watching for changes, ^C to abort
        lr  ✓  livereload (port 64408)
     serve  ✓  http://localhost:3000
```

Let's build our first Docpress site.
[Quickstart guide →](docs/getting-started/quickstart.md)
<!--{p:.pull-box}-->
