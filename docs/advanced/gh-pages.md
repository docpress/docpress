# Automating GitHub pages

You can use Travis and [git-update-ghpages] to automatically update your website's `gh-pages` branch.

## Generate a GitHub token

Generate a [GitHub token](https://github.com/settings/tokens/new). Travis will use this to push to your repository on your behalf. You can use any name, but you can call it _Travis CI_. Keep this token somewhere safe; you can use it for any of your repositories that will need git-update-ghpages deployments.

> ![](https://raw.githubusercontent.com/rstacruz/git-update-ghpages/master/docs/images/github-token.png)

## Adding your token

Make sure Travis is already enabled on your repository. Go to your Travis's repo's settings page (`https://travis-ci.org/user/repo/settings`), and add your token there as `GITHUB_TOKEN`.
 Be sure to turn off the "show this in build log" option.

> ![](https://raw.githubusercontent.com/rstacruz/git-update-ghpages/master/docs/images/env-variables.png)

Alternatively, you can also use the [Travis CLI tool](http://rubygems.org/gems/travis) to add this to your repo as a secure variable:

```sh
travis encrypt GITHUB_TOKEN="your token here" --add
```

## Configuring builds

> If you installed Docpress locally in your project, skip to the next section.

Add this to your `.travis.yml` manifest. This will make a build happen after your test, then a deployment right after that. In this example, we're deploying `_docs` to `user/repo`.

##### .travis.yml
<!-- {.file-heading} -->

```yml
language: node_js
node_js:
- 4

env:
  global:
    - GIT_NAME: Travis CI
    - GIT_EMAIL: nobody@nobody.org
    - GITHUB_REPO: rstacruz/myproject
    - GIT_SOURCE: _docpress

script:
- rake     # ...or whatever your test command is
- npm install docpress && ./node_modules/.bin/docpress build

after_success:
- if [ "$TRAVIS_BRANCH" = "master" -a "$TRAVIS_PULL_REQUEST" = "false" ]; then npm install git-update-ghpages && ./node_modules/.bin/git-update-ghpages -e; fi
```

## For Node.js projects

If your project is a Node.js project, you can simplify this by adding `docpress` and `git-update-ghpages` to your *devDependencies*.

```sh
npm install --save-dev --save-exact docpress
npm install --save-dev --save-exact git-update-ghpages
```

```yml
# .travis.yml
node_js:
- 4

env:
  global:
    - GIT_NAME: Travis CI
    - GIT_EMAIL: nobody@nobody.org
    - GITHUB_REPO: rstacruz/myproject
    - GIT_SOURCE: _docpress

script:
- rake     # ...or whatever your test command is
- ./node_modules/.bin/docpress build

after_success:
- if [ "$TRAVIS_BRANCH" = "master" -a "$TRAVIS_PULL_REQUEST" = "false" ]; then ./node_modules/.bin/git-update-ghpages -e; fi
```

## For non-JS projects

The configuration above has `language: node_js`, which may not be what you want. In this case, swap out the `language` and `node_js` fields to invoke nvm `before_install`:

##### .travis.yml
<!-- {.file-heading} -->

```diff
- language: node_js
- node_js:
- - 4
+ before_install:
+ - nvm install 4
```

[git-update-ghpages]: https://github.com/rstacruz/git-update-ghpages
