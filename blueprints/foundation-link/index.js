var fs          = require('fs');
var path        = require('path');
var symlinkOrCopySync = require('symlink-or-copy').sync;

module.exports = {
  normalizeEntityName: function() {
  },
  afterInstall: function(options) {
    //copying over the foundation.scss and _settings.scss to make foundation customization easy
    var foundationPath = path.join(process.cwd(), 'bower_components', 'foundation', 'scss');
    var stylePath = path.join(process.cwd(), 'app', 'styles');

    //symlinking foundation sass styles to app dir, so we don't have to mess with file paths
    var foundationSourcePath = path.join(foundationPath, 'foundation');
    var foundationDestPath = path.join(stylePath, 'foundation');
    if (!fs.existsSync(foundationDestPath)){
      symlinkOrCopySync(foundationSourcePath, foundationDestPath);
    }
    return true;
  }
};