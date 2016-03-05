meteor-gtfs
===============

Put gtfs zip files anywhere in your project, name them X.gtfs.zip.
These files will be loaded into mongodb upon startup if the specified
agency is not already present in the db.

Call a manual import using `GTFS.importFromZip(agency_key,pathToZip,options)` 

Check out the various [Options](Options.md) and their defaults.

Afterwards, use the GFTS object, just like described in the
[node-gtfs](https://github.com/brendannee/node-gtfs) package.
