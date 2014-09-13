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
    var modernizrPath = path.join(app.bowerDirectory, 'modernizr');
    var fastclickPath = path.join(app.bowerDirectory, 'fastclick', 'lib');

    if (options.modernizr) {
      app.import(path.join(modernizrPath, 'modernizr.js'));
    }

    if (options.fastclick) {
      app.import(path.join(fastclickPath, 'fastclick.js'));
    }

    if (options.foundationJs) {
      if (typeof options.foundationJs == 'string' || options.foundationJs instanceof String) {
        if (options.foundationJs === 'all') {
          app.import(path.join(app.bowerDirectory, 'foundation', 'js', 'foundation.js'));
        }
      } else {
        app.import(path.join(foundationJSPath, 'foundation.js'));
      }

      if (options.foundationJs instanceof Array) {
        options.foundationJs.forEach(function(componentName) {
          app.import(path.join(foundationJSPath, 'foundation.' + componentName + '.js'));
        });
      }
    }
  }
};
