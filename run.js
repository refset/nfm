#!/usr/bin/env node

var Script = process.binding('evals').NodeScript;
var runInThisContext = Script.runInThisContext;
var runInNewContext = Script.runInNewContext;
var fs = require('fs');

require.extensions['.js'] = function (module, filename) {
    var content = fs.readFileSync(filename);
    var sandbox = {
        module: {}
    };
    runInNewContext('module.exports = ' + content, sandbox, filename, true);
    var deps = sandbox.module.exports.deps;
    for (var k in deps) {
        sandbox[k] = require(deps[k]);
    }
    // fetch deps
    runInNewContext('module.exports = ' + content, sandbox, filename, true);
    module.exports = sandbox.module.exports.func;
};

process.argv.slice(2).map(function (m) {
    console.log(require(m)());
});
