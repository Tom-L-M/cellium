"use strict"
class Namespace {
    constructor(name) {
        //prevents 'name' and 'size()' of being caugh by 'for-in' loops or 'Object.keys()' ;
        //prevents 'name' and 'size()' of beight redefined, rewritted, or reconfigurated ;
        Object.defineProperty(this, 'name', { 
            value: name, enumerable: false, 
            configurable: false, writable: false 
        });
        Object.defineProperty(this, 'size', { 
            value: () => Object.keys(this).length, 
            enumerable: false, configurable: false, writable: false 
        }); 
    }
    static depth (obj) { 
        try {
            return ( Object(obj) === obj ? 1 + Math.max(-1, ... Object.values(obj).map(Namespace.depth)) : 1 );
        } catch (err) {
            console.log('\x1b[31m%s\x1b[0m', 'Operation cancelled due to failure:');
            console.log('\x1b[31m%s\x1b[0m', 'Impossible to calculate depth of specified namespace.\n');
            console.log('\x1b[35m%s\x1b[0m', "      " + err + '\n');
        }
    };
    static create(name) { 
        try {
            return new Namespace(name);
        } catch (err) {
            console.log('\x1b[31m%s\x1b[0m', 'Operation cancelled due to failure:');
            console.log('\x1b[31m%s\x1b[0m', 'Impossible to create specified namespace.\n');
            console.log('\x1b[35m%s\x1b[0m', "      " + err + '\n');
        } 
    }
    static extend(namespace, amount) {
        let parent;
        try {
            for(let k = 0; k < amount.length; k++) {
                parent = namespace;
                let parts = amount[k].path.split('.');
                let data = amount[k].data || {};
                for (let i = 0; i < parts.length; i++) {
                    if (parts[i].trim().toLowerCase() === parent.name) continue;
                    if (typeof parent[parts[i]] === 'undefined') {
                        if(i === parts.length - 1) { 
                            parent[parts[i]] = data; 
                            continue; 
                        }
                        parent[parts[i]] = {};
                    } else {//TODO
                        if(i === parts.length - 1) { 
                            parent[parts[i]] = data; 
                            continue; 
                        }
                        parent[parts[i]] = {};
                    } //TODO
                    parent = parent[parts[i]];
                }
            }
        } catch (err) {
            console.log('\x1b[31m%s\x1b[0m', 'Operation cancelled due to failure:');
            console.log('\x1b[31m%s\x1b[0m', 'Impossible to extend specified namespace.\n');
            console.log('\x1b[35m%s\x1b[0m', "      " + err + '\n');
        }
    }
}

module.exports = Namespace;
