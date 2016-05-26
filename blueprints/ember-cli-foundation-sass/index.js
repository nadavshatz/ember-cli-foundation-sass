var fs          = require('fs');
var path        = require('path');

module.exports = {
  normalizeEntityName: function() {
  },

  beforeInstall: function(options) {
    return this.addBowerPackageToProject('foundation', '~5.5.0');
  },

  afterInstall: function(options) {
    //copying over the foundation.scss and _settings.scss to make foundation customization easy
    var foundationPath = path.join(process.cwd(), 'bower_components', 'foundation', 'scss');
    var stylePath = path.join(process.cwd(), 'app', 'styles');
    var settingsPath = path.join(foundationPath, 'foundation', '_settings.scss');
    var mainPath = path.join(foundationPath, 'foundation.scss');
    var _this = this;

    fs.writeFileSync(path.join(stylePath, '_settings.scss'), fs.readFileSync(settingsPath));
    fs.writeFileSync(path.join(stylePath, '_foundation.scss'), fs.readFileSync(mainPath));

    return this.addPackagesToProject([
      { name: 'ember-cli-sass', target: '~5.3.1'},
      { name: 'broccoli-clean-css', target: '~1.1.0' }
    ]);
  }
};
