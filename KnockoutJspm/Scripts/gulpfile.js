var gulp = require('gulp');
var watch = require('gulp-watch');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');
var path = require('path');
var Builder = require('systemjs-builder');
var inputPath = 'AppStart';
var outputPath = 'Bundle';
var pages = ['page1', 'page2'];

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

function bundleScript(fileName) {
    var builder = new Builder('/', 'config.js');
    var fileInputPath = inputPath + '/' + fileName;
    var fileOutputPath = outputPath + '/' + fileName + '.js';
    var bundleConfig = {};

    bundleConfig.minify = process.env.NODE_ENV && process.env.NODE_ENV == 'Release';
    normalize(builder);

    return builder
        .bundle(fileInputPath, fileOutputPath, bundleConfig)
        .catch(console.log);
}

function bundleStyle(fileName) {
    var task = gulp.src('../Content/' + fileName + '.less')
        .pipe(less({
            paths: [path.join(__dirname, 'node_modules')]
        }));

    if (process.env.NODE_ENV && process.env.NODE_ENV == 'Release') {
        task.pipe(cssnano());
    }
    return task.pipe(gulp.dest('../Content'));
}

gulp.task('scripts', ['page1-scripts', 'page2-scripts']);
gulp.task('styles', ['page1-styles', 'page2-styles']);

gulp.task('watch', function () {
    gulp.watch('../Content/**/*.less', pages);
});

gulp.task('build', ['styles', 'scripts']);

gulp.task('default', ['watch']);

/* Add bundle here */

gulp.task('page1-scripts', function () {
    return bundleScript('page1');
});

gulp.task('page2-scripts', function () {
    return bundleScript('page2');
});

gulp.task('page1-styles', function () {
    return bundleStyle('page1');
});

gulp.task('page2-styles', function () {
    return bundleStyle('page2');
});