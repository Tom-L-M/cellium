# Cellium 

Cellium is a simple namespace implementation package.  

[![npm status](https://img.shields.io/npm/v/cellium)](https://www.npmjs.org/package/cellium)

## Installation

```bash
$ npm install cellium
```

## Usage

```javascript
// require it for use
const Cellium = require('cellium');

// creates a new namespace
let foo = Cellium.create('foo');

// adds properties to that namespace
// you can omit the 'data' part to initialize the property with '{}' as value
Cellium.extend(foo, [
    {path: 'd', data: [1, 2, 3]},
    {path: 'd2.sublevel.subsublevel', data: 'abc'},
    {path: 'd3', data: function(a,b) { return a + b}}
]);
/* expect foo to be: ​
  ​{     
      ​d: [1, 2, 3],
      d2: {
            sub: {
                   subsub: "abc",
            }
      }
      d3: function(a, b) { return a + b; }
  ​}   
*/

// returns the amount of keys directly in the namespace
foo.size();

// returns the name of the defined namespace
foo.name; 

// returns the number of keys from the 
// namespace root to the deepest-leveled property
Cellium.depth(foo);
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss the possible changes.

## License
MIT-Licenced.  
See LICENCE file for details
