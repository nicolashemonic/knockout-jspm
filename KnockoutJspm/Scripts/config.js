var systemNormalize = System.normalize;

System.normalize = function (name, parentName, parentAddress) {
    if (name.indexOf('availpro-') > -1) {
        var defaultJSExtension = this.defaultJSExtensions ? '.js' : '';
        return this.baseURL + this.paths['availpro-*'].replace(new RegExp('availpro-\\*', 'g'), name) + defaultJSExtension;
    }
    return systemNormalize.call(this, name, parentName, parentAddress);
}

System.locate = function (load) {
    console.log(load.name)
    return load.name;
}

System.config({
    baseURL: "/Scripts",
    defaultJSExtensions: true,
    transpiler: false,
    paths: {
        "npm:*": "jspm_packages/npm/*",
        "github:*": "jspm_packages/github/*",
        "availpro-*": "node_modules/availpro-*/availpro-*"
    },
    map: {
        "jquery": "github:components/jquery@1.11.3",
        "knockout": "github:knockout/knockout@3.3.0",
        "ko-hello-world": "node_modules/ko-hello-world/ko-hello-world",
        "typescript": "npm:typescript@1.6.2",
        "underscore": "npm:underscore@1.8.3"
    }
});