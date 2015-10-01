meteor-gtfs
===============

Put gtfs zip files anywhere in your project, name them X.gtfs.zip.
These files will be loaded into mongodb upon startup if the specified
agency is not already present in the db.

Afterwards, use the GFTS object, just like described in the
[node-gtfs](https://github.com/brendannee/node-gtfs) package.
