# Cellium  

#### Cellium is a simple namespace implementation package.

[![npm status](https://img.shields.io/npm/v/cellium)](https://www.npmjs.org/package/cellium)
[![Install Size](https://packagephobia.com/badge?p=cellium@1.0.2)](https://packagephobia.com/result?p=cellium@1.0.2)

## Installation
``` bash
$ npm install cellium
```

## Starting
The Cellium module can be required as a regular NPM package, and must be assigned to an identifier (of any type).

``` javascript
const Cellium = require('cellium');
````

## Creating a namespace
The namespaces are created as objects, labeled with ```Namespace``` class tag.  
You can create a namespace using:
``` javascript
let foo = Cellium.create('foo');
// console.log(foo) will result in:
// Namespace {}
````

## Extending namespaces
It is possible to extend the namespaces by adding new key-value properties to it:
``` javascript
Cellium.extend(foo, [
  {path: 'propA', data: [1, 2, 3]},
  {path: 'propB', data: 'abc'},
  {path: 'propC.propC1', data: (a, b) => a + b},
  {path: 'propC.propC2', data: function(a, b) {return a - b}},
  {path: 'propD', data: {}}
]);

/* Expect foo to be:
  
  Namespace {
    propA: [1, 2, 3],
    propB: 'abc',
    propC: {
      propC1: (a, b) => a + b,
      propC2: function(a, b) { return a - b}
    },
    propD: {}
  }

*/
``` 

## More Information   
You can check the documentation [here](https://github.com/Tom-L-M/cellium/tree/main/documentation) for the complete information about the package.

Find the package in NPM [here](https://www.npmjs.com/package/cellium/), or test it at [NPM RunKit](https://npm.runkit.com/cellium).

## Support   
Please, contact this email: t.luchesi.machado@gmail.com for support.

## Contributing
If you have an idea on how to improve this package, and want to share it, 
just make a pull request on [GitHub](https://github.com/Tom-L-M/cellium).
(For major changes, please open an issue first.) 

## License
MIT-Licensed.  
See [LICENSE](https://github.com/Tom-L-M/cellium/blob/main/LICENSE) for details.
