import jQuery = require('jquery');
import Page2 = require('../ViewModels/Page2');
import templateFromUrlLoader = require('../CustomLoaders/TemplateFromUrl');
import Component1 = require('../ViewModels/Component1');
import HelloWorld = require('node_modules/ko-hello-world/ko-hello-world');

ko.components.loaders.unshift(templateFromUrlLoader);

ko.components.register('hello-world', {
    viewModel: HelloWorld,
    template: { fromUrl: '/Components/Load/HelloWorld' }
});

ko.components.register('component1', {
    viewModel: Component1,
    template: { fromUrl: '/Components/Load/Component1' }
});

jQuery(document).ready(() => {
    ko.applyBindings(new Page2());
});