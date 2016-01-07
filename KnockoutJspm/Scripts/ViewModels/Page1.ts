import _ = require('underscore'); // typescript 1.4 syntax
// var _ = require('underscore'); // commonJS syntax
// import * as _ from 'underscore'; // es6 syntax (typescript 1.5+ syntax)

import Interface1 = require('../Interfaces/Interface1');

class Page1
{
    private model: Interface1 = {
        names: ['Olivier', 'Geoffroy', 'Nicolas', 'Stéphane']
    }

    constructor()
    {
        console.log(_.first(this.model.names));
    }
}

export = Page1; // typescript 1.5 syntax
// module.exports = Page1; // commonJS syntax
// export default Page1; // es6 syntax (typescript 1.5+ syntax)