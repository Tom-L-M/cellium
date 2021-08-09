"use strict"
// This is just a router, designed for handling new features in future updates.
const Namespace = require('./src/namespace');
const Cellium = { 
    create: function () { return new Namespace(); },
    depth: function (a) { return Namespace.depth(a); },
    extend: function (a, b) { return Namespace.extend(a, b); },
    isInstance: function (a) { return Namespace.isInstance(a); },
    list: function (a, b) { return Namespace.list(a, b); },
    flat: function (a) { return Namespace.flat(a); },
    clone: function (a) { return Namespace.clone(a); },
    merge: function (a, b) { return Namespace.merge(a, b); }
}
module.exports = Cellium;
