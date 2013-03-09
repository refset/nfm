signals = require('./signals')()
nf = require('./foo')
signals.signalise(nf)
signals
nf.func(4,5)
signals
