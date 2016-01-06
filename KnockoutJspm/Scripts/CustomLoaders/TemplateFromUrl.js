define(["require", "exports", 'knockout'], function (require, exports, ko) {
    var templateFromUrlLoader = {
        loadTemplate: function (name, templateConfig, callback) {
            if (templateConfig.fromUrl) {
                // Uses jQuery's ajax facility to load the markup from a file
                $.get(templateConfig.fromUrl, function (markupString) {
                    // We need an array of DOM nodes, not a string.
                    // We can use the default loader to convert to the
                    // required format.
                    ko.components.defaultLoader.loadTemplate(name, markupString, callback);
                });
            }
            else {
                // Unrecognized config format. Let another loader handle it.
                callback(null);
            }
        }
    };
    return templateFromUrlLoader;
});
//# sourceMappingURL=TemplateFromUrl.js.map