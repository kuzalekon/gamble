/**
 * @file A small and simply javascriptlibrary for dynamically add a resource-hints in your web pages
 * @version 1.0.0
 * @author Kuznetsov Aleksey <kyznecov.alexey@gmail.com>
 * @license MIT
 */
(function (name, context, definition) {

    // RequireJS and other-like
    if (typeof define === 'function' && define.amd) {
        define(name, definition);
    }
    // CommonJS and other-like
    else if (typeof module === 'object' && module.exports) {
        module.exports = definition();
    }
    // Global context
    else {
        context[name] = definition();
    }

}('gamble', this, function () {

    return function gamble(options) {

    }

}));