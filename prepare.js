/**
 * @file Small library for dynamically add a resource-hints in your web pages
 * @version 1.0.0
 * @author Kuznetsov Aleksey <kyznecov.alexey@gmail.com>
 * @license MIT
 */
(function (context, definition) {

    'use strict';

    // RequireJS and other-like
    if (typeof define === 'function' && define.amd) {
        define(definition);
    }
    // CommonJS and other-like
    else if (typeof module === 'object' && module.exports) {
        module.exports = definition();
    }
    // Global context
    else {
        var fns = definition();
        for (var fn in fns)
            context[fn] = fns[fn];
    }

}(this, function () {

    'use strict';

    var prepare = function prepare(rel, url, attrs) {
        if (!rel || typeof rel !== 'string')
            throw new TypeError('argument \"rel\" must be a string');

        if (!url || (typeof url !== 'string' && !(url instanceof Array)))
            throw new TypeError('argument \"url\" must be a string or array');

        var urls = [];
        if (typeof url === 'string')
            urls.push(url);
        else if (url instanceof Array)
            urls = url;

        urls.forEach(function (url) {
            var link = document.createElement('link');
            link.rel = rel;
            link.href = url;
            for (var attr in attrs)
                link[attr] = attrs[attr];

            link.onload = function (event) { document.head.removeChild(event.target); }
            link.onerror = function (event) { document.head.removeChild(event.target); }

            document.head.appendChild(link);
        });
    }

    return {
        /**
         * Creates a link tag with the rel attribute equal to the <i>rel</i>
         * parameter for each of the resources specified in the <i>url</i> parameter
         *
         * @public
         * @function prepare
         * @param {string} rel Value of <i>rel</i> attribute
         * @param {string|array} url Value of <i>href></i> attribute
         * @param {object} attrs Additional attributes
         */
        prepare: prepare,

        /**
         * Alias for {@link prepare}('dns-prefetch', ...)
         *
         * @public
         * @function predns
         * @param {string|array} url Value of <i>href</i> attribute
         * @param {object} attrs Additional attributes
         */
        preresolve: prepare.bind(null, 'dns-prefetch'),

        /**
         * Alias for {@link prepare}('preconnect', ...)
         *
         * @public
         * @function preconnect
         * @param {string|array} url Value of <i>href</i> attribute
         * @param {object} attrs Additional attributes
         */
        preconnect: prepare.bind(null, 'preconnect'),

        /**
         * Alias for {@link prepare}('prefetch', ...)
         *
         * @public
         * @function prefetch
         * @param {string|array} url Value of <i>href</i> attribute
         * @param {object} attrs Additional attributes
         */
        prefetch: prepare.bind(null, 'prefetch'),

        /**
         * Alias for {@link prepare}('preload', ...)
         *
         * @public
         * @function preload
         * @param {string|array} url Value of <i>href</i> attribute
         * @param {object} attrs Additional attributes
         */
        preload: prepare.bind(null, 'preload'),

        /**
         * Alias for {@link prepare}('prerender', ...)
         *
         * @public
         * @function prerender
         * @param {string|array} url Value of <i>href</i> attribute
         * @param {object} attrs Additional attributes
         */
        prerender: prepare.bind(null, 'prerender')
    };

}));