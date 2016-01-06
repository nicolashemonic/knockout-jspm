import ko = require('knockout');

var templateFromUrlLoader = {
    loadTemplate: (name, templateConfig, callback) => {
        if (templateConfig.fromUrl) {
            // Uses jQuery's ajax facility to load the markup from a file
            $.get(templateConfig.fromUrl, (markupString) => {
                // We need an array of DOM nodes, not a string.
                // We can use the default loader to convert to the
                // required format.
                ko.components.defaultLoader.loadTemplate(name, markupString, callback);
            });
        } else {
            // Unrecognized config format. Let another loader handle it.
            callback(null);
        }
    }
};

export = templateFromUrlLoader;