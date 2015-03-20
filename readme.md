Restify URL Version
===================

> Extract version from URL for [restify](http://mcavage.me/node-restify/) routing

[![Build Status](https://secure.travis-ci.org/majorleaguesoccer/restify-url-version.png)](http://travis-ci.org/majorleaguesoccer/restify-url-version) 
[![devDependency Status](https://david-dm.org/majorleaguesoccer/restify-url-version.png)](https://david-dm.org/majorleaguesoccer/restify-url-version#info=dependencies)
[![NPM version](https://badge.fury.io/js/restify-url-version.png)](http://badge.fury.io/js/restify-url-version)



Install
-------

With [npm](https://npmjs.org)

```
npm install restify-url-version
```


Usage
-----

```js
var restify = require('restify')
  , restifyURLVersion = require('restify-url-version')
  , server = restify.createServer()

server.pre(restifyURLVersion('v', 'version', 'x-api-version'))
```

### restifyURLVersion(paramName, [headerName])

* `paramName` - string or array of param names to extract from querystring
* `headerName` - restify accepted version header (optional, default `x-api-version`)

```js
restifyURLVersion('_v')
restifyURLVersion('_v', 'accept-version')
restifyURLVersion(['_v', 'v', 'version'], 'x-api-version')
```


[License](./licence)