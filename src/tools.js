"use strict";

function logErr(type, error) {
    let err = error || '';
    let content = '';
    let part1 = 'Impossible to';
    let part2 = 'the specified namespace.\n';
    switch(type) {
        case 10: content = ' calculate depth of'; break;
        case 20: content = ' create '; break;
        case 30: content = ' extend '; break;
        case 40: content = ' verify existance of '; break;
        case 50: content = ' list entries of '; break;
        case 60: content = ' flat entries of '; break;
        case 70: content = ' clone '; break;
        case 80: content = ' merge provided objects into '; break;
        default: part1 = part2 = ''; content = 'Error';
    }
    console.log('\x1b[31m%s\x1b[0m', 'Operation cancelled due to failure:');
    console.log('\x1b[31m%s\x1b[0m', part1 + content + part2);
    console.log('\x1b[35m%s\x1b[0m', "      " + err + '\n');
}

    module.exports = { logErr };
