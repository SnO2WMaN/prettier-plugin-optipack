# prettier-plugin-optipack

[![version](https://img.shields.io/npm/v/prettier-plugin-optipack)](https://www.npmjs.com/package/prettier-plugin-optipack)
[![license](https://img.shields.io/npm/l/prettier-plugin-optipack)](https://github.com/SnO2WMaN-HQ/prettier-plugin-optipack/blob/master/LICENSE)
[![downloads](https://img.shields.io/npm/dm/prettier-plugin-optipack)](https://www.npmjs.com/package/prettier-plugin-optipack)

[![CI(GitHub Actions)](https://github.com/SnO2WMaN-HQ/prettier-plugin-optipack/workflows/CI/badge.svg)](https://github.com/SnO2WMaN-HQ/prettier-plugin-optipack/actions?query=workflow%3ACI)
[![codecov](https://codecov.io/gh/SnO2WMaN-HQ/prettier-plugin-optipack/branch/master/graph/badge.svg)](https://codecov.io/gh/SnO2WMaN-HQ/prettier-plugin-optipack)
![node-lts](https://img.shields.io/node/v-lts/prettier-plugin-optipack)
[![Renovate](https://img.shields.io/badge/Renovate-enabled-ffc300?logo=renovatebot&style=flat)](https://renovatebot.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

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
