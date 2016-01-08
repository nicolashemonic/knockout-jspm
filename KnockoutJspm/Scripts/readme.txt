-- Import module

// typescript 1.5 syntax
import Page1 = require('../ViewModels/Page1'); 

// commonJS syntax
var Page1 = require('../ViewModels/Page1'); 

// es6 syntax (typescript 1.6+ syntax)
import * as jQuery from ../ViewModels/Page1 // for librarie with no default export
import Page1 from '../ViewModels/Page1';

-- Export module

// typescript 1.5 syntax
export = Page1; 

// commonJS syntax
module.exports = Page1; 

// es6 syntax (typescript 1.6+ syntax)
export default Page1;