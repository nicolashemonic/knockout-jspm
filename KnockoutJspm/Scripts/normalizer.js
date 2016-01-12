var systemNormalize = System.normalize;

System.normalize = function (name, parentName, parentAddress) {
    if (name.indexOf('availpro-') > -1) {
        var defaultJSExtension = this.defaultJSExtensions ? '.js' : '';
        name = this.baseURL + this.paths['availpro-*'].replace(new RegExp('availpro-\\*', 'g'), name) + defaultJSExtension;
    }
    return systemNormalize.call(this, name, parentName, parentAddress);
}

System.locate = function (load) {
    console.log(load.name)
    return load.name;
}