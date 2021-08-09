const tools = require('./tools');
"use strict"
class Namespace {
    constructor() {
        //prevents 'clone()' and 'size()' of being caugh by 'for-in' loops or 'Object.keys()' ;
        //prevents 'clone()' and 'size()' of beight redefined, rewritted, or reconfigurated ;
        Object.defineProperty(this, 'size', { 
            value: () => Object.keys(this).length, 
            enumerable: false, configurable: false, writable: false 
        });
    }
    static depth (obj) { 
        try {
            return ( Object(obj) === obj ? 1 + Math.max(-1, ... Object.values(obj).map(Namespace.depth)) : 1 );
        } catch (err) {
            tools.logErr(10, err);
            return 0;
        }
    };
    static extend(namespace, amount) {
        let parent;
        try {
            for(let k = 0; k < amount.length; k++) {
                parent = namespace;
                let parts = amount[k].path.split('.');
                let data = amount[k].data || {};
                for (let i = 0; i < parts.length; i++) {
                    if (typeof parent[parts[i]] === 'undefined') {
                        if(i === parts.length - 1) { 
                            parent[parts[i]] = data; 
                            continue;
                        } else {
                            if(i === parts.length - 1) {
                                parent[parts[i]] = data; 
                                continue; 
                            }
                        }
                        parent[parts[i]] = {};
                    }
                    parent = parent[parts[i]];
                }
            }
        } catch (err) {
            tools.logErr(30, err);
        } finally {
            return;
        }
    }
    static isInstance(namespace) {
        try {
            let a = (namespace instanceof Namespace);
            return a;
        } catch (err) {
            tools.logErr(40, err);
            return false;
        }
    }
    static list (obj = {}, [keyflag, valflag] = [true, false], cont = []) {
        try {
            let content = cont;
            if (typeof keyflag !== 'boolean' || typeof valflag !== 'boolean') { return []; }
            if (typeof obj !== 'object' || Array.isArray(obj)) { return content; }
            for (let key in obj) {
                if (obj[key] !== null && obj[key] !== undefined) {
                    let print = ((keyflag) ? ((valflag) ? {[key]: obj[key]} : key) : ((valflag) ? obj[key] : key));
                    content.push(print);
                    this.list(obj[key], [keyflag, valflag], content);
                }
            }
            return content;
        } catch (err) {
            tools.logErr(50, err);
            return [];
        }
    }
    static flat (obj, cont) {
        try {
            let content = cont || [];
            if (typeof obj !== 'object' || Array.isArray(obj)) { return; }
            for (let key in obj) {
                if (obj[key] !== null && obj[key] !== undefined) {
                    content.push({[key]: obj[key]});
                    Namespace.flat(obj[key], content);
                }
            }
            return content;
        } catch (err) {
            tools.logErr(60, err);
            return [];
        }   
    }
    static clone(namespace) { 
        try {
            let a = new Namespace();
            let b = Object.assign(a, namespace);
            return b;
        } catch (err) {
            tools.logErr(70, err);
            return null;
        }
        
    }
    static merge(n1, n2) {
        try {
            let temp = Namespace.clone(n1);
            for(let a of n2) {
                for(let b in a) {
                    console.log(b);
                    if (temp[b]) { continue; }
                    Namespace.extend(temp, [
                        {path: "" + b, data: a[b]}
                    ]);
                } 
            }
            return temp;
        } catch (err) {
            tools.logErr(80, err);
            return n1;
        }
    }
}

module.exports = Namespace;
