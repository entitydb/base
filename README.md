# base

[![server tests](https://travis-ci.org/entitydb/base.png)](https://travis-ci.org/entitydb/base)
[![test coverage](https://coveralls.io/repos/entitydb/base/badge.png)](https://coveralls.io/r/entitydb/base)
[![npm version](https://badge.fury.io/js/entitydb-base.png)](https://npmjs.org/package/entitydb-base)
[![dependency status](https://david-dm.org/entitydb/base.png)](https://david-dm.org/entitydb/base)
[![devDependency status](https://david-dm.org/entitydb/base/dev-status.png)](https://david-dm.org/entitydb/base#info=devDependencies)

[![browser tests](https://ci.testling.com/entitydb/base.png)](https://ci.testling.com/entitydb/base)

## how to

### install

```
npm install --save entitydb-base
```

### use

```
var level = require('level');
var db = level('./db');
var Base = require('base');
var baseDB = Base(db);
```

#### baseDB.get(id, callback)

#### baseDB.put(base, callback)

#### baseDB.del(id, callback)

### develop

```
git clone https://github.com/entitydb/base
npm install
```

hack away!

### test

```
npm test
```

## license

AGPLv3