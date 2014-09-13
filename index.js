var fs   = require('fs');
var path = require('path');

module.exports = {
  name: 'Ember CLI Foundation SASS',

  included: function(app) {
    this._super.included(app);
    //this.app.import(app.bowerDirectory);
    var emberCLIVersion = app.project.emberCLIVersion();
    if (emberCLIVersion < '0.0.44') {
      throw new Error('ember-cli-bootstrap-sass requires ember-cli version 0.0.44 or greater.\n');
    }

    var options         = app.options['foundation-sass'] || {};
    var foundationJSPath = path.join(app.bowerDirectory, 'foundation', 'js', 'foundation');

    if (options.importFoundationJS) {
      console.log(options.importFoundationJS);
      app.import(path.join(foundationJSPath, 'foundation.js'));
      if (options.importFoundationJS instanceof Array) {
        options.importFoundationJS.forEach(function(componentName) {
          console.log(componentName);
          app.import(path.join(foundationJSPath, 'foundation.' + componentName + '.js'));
        });
      }
    }
    //console.log(app);
    //console.log('--------');
    //console.log(app.options);

    //var options         = app.options['ember-cli-bootstrap-sass'] || {};
    //var modulePath      = path.relative(app.project.root, __dirname);
    //var foundationPath   = app.bowerDirectory + '/foundation/scss';
    //var emberBsPath     = 'vendor/ember-addons.bs_for_ember/dist'
    //var javascriptsPath = path.join(emberBsPath, 'js');
    //var jsFiles         = options.components ? options.components : fs.readdirSync(path.join(modulePath, javascriptsPath));

    // Import css from bootstrap
    // app.import(path.join(bootstrapPath, 'css/bootstrap-theme.css'));
    // app.import(path.join(bootstrapPath, 'stylesheets/_bootstrap.scss'));
    //app.import(path.join(emberBsPath, 'css/bs-growl-notifications.min.css'));

    // Import javascript files
    //app.import(path.join(javascriptsPath, 'bs-core.max.js')); // Import bs-core first

    //jsFiles.forEach(function(file) {
    //  var fileName = file.split('.')[0];
    //  app.import(path.join(javascriptsPath, fileName + '.max.js'));
    //});

    //if (options.importFoundationJS) {
    //  app.import(path.join(foundationPath, 'js/foundation.js'));
    //}

    // Import glyphicons
    //app.import(path.join(bootstrapPath, 'fonts/bootstrap/glyphicons-halflings-regular.eot'), { destDir: '/fonts' });
    //app.import(path.join(bootstrapPath, 'fonts/bootstrap/glyphicons-halflings-regular.svg'), { destDir: '/fonts' });
    //app.import(path.join(bootstrapPath, 'fonts/bootstrap/glyphicons-halflings-regular.ttf'), { destDir: '/fonts' });
    //app.import(path.join(bootstrapPath, 'fonts/bootstrap/glyphicons-halflings-regular.woff'), { destDir: '/fonts' });
    //var sourceSettingsFile = path.join(foundationPath, 'foundation/_settings.scss');
    //var destSettingsFile = path.join(modulePath, 'app/styles/_settings.scss');
    //copyFile(sourceSettingsFile, destSettingsFile);
  }
};

var copyFile = function(source, target) {
  //var cbCalled = false;

  var input = fs.createReadStream(source);
  input.on("error", function(err) {
    done(err);
  });
  var output = fs.createWriteStream(target);
  output.on("error", function(err) {
    done(err);
  });
  output.on("close", function(ex) {
    done();
  });
  input.pipe(output);

  //function done(err) {
  //  if (!cbCalled) {
  //    cb(err);
  //    cbCalled = true;
  //  }
  //}
};
