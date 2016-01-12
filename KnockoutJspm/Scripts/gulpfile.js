var gulp = require('gulp');
var Builder = require('systemjs-builder');
var inputPath = 'AppStart';
var outputPath = 'Bundle';

function normalize(builder) {
    var systemNormalize = builder.loader.normalize;

    builder.loader.normalize = function (name, parentName, parentAddress) {
        if (name.indexOf('availpro-') > -1) {
            var defaultJSExtension = this.defaultJSExtensions ? '.js' : '';
            name = this.baseURL + this.paths['availpro-*'].replace(new RegExp('availpro-\\*', 'g'), name) + defaultJSExtension;
        }
        return systemNormalize.call(this, name, parentName, parentAddress);
    }

    builder.loader.locate = function (load) {
        console.log(load.name)
        return load.name;
    }
}

function bundle(fileName) {
    var builder = new Builder('/', 'config.js'); // sets the optionnal baseURL and loads the configuration file
    var fileInputPath = inputPath + '/' + fileName;
    var fileOutputPath = outputPath + '/' + fileName + '.js';
    var bundleConfig = { minify: true };

    normalize(builder);

    return builder
        .bundle(fileInputPath, fileOutputPath, bundleConfig)
        .catch(console.log);
}

gulp.task('page1', function () {
    return bundle('Page1');
});

gulp.task('page2', function () {
    return bundle('Page2');
});

gulp.task('scripts', ['page1', 'page2'], function() {
    console.log('All scripts bundled!');
});