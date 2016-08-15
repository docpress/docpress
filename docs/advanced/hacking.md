# Hacking Docpress

> This article is a stub; you can help by expanding it.

Want to contribute code to Docpress? Here's how to set up a local development environment.

## Dev environment

#### Set up a folder
Since docpress is made up of a few repositories, it'd be nice to keep them all in one location.

```
mkdir ~/Projects/docpress
cd ~/Projects/docpress
```

#### Clone the repos

```sh
git clone http://github.com/docpress/docpress.git
git clone http://github.com/docpress/docpress-base.git
git clone http://github.com/docpress/docpress-core.git
```

#### Link them all
Use `npm link` so you can use them as local development copies.

```sh
(cd docpress && npm link)
(cd docpress-base && npm link)
(cd docpress-core && npm link)
```

#### Use the links
Use the linked development copies.

```sh
(cd docpress && npm i && npm link docpress-base && npm link docpress-core)
(cd docpress-base && npm i && npm link npm link docpress-core)
```
