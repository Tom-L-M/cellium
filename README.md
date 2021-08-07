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
// (you can omit the 'data' part to initialize the property with '{}' as value)
Cellium.extend(foo, [
    {path: 'd', data: [1, 2, 3]},
    {path: 'd2.sub.subsub', data: 'abc'},
    {path: 'd3', data: function(a,b) { return a + b}}
]);
/* expect foo to be: ​
  ​{     
      ​d: [1, 2, 3],
      d2: {
            sub: {
                   subsub: "abc",
            }
      },
      d3: function(a, b) { return a + b; }
  ​}   
*/

// returns the amount of keys directly in the namespace root level
foo.size(); // expect 3

// returns the name of the defined namespace
foo.name; // expect 'foo'

// returns the number of keys from the 
// namespace root to the deepest-leveled property
Cellium.depth(foo); // expect 4
```

## More Information
You can check the documentation [here](https://github.com/Tom-L-M/cellium) for the complete information.

## Contributing
If you have an idea on how to improve this package, and want to share it, 
just make a pull request on [GitHub](https://github.com/Tom-L-M/cellium).
(For major changes, please open an issue first.) 

You can also use this email: t.luchesi.machado@gmail.com

## License
MIT-Licenced.  
See LICENCE file for details.
