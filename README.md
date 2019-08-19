# vote-ninja
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
Sometimes we have too many options to choose, so lets slash through them.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/AndresMurguido001"><img src="https://avatars2.githubusercontent.com/u/34611135?v=4" width="100px;" alt="AndresMurguido001"/><br /><sub><b>AndresMurguido001</b></sub></a><br /><a href="#infra-AndresMurguido001" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/open-source-miami/vote-ninja/commits?author=AndresMurguido001" title="Tests">⚠️</a> <a href="https://github.com/open-source-miami/vote-ninja/commits?author=AndresMurguido001" title="Code">💻</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!


##Getting Started
Setting up this repo will require a few steps:
1. `git clone https://github.com/open-source-miami/vote-ninja.git`
2. `cd vote-ninja/packages; git clone https://github.com/open-source-miami/component-library.git`
3. `cd component-library; git checkout buttonComponent` or the latest version of the repo containing the `<ButtonComponent />`
4. Make sure `packages/component-library/package.json` has the correct *name* attribute and *start* script:
```json
  {
    name: @vote-ninja/component-library
    scripts: {
      start: tsc -w
    }
  }
  ```
5. Create a `.env` file for `packages/server`:
  *DB_HOST
  *DB_USERNANME
  *DB_PASSWORD
  *DB_NAME
  *TOKEN_SECRET
  *REFRESH_TOKEN_SECRET
6. Create a `.env` file for `packages/web`:
  *SKIP_PREFLIGHT_CHECK=true
7. In the project root, run `yarn install`
8. In the project root, run `yarn start`