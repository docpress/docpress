# Docpress
<!--{h1:.massive-header.-with-tagline}-->

> Painless Markdown publishing

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

  Docpress
  starting development - ^C to exit

  350ms ✓   first build                 
      on    watching changes
      on    livereload
      on    http://localhost:3000
  
  Running
```

Let's build our first Docpress site.
[Quickstart guide →](docs/getting-started/quickstart.md)

<!--{p:.pull-box}-->

:copy:

----

<!--{p:style='display:none'}-->
<!--{hr:style='display:none'}-->

**docpress** © 2015+, Rico Sta. Cruz. Released under the [MIT] License.<br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]).

<!--{p:style='display:none'}-->

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

<!--{blockquote:style='display:none'}-->

[MIT]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/docpress/contributors
