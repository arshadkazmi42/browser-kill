# browser-kill

[![Build](https://github.com/arshadkazmi42/browser-kill/actions/workflows/nodejs.yml/badge.svg)](https://github.com/arshadkazmi42/browser-kill/actions/workflows/nodejs.yml)
[![NPM Version](https://img.shields.io/npm/v/browser-kill.svg)](https://www.npmjs.com/package/browser-kill)
[![NPM Downloads](https://img.shields.io/npm/dt/browser-kill.svg)](https://www.npmjs.com/package/browser-kill)
[![Github Repo Size](https://img.shields.io/github/repo-size/arshadkazmi42/browser-kill.svg)](https://github.com/arshadkazmi42/browser-kill)
[![LICENSE](https://img.shields.io/npm/l/browser-kill.svg)](https://github.com/arshadkazmi42/browser-kill/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/arshadkazmi42/browser-kill.svg)](https://github.com/arshadkazmi42/browser-kill/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/arshadkazmi42/browser-kill.svg)](https://github.com/arshadkazmi42/browser-kill/commits/master)

Kill browser process in Mac, Linux, Windows

## Install

```
npm i browser-kill
```

## Usage

```javascript

const Brkill = require('browser-kill');

(async () => {

  // Kills chrome process
  await Brkill.chrome();

  // Kills firefox process
  await Brkill.firefox();
})

```

## API

- ##### `chrome()`
  - Kills the chrome process, throws error if chrome process is not running

- ##### `firefox()`
  - Kills the chrome process, throws error if chrome process is not running

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/browser-kill/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase


