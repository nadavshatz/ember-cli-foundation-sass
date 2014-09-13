var fs          = require('fs');
var path        = require('path');
var symlinkOrCopySync = require('symlink-or-copy').sync;

module.exports = {
  normalizeEntityName: function() {
  },

  beforeInstall: function(options) {
    return this.addBowerPackageToProject('foundation', '5.4.2');
  },
  afterInstall: function(options) {
    //copying over the foundation.scss and _settings.scss to make foundation customization easy
    var foundationPath = path.join(process.cwd(), 'bower_components', 'foundation', 'scss');
    var stylePath = path.join(process.cwd(), 'app', 'styles');
    var settingsPath = path.join(foundationPath, 'foundation', '_settings.scss');
    var mainPath = path.join(foundationPath, 'foundation.scss');

    fs.writeFileSync(path.join(stylePath, '_settings.scss'), fs.readFileSync(settingsPath));
    fs.writeFileSync(path.join(stylePath, '_foundation.scss'), fs.readFileSync(mainPath));

    //symlinking foundation sass styles to app dir, so we don't have to mess with file paths
    var foundationSourcePath = path.join(foundationPath, 'foundation');
    var foundationDestPath = path.join(stylePath, 'foundation');
    if (!fs.existsSync(destBootstrapSourcePath)){
      symlinkOrCopySync(foundationSourcePath, foundationDestPath);
    }
    return true;
  }
};