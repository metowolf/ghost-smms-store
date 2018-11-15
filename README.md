<p align="center">
<img src="https://user-images.githubusercontent.com/2666735/47508037-eea82300-d8a5-11e8-94b0-7c3496f04184.png" width="300px" alt="smms-cli">
</p>

<p align="center">
<a href="https://i-meto.com"><img alt="Author" src="https://img.shields.io/badge/Author-METO-blue.svg?style=flat-square"/></a>
<a href="https://www.npmjs.com/package/ghost-smms-store"><img alt="Version" src="https://img.shields.io/npm/v/ghost-smms-store.svg?style=flat-square"/></a>
<img alt="License" src="https://img.shields.io/npm/l/ghost-smms-store.svg?style=flat-square"/>
</p>


## Installation

**required Ghost version: 1.x, 2.x**

### Install from NPM

You will need to have a the custom storage module directly in your project directory, the easiest way to do this is:

```bash
$ npm install ghost-smms-store
$ mkdir content/storage
$ cp -r node_modules/ghost-smms-store content/storage/ghost-smms-store
```

### Install from Git

```bash
$ mkdir -p content/adapters/storage
$ git clone https://github.com/metowolf/ghost-smms-store.git
$ cd ghost-smms-store
$ npm install
```

### Install in Docker

```yaml
FROM ghost:alpine

WORKDIR $GHOST_INSTALL/current
RUN yarn add ghost-smms-store
RUN mv node_modules/ghost-smms-store core/server/adapters/storage
WORKDIR $GHOST_INSTALL
RUN set -ex; \
    su-exec node ghost config storage.active ghost-smms-store;
```

## Configuration

In config.js, add a storage block for each environment.

```json
"storage": {
  "active": "ghost-smms-store"
},
```

## Author

**ghost-smms-store** © [metowolf](https://github.com/metowolf), Released under the [MIT](./LICENSE) License.<br>

> Blog [@meto](https://i-meto.com) · GitHub [@metowolf](https://github.com/metowolf) · Twitter [@metowolf](https://twitter.com/metowolf) · Telegram Channel [@metooooo](https://t.me/metooooo)
