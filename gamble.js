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

    /**
     * Creates a link tag with the specified attributes
     *
     * @param {object} attributes The attributes of the link tag
     */
    return function gamble(attributes) {
        if (!attributes || typeof attributes !== 'object')
            throw new TypeError('argument \"attributes\" must be a object');

        if (!attributes.rel)
            throw new TypeError('attribute \"rel\" is required');

        if (!attributes.href)
            throw new TypeError('attribute \"href\" is required');

        var link = document.createElement('link');
        for (var attr in attributes) link[attr] = attributes[attr];
        link.onload = function (e) { document.head.removeChild(e.target); }
        link.onerror = function (e) { document.head.removeChild(e.target); }

        document.head.appendChild(link);
    }

}));