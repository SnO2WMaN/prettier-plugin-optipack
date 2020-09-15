# prettier-plugin-optipack

[![version](https://img.shields.io/npm/v/prettier-plugin-optipack)](https://www.npmjs.com/package/prettier-plugin-optipack)
[![license](https://img.shields.io/npm/l/prettier-plugin-optipack)](https://github.com/SnO2WMaN-HQ/prettier-plugin-optipack/blob/master/LICENSE)
[![downloads](https://img.shields.io/npm/dm/prettier-plugin-optipack)](https://www.npmjs.com/package/prettier-plugin-optipack)

[![CI(GitHub Actions)](https://github.com/SnO2WMaN-HQ/prettier-plugin-optipack/workflows/CI/badge.svg)](https://github.com/SnO2WMaN-HQ/prettier-plugin-optipack/actions?query=workflow%3ACI)
[![codecov](https://codecov.io/gh/SnO2WMaN-HQ/prettier-plugin-optipack/branch/master/graph/badge.svg)](https://codecov.io/gh/SnO2WMaN-HQ/prettier-plugin-optipack)
![node-lts](https://img.shields.io/node/v-lts/prettier-plugin-optipack)
[![Renovate](https://img.shields.io/badge/Renovate-enabled-ffc300?logo=renovatebot&style=flat)](https://renovatebot.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg)](#contributors-)

## Usage

```
yarn add prettier-plugin-optipack -D
```

### .optipackrc

Supported by [cosmiconfig](https://github.com/davidtheclark/cosmiconfig)

```json
{
  "order": [
    [
      "name",
      "version",
      "private",
      "description",
      "license",
      "author",
      "homepage",
      "repository",
      "bugs",
      "keywords",
      "publishConfig",
      "main",
      "source",
      "types",
      "typings",
      "files",
      "bin",
      "workspaces",
      "scripts",
      "engines",
      "dependencies",
      "devDependencies",
      "peerDependencies"
    ]
  ]
}
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://sno2wman.dev/"><img src="https://avatars3.githubusercontent.com/u/15155608?v=4?s=100" width="100px;" alt=""/><br /><sub><b>SnO₂WMaN</b></sub></a><br /><a href="https://github.com/SnO2WMaN/prettier-plugin-optipack/commits?author=SnO2WMaN" title="Code">💻</a></td>
    <td align="center"><a href="https://renovatebot.com/"><img src="https://avatars2.githubusercontent.com/u/38656520?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Renovate Bot</b></sub></a><br /><a href="#infra-renovatebot" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-renovatebot" title="Maintenance">🚧</a></td>
    <td align="center"><a href="http://semantic-release.org/"><img src="https://avatars1.githubusercontent.com/u/32174276?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Semantic Release Bot</b></sub></a><br /><a href="#infra-semantic-release-bot" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
