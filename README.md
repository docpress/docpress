# docpress

Documentation website generator.

[![Status](https://travis-ci.org/docpress/docpress.svg?branch=master)](https://travis-ci.org/docpress/docpress "See test builds")

Docpress generates websites from your project's basic documentation; that is, at the very least, a `README.md` file. It also supports multiple Markdown pages in `docs/`.

Under heavy development now; guides and instructions will magically appear here when we're stable.

## Examples

* http://ricostacruz.com/dom101 (single readme)
* http://ricostacruz.com/onmount (multiple pages)

## Usage

Still under heavy development, consider this a preview.

```
npm install -g docpress
```

## Getting started
A project with Docpress-powered docs is simply a project where documentation lives in `docs/` as Markdown files. At the very least, a project with a single README file should suffice.

#### Create your TOC
Your project should have `docs/README.md` as the table of contents. This is an unordered list of pages to link. Here's an example that will only have one file (your main README).

```md
Documentation
=============

* [Your project](../README.md)
```

You can make it bold (`**[Your project](../README.md)**`) to expand it's contents in the sidebar.

#### Serve or build

Go to your project and run the server via `docpress s`, or build it via `docpress b`. The built site will be in `_docpress`.

```
docpress s[erve]
docpress b[uild]
```

#### Configuration

Optional config can be specified in `docs/docpress.json`. Here's the default file.

```json
# docs/docpress.json
{
  "plugins": {
    "docpress-core": {},
    "docpress-base": {}
  }
}
```
