// var GTFS = Npm.require('gtfs');
var path = Npm.require('path');

Plugin.registerSourceHandler("gtfs.zip", function (compileStep) {
    // #LATER: try gtfs.zip extension
    // var contents = compileStep.read().toString('utf8');

    function handleError(e) {
        console.error(e || 'Unknown Error');
        process.exit(1)
    };

    var path_part = path.dirname(compileStep.inputPath);
    if (path_part === '.') {
        path_part = '';
    }
    
    if (path_part.length && path_part !== path.sep) {
        path_part = path_part + path.sep;
    }
    
    var ext = path.extname(compileStep.inputPath);
    var basename = path.basename(compileStep.inputPath, ext);
    var templateName = path.basename(compileStep.inputPath).match(/(.*)\.gtfs.zip$/)[1];
    
    // console.log(compileStep);
    // GTFS.importFromZip(templateName, compileStep._fullInputPath);

    // ^^ this wouldn't work, because the mongodb is not yet open
    // during pre-compilation; therefore using the same trick as
    // handlebars did: adding JS to execute the import on startup

    // js = [
    //     "Handlebars = Handlebars || {};",
    //     "Handlebars.templates = Handlebars.templates || {} ;",
    //     "var template = OriginalHandlebars.compile(" + JSON.stringify(contents) + ");",
    //     "Handlebars.templates[" + JSON.stringify(templateName) + "] = function (data, partials) { ",
    //     "partials = (partials || {});",
    //     "return template(data || {}, { ",
    //     "helpers: OriginalHandlebars.helpers,",
    //     "partials: partials,",
    //     "name: " + JSON.stringify(templateName),
    //     "});",
    //     "};"
    // ].join('');
    
    // compileStep.addJavaScript({
    //     path: path.join(path_part, 'handlebars.' + basename + '.js'),
    //     sourcePath: compileStep.inputPath,
    //     data: js
    // });

    compileStep.addJavaScript({
        path: path.join(path_part, 'gtfs.' + basename + '.js'),
        sourcePath: compileStep.inputPath,
        data: 'GTFS.importFromZip("' + templateName + '", "' + compileStep._fullInputPath.replace(/\\/g, "\\\\") + '");'
    });
});
