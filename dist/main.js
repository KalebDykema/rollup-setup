System.register([], function (exports, module) {
    'use strict';
    return {
        execute: function () {

            exports('default', main);

            function main() {
                module.import('./foo-c9123d17.js').then(({ default: foo }) => console.log(foo));
            }

        }
    };
});
