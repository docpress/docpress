# Quick-start guide

Docpress is available via [npm](https://www.npmjs.com/package/docpress). It requires [Node.js] 4.0 or higher.

```
npm install -g docpress
```

## Local installation

You can install Docpress locally in your project. This is optional, but greatly preferred. If Docpress is found in the current project, the `docpress` command will use the docpress installed in your current project.

```sh
npm init  # ...if you don't have package.json
npm install --save-dev --save-exact docpress
```

Also, Docpress builds your output into `_docpress`, which you probably don't want to commit.

```sh
echo _docpress >> .gitignore
```

## Writing content

Write your first page. This is usually your project's `README.md`. This is a simple Markdown file. Chances are you already have this! You can add more pages later by creating a Table of Contents file (see [Writing more pages](more-pages.md)).

```md
My project
==========

This is my project and it is wonderful! Save this file as `README.md`.
```

## Previewing your site

Run the local server via `docpress s` (short for `serve`). This will build your site into `_docpress/` and run a local file server with LiveReload. You can then point your browser to `http://localhost:3000`.

```
docpress s
```

[Node.js]: http://nodejs.org/
