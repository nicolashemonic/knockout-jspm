import ko = require('knockout');

class Component1 {
    private name = ko.observable<string>('Component 1 :)');
}

export = Component1;