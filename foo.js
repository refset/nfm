{
    func: function () {
        return bar() + 1;
    },
    deps: {
        bar: './bar.js'
    },
    meta: {
        name: 'personX/foo'
    }
}
