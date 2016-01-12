import * as jQuery from 'jquery';
import 'jquery-ui/datepicker';
import * as ko from 'knockout';
import Page2 from '../ViewModels/Page2';
import templateFromUrlLoader from '../CustomLoaders/TemplateFromUrl';
import Component1 from '../ViewModels/Component1';

ko.components.loaders.unshift(templateFromUrlLoader);

ko.components.register('component1', {
    viewModel: Component1,
    template: { fromUrl: '/Components/Load/Component1' }
});

jQuery(document).ready(() =>
{
    ko.applyBindings(new Page2());
});

jQuery(function ()
{
    jQuery("#datepicker").datepicker();
});