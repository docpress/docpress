# Writing more pages

You can create a Table of Contents page to list down pages in your site. All pages must live inside the `docs/` folder—Docpress only looks for files in the project root (eg, */README.md*) and the `docs/` folder (eg, */docs/Introduction.md*).

## Create your TOC

Create a table of contents as `docs/README.md`. This is the table of contents: an unordered list of pages to link. Here's an example that will only have one file (your main README).

##### docs/README.md
<!-- {.file-heading} -->

```md
Documentation
=============

* [Your project](../README.md)
```

## Setting the home page

The first file in the TOC is *always* going to be the home page. Its title in the TOC is used as the site's main title.

## Nesting

To organize your pages into chapters, you can create sub-lists by indenting items that are under a certain parent. You can nest as far as you want, but it's only recommended to nest just one level down.

##### `docs/README.md`
<!-- {.file-heading} -->

```md
* [Your project](../README.md)
* [Introduction](intro/README.md)
  * [Getting started](intro/getting-started.md)
  * [Installation](intro/install.md)
* [Installation](installation/README.md)
  * [Mac OS X](installation/osx.md)
  * [Windows](installation/windows.md)
```

#### Non-links
You don't need to link all pages—you can create items that are not links. Great for headings or for pages that are yet to be written.

```md
* [Your project](../README.md)
* Introduction
  * [Getting started](intro/getting-started.md)
  * [Installation](intro/install.md)
* Installation
  * [Mac OS X](installation/osx.md)
  * [Windows](installation/windows.md)
```

#### Relative and absolute paths

Links in the TOC can be relative or absolute. In this example, both links are equivalent.

```md
* [Your project](../README.md)
* [Your project](/README.md)
```

Your Docpress site is growing! Why not add some images?
[Continue →](images-and-linking.md) <!--{p:.pull-box}-->
