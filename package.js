Package.describe({
    summary: 'Collections with helpers on document, prototyping own classes of doc. Users with helpers. Saving doc',
    name: 'vazco:universe-collection',
    version: '1.2.8',
    git: 'https://github.com/vazco/meteor-universe-collection'
});

Package.on_use(function (api) {
    api.versionsFrom(['METEOR@1.0.4']);
    api.use([
        'ejson',
        'check',
        'underscore',
        'accounts-base',
        'mongo',
        'vazco:universe-utilities@1.1.5'
    ], ['client', 'server']);

    api.use(['matb33:collection-hooks@0.7.13'], ['client', 'server'], {weak: true});


    api.add_files([
        'lib/UniCollection.js',
        'lib/docPrototypes/UniDoc.js',
        'lib/UniUsers.js',
        'lib/docPrototypes/UniUser.js',
        'lib/BasicSchema.js',
        'lib/UniSecure.js'
    ]);

    api.export([
        'UniCollection',
        'UniUsers'
    ]);
});
