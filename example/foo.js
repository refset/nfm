module.exports = {
  func: function(a,b){
    return this.deps.bar.func(a) + b
  },
  meta:{
    name: "foo"
  },
  deps:{
    bar: require('./bar.js')
  }
}
