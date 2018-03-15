(function (context, definition) {

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
        var defs = definition();
        for (var def in defs)
            context[def] = defs[def];
    }

}(this, function () {

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

            document.head.appendChild(link);
        });
    }

    return {
        prepare: prepare,
        prefetchDns: prepare.bind(null, 'dns-prefetch' /* ... */),
        preconnect: prepare.bind(null, 'preconnect' /* ... */),
        prefetch: prepare.bind(null, 'prefetch' /* ... */),
        preload: prepare.bind(null, 'preload' /* ... */),
        prerender: prepare.bind(null, 'prerender' /* ... */)
    };

}));