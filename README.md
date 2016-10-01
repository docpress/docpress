# Docpress
<!--{h1:.massive-header.-with-tagline}-->

> Painless Markdown publishing

Documentation website generator.<br>
Generates great websites from Markdown files.

![Last version](https://img.shields.io/github/tag/docpress/docpress.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/docpress/docpress/master.svg?style=flat-square)](https://travis-ci.org/docpress/docpress)
[![Coverage Status](https://img.shields.io/coveralls/docpress/docpress.svg?style=flat-square)](https://coveralls.io/github/docpress/docpress)
[![Dependency status](http://img.shields.io/david/docpress/docpress.svg?style=flat-square)](https://david-dm.org/docpress/docpress)
[![Dev Dependencies Status](http://img.shields.io/david/dev/docpress/docpress.svg?style=flat-square)](https://david-dm.org/docpress/docpress#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/docpress.svg?style=flat-square)](https://www.npmjs.org/package/docpress)

## Table of Contents

* [What is it](#what-is-it)
* [Examples](#examples)
* [Usage](#usage)
* [Support](#support)
* [Thanks](#thanks)

## What is it

Docpress generates websites from your project's basic documentation; that is, at the very least, a `README.md` file. It also supports multiple Markdown pages in `docs/`.

Under heavy development now; guides and instructions will magically appear here when we're stable.

## Examples

Check out the [Docpress Showcase](docs/showcase.md) to see how Docpress helped developers build great-looking websites.

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

Support
-------

- [Documentation](http://docpress.github.io/)
- [Gitter chat](https://gitter.im/docpress/Lobby)

Let's build our first Docpress site.
[Quickstart guide →](docs/getting-started/quickstart.md)

<!--{p:.pull-box}-->

Thanks
------

<!--{h2:style='display:none'}-->

**docpress** © 2015+, Rico Sta. Cruz. Released under the [MIT] License.<br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]).

<!--{p:style='display:none'}-->

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

<!--{blockquote:style='display:none'}-->

[MIT]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/docpress/contributors
