define(["require", "exports", 'underscore'], function (require, exports, _) {
    // var _ = require('underscore'); // commonJS syntax
    // import * as _ from 'underscore'; // es6 syntax (typescript 1.5+ syntax)
    var Page1 = (function () {
        function Page1() {
            this.names = ['Olivier', 'Geoffroy', 'Nicolas', 'Stéphane'];
            console.log(_.first(this.names));
        }
        return Page1;
    })();
    return Page1;
});
// module.exports = Page1; // commonJS syntax
// export default Page1; // es6 syntax (typescript 1.5+ syntax) 
//# sourceMappingURL=Page1.js.map