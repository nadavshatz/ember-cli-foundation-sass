var fs   = require('fs');
var path = require('path');

module.exports = {
  name: 'Ember CLI Foundation SASS',

  included: function(app) {
    this._super.included(app);
    //this.app.import(app.bowerDirectory);
    var emberCLIVersion = app.project.emberCLIVersion();
    if (emberCLIVersion < '0.1.2') {
      throw new Error('ember-cli-foundation-sass requires ember-cli version 0.1.2 or greater.\n');
    }

    if (app.options['foundation-sass']) {
      throw new Error('Using "foundation-sass" in your Brocfile is deprecated.  Please use "ember-cli-foundation-sass" instead.');
    }

    var options          = app.options['ember-cli-foundation-sass'] || {};
    var foundationJSPath = path.join(app.bowerDirectory, 'foundation', 'js', 'foundation');
    var modernizrPath    = path.join(app.bowerDirectory, 'modernizr');
    var fastclickPath    = path.join(app.bowerDirectory, 'fastclick', 'lib');

    if (options.modernizr) {
      app.import(path.join(modernizrPath, 'modernizr.js'));
    }

    if (options.fastclick) {
      app.import(path.join(fastclickPath, 'fastclick.js'));
    }

    //Includes the foundation js depending on the given option 'all', true, ['topbar']
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

    //Make sure the ember-cli-sass options are set/appended in the right way (and not just overwriting)
    if(app.options['sassOptions'] && app.options['sassOptions']['includePaths']) {
      app.options['sassOptions']['includePaths'].push('bower_components/foundation/scss');
    } else {
      app.options['sassOptions'] = app.options['sassOptions'] || {};
      app.options['sassOptions']['includePaths'] = ['bower_components/foundation/scss'];
    }
  }
};
