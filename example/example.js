var signals = require("./signals")()
var foo = require("./foo")
var util = require("util")

module.exports = function(){
  signals.signalise(foo)
  signals.signalise(foo.deps.bar)
  console.log(util.inspect(signals.s,true,null))
  console.log("foo.func(4,5)")
  console.log(foo.func(4,5))
  console.log(util.inspect(signals.s,true,null))
}()

