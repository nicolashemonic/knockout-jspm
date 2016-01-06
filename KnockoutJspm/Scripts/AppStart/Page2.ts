import jQuery = require('jquery');
import Page2 = require('../ViewModels/Page2');
import Component1 = require('../ViewModels/Component1');
import templateFromUrlLoader = require('../CustomLoaders/TemplateFromUrl');

ko.components.loaders.unshift(templateFromUrlLoader);

ko.components.register('component1', {
    viewModel: Component1,
    template: { fromUrl: '/Components/Load/Component1' }
});

jQuery(document).ready(() => {
    ko.applyBindings(new Page2());
});