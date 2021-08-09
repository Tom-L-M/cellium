# Cellium  

#### Cellium is a simple namespace implementation package.

[![npm status](https://img.shields.io/npm/v/cellium)](https://www.npmjs.org/package/cellium)

[![Install Size](https://packagephobia.com/badge?p=cellium@1.0.2)](https://packagephobia.com/result?p=cellium@1.0.2)

### General Information
The namespace implementation the Cellium package uses is based on JS objects.
Those objects are dynamically created by the ```Namespace``` class, and managed by the imported ```Cellium``` class.

**Installing:**
```bash
$ npm install cellium
```

**Requiring for use:**
``` javascript
const Cellium = require('cellium');
```

### Cellium
The ```Cellium``` class has eight methods that can be called: **```create```**,  **```extend```**, **```depth```**, **```isInstance```**, **```list```**, **```flat```**, **```clone```** and **```merge```**.

+ **```create```**
   +  **```create()```** creates and assign a new Namespace object to an identifier.
   + This method returns a new ```Namespace``` object.

+ **```extend```**   
  +  **```extend(namespace, additions)```** accepts only two arguments.    
The first is the variable where the reference to the namespace is stored.  

     The second is an Array of items, containing any number of objects. Those objects must have two properties: ```path``` and ```data```. The ```path``` must contain an valid string with the path to store the value of the ```data``` in the namespace.
  
     The ```data``` field might be ommited, in which case the property in the namespace will be initialized with ```{}``` as value.   
   + This method adds new methods and properties to the namespace, changing the object directly. It returns nothing.

+ **```depth```**   
   + **```depth(namespace)```** accepts only one argument, the variable holding the target namespace object.   
   + This method returns a number, equivalent to the actual 'distance' between the provided ```Namespace``` object and it's innermost property or method.  

+ **```isInstance```**   
   + **```isInstance(namespace)```** accepts only one argument, the target namespace object.
   + This method returns ```true``` if the provided namespace is not a falsy value, and is an instance of the ```Namespace``` class, else it returns false. 

+ **```list```**   
   + **```list(namespace [,keyFlag, valueFlag])```** accepts two arguments: the first is the target namespace, the second is an Array with two boolean values. The first boolean value is a flag for the keys, if set to true, the method will include the keys of the provided namespace in the returned Array. The second one is a flag for the values, if set to true will add the values in the returned Array.
   + This method returns an Array, containing: all the keys of the provided namespace, or all the values from it, or even all the key:value pairs the object contains.

+ **```flat```**   
   + **```flat(namespace)```** accepts the target namespace as argument.
   + This method returns a copy of the target namespace, with all the secondary keys at ```depth 0```.

+ **```clone```**   
   + **```clone(namespace)```** returns a perfect copy of the provided namespace.   
   + Copying namespaces by only reassigning them, and then changing the copy will result in changes in the original one too. Using ```clone()``` this will not happen.

+ **```merge```**   
   + **```merge(namespace1 [,namespace2, namespace3...])```** accepts two arguments: the first is the target namespace, the second is an Array with one or more namespaces to be merged into the target one.
  + This method returns a copy of the target namespace, with all the values added to it. (It does not change the original provided namespace).


### Namespace Object
The objects created with the ```Cellium.create()``` method are instances of the **```Namespace```** class, and contain one predefined method: ```size()```.

It is not configurable or rewrittable, and will not be listed by any iteration-based attempt. So, to have acess to its value, it is necessary to call it directly (see the examples below).

### Examples and usage:
``` javascript
const Cellium = require('cellium');

let foo = Cellium.create('foo'); // foo = Namespace {}

Cellium.extend(foo, [
  {path: 'propA', data: [1, 2, 3]},
  {path: 'propB', data: 'abc'},
  {path: 'propC.propC1', data: (a, b) => a + b},
  {path: 'propC.propC2', data: function(a, b) {return a - b}},
  {path: 'propD', data: {}},
  {path: 'propE.propE1.propE12', '1'}
]);

/*
Expect foo to be:
  Namespace {
    propA: [1, 2, 3],
    propB: 'abc',
    propC: {
      propC1: (a, b) => a + b,
      propC2: function(a, b) { return a - b}
    },
    propD: {},
    propE: {
      propE1: {
        propE12: '1'
      }
    }
  }
*/

let a = foo.size(); // a = 5
let b = Cellium.depth(foo); // b = 4
let c = Cellium.isInstance(foo); // c = true
let d = Cellium.isInstance(woo); // d = false
let e = Cellium.list(foo, [true, false]); // e = [propA, propB, propC, propD, propE];

for (let i in foo) { console.log(i); } // this will not log foo.size()

let bar = Cellium.create();
Cellium.extend(bar, [
  {path: 'ID', data: [1, 2, 3]},
  {path: 'ID2', data: [4, 5, 6]}
]);

let f = Cellium.merge(foo, [bar]);
/* Expect f to be:
 
  Namespace {
    propA: [1, 2, 3],
    propB: 'abc',
    propC: {
      propC1: (a, b) => a + b,
      propC2: function(a, b) { return a - b}
    },
    propD: {},
    propE: {
      propE1: {
        propE12: '1'
      }
    },
    ID: [1, 2, 3],
    ID2: [4, 5, 6]
  }
*/
```

### Support, Contributions and License:

Please, check the README file [here](https://github.com/Tom-L-M/cellium/blob/main/README.md) for information on those topics.
