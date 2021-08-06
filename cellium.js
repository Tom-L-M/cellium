"use strict"

// This is a router, designed for handling new features in future updates.
const Namespace = require('./namespace');
const Cellium = { 
    create: function (a) { return new Namespace(a); },
    depth: function (a) { return Namespace.depth(a); },
    extend: function (a, b) { return Namespace.extend(a, b); },
}
module.exports = Cellium;
