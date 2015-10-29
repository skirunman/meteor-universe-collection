'use strict';

Package.describe({
    summary: 'Remote method from doc & collection, helpers on document/user, own doc classes, Multischemas, Hooks',
    name: 'universe:collection',
    version: '2.0.4',
    git: 'https://github.com/vazco/meteor-universe-collection'
});

Package.onUse(function (api) {
    api.versionsFrom(['METEOR@1.2.0.1']);
    api.use([
        'ejson',
        'check',
        'ecmascript',
        'underscore',
        'mongo',
        'minimongo',
        'universe:utilities@2.0.9',
        'aldeed:simple-schema@1.3.3'
    ]);

    api.imply('aldeed:simple-schema');

    api.use([
        'accounts-base',
        'universe:modules@0.6.1',
        'universe:aldeed-collection2-fixes'
    ], {weak: true});

    api.addFiles([
        'lib/UniCollection.js',
        'lib/UniCollectionSS.js',
        'lib/UniMethods.js',
        'lib/docPrototypes/UniDoc.js',
        'lib/UniUsers.js',
        'lib/docPrototypes/UniUser.js',
        'lib/BasicSchema.js',
        'lib/UniSecure.js',
        'lib/UniHooks.js'
    ]);

    api.addFiles(['lib/UniPublish.js', 'lib/UniMongoIndexes.js'], 'server');

    api.addFiles([
        'mixins/AbstractMixin.js',
        'mixins/BackupMixin.js',
        'mixins/ShowErrorMixin.js',
        'mixins/PublishAccessMixin.js'
    ]);
    api.addFiles('lib/modules/Export.js');
    api.export([
        'UniCollection',
        'UniUsers'
    ]);
});

Package.onTest(function (api) {
    api.use([
        'meteor',
        'es5-shim',
        'mongo',
        'minimongo',
        'tinytest',
        'underscore',
        'test-helpers',
        'universe:utilities@2.0.6',
        'ejson',
        'random',
        'ddp',
        'base64',
        'ecmascript',
        'check',
        'universe:collection',
        'aldeed:simple-schema@1.3.3'
    ]);
    api.addFiles('tests/livedata_tests.js', ['client', 'server']);
    api.addFiles('tests/schema_tests.js', ['client', 'server']);
    api.addFiles('tests/methods_tests.js', ['client', 'server']);
    api.addFiles('tests/mhooks_tests.js', ['client', 'server']);
});
