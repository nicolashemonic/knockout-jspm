import * as jQuery from 'jquery';
import Page2 from '../ViewModels/Page2';
import templateFromUrlLoader from '../CustomLoaders/TemplateFromUrl';
import Component1 from '../ViewModels/Component1';
import HelloWorld from 'ko-hello-world';

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