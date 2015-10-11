# Quick-start guide

Docpress requires [Node.js] 4.0 or higher.

[Node.js]: http://nodejs.org/

## Installation

#### Global installation

Docpress is available via [npm](https://www.npmjs.com/package/docpress). It can be installed globally (`-g`) so you can use Docpress on any repository in your computer.

```
npm install -g docpress
```

#### Local installation

You can choose to install Docpress locally in your project. This is the prefered method, especially for JavaScript projects. Ensure that your project has a `package.json` already; if not, create it using:

```
npm init
```

Install it via npm:

```
npm install --save-dev --save-exact docpress
```

You can now run the `docpress` command via `./node_modules/.bin/docpress`. This may be cumbersome, so add aliases to Docpress via npm scripts. Edit your `package.json` and add these values in. Docpress will then be accessible via `npm run docs:build` and `npm run docs:serve`.

```json
# package.json
{
  "scripts": {
    "docs:build": "docpress build",
    "docs:serve": "docpress serve"
  }
}
```

## Writing content

#### Your first page

This is usually your project's `README.md`. This is a simple Markdown file. Chances are you already have this.

```
My project
==========

This is my project and it is wonderful! Save this file as `README.md`.
```

You can add more pages later by creating a Table of Contents file; see [Writing more pages](more-pages.md).

## Previewing your site

#### Serve it

Run the local server via `docpress s` (short for `serve`). This will build your site into `_docpress/` and run a local server with LiveReload.

```
docpress s
```

#### Gitignore

Docpress builds your output into `_docpress`, which you would probably want to not commit into your repository.

```sh
echo _docpress >> .gitignore
```

