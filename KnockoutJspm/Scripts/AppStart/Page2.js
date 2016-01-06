define(["require", "exports", 'jquery', '../ViewModels/Page2', '../ViewModels/Component1', '../CustomLoaders/TemplateFromUrl'], function (require, exports, jQuery, Page2, Component1, templateFromUrlLoader) {
    ko.components.loaders.unshift(templateFromUrlLoader);
    ko.components.register('component1', {
        viewModel: Component1,
        template: { fromUrl: '/Components/Load/Component1' }
    });
    jQuery(document).ready(function () {
        ko.applyBindings(new Page2());
    });
});
//# sourceMappingURL=Page2.js.map