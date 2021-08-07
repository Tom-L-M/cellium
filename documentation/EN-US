# Cellium  

#### Cellium is a simple namespace implementation package.

[![npm status](https://img.shields.io/npm/v/cellium)](https://www.npmjs.org/package/cellium)

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
The ```Cellium``` class has three methods that can be called: **```create```**,  **```extend```** and **```depth```**.

+ **```create```**
   +  **```create(name)```** acceps one argument, that will be defined as the namespace's property ```name```, and cannot be changed or redefined later.
   + This method returns a new ```Namespace``` object.

+ **```extend```**   
  +  **```extend(namespace, additions)```** accepts only two arguments.    
The first is the variable where the reference to the namespace is stored.  

     The second is an Array of items, containing any number of objects. Those objects must have two properties: ```path``` and ```data```. The ```path``` must contain an valid string with the path to store the value of the ```data``` in the namespace.
  
     The ```data``` field might be ommited, in which case the property in the namespace will be initialized with ```{}``` as value.   
   + This method adds new methods and properties to the namespace, and also returns the modified ```Namespace``` object, (making it possible to copy namespaces).

+ **```depth```**   
   + **```depth(namespace)```** accepts only one argument, the variable holding the target namespace object.   
   + This method returns a number, equivalent to the actual 'distance' between the provided ```Namespace``` object and it's innermost property or method.

### Namespace Object
The objects created with the ```Cellium.create()``` method are instances of the **```Namespace```** class, and contain two predefined keys: the ```size()``` method and the ```name``` property.  

Both aren't configurable or rewrittable, and will not be listed by any iteration-based attempt. So, to have acess to their values, it is necessary to call them directly (see the examples below).

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
// If this Cellium.extend() call was assigned to a variable, 
// this variable would hold a exact copy of the foo object, 
// including the recently added methods.

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
let b = foo.name; // b = 'foo'
let c = Cellium.depth(foo); // c = 4

for (let i in foo) {
  console.log(i);
} // this will not log foo.name or foo.size()

```

### Support, Contributions and License:

Please, check the README file [here](https://github.com/Tom-L-M/cellium/blob/main/README.md) for information on those topics.
