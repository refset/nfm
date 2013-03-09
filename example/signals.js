module.exports = function(){
  var signals = {}
  signals.s = {}

  signals.signalise = function(nf){
    var signal = signals.s[nf.meta.name] = {}
    signal.listeners = []
    signal.value = 0
    nf._func = nf.func
    nf.func = function(){
      return signals._updateSignal(nf,function(nf,args){
          return nf._func.apply(nf,args)
        },
        arguments)
    }
  }

  signals._updateSignal = function (nf, update, args){
    var signal = signals.s[nf.meta.name]
    signal.value = update(nf,args)
    signal.listeners.map(function(listener){
      listener(signal.value)
    })
    return signal.value
  }

  return signals
}
