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

server.pre(restifyURLVersion('_v'))
```

### restifyURLVersion(paramName, [headerName])

* `paramName` - string or array of param names to extract from querystring
* `headerName` - restify accepted version header (optional, default `x-api-version`)

```js
restifyURLVersion('_v')
restifyURLVersion('_v', 'accept-version')
restifyURLVersion(['_v', 'v', 'version'], 'x-api-version')
```


License
-------

(The MIT License)

Copyright (c) 2014 Major League Soccer

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.