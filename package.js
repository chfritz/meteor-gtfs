Package.describe({
    name: 'chfritz:gtfs',
    version: '0.0.2',
    // Brief, one-line summary of the package.
    summary: "A meteor wrapper of node-gtfs with additional gimicks. Auto-importing .gtfs.zip files.",
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/chfritz/meteor-gtfs',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md',
    author: "Christian Fritz"
});

Npm.depends({
    "mongoose": "3.6.20",
    "async": "0.2.10",
    "csv": "0.3.7",
    "unzip": "0.1.9",
    "mongodb": "1.4.18"
});

Package._transitional_registerBuildPlugin({
    name: "importServerGTFS",
    sources: [
        'plugin/import-gtfs.js'
    ],
});


Package.on_use(function (api, where) {
  api.use('underscore', 'server');
  // api.use(["mongoose", "async", "csv"]);
  if (api.export) {
    api.export('GTFS','server');
  }
  api.add_files([
      'utils.js',
      'models/Agency.js',
      'models/Calendar.js',
      'models/CalendarDate.js',
      'models/FareAttribute.js',
      'models/FareRule.js',
      'models/FeedInfo.js',
      'models/Frequencies.js',
      'models/Route.js',
      'models/Stop.js',
      'models/StopTime.js',
      'models/Transfer.js',
      'models/Trip.js',
      'import.js',
      'gtfs.js' 
  ], ['server']);
});
