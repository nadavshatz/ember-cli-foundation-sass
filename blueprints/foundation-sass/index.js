var fs          = require('fs');
var path        = require('path');

module.exports = {
  normalizeEntityName: function() {
  },

  beforeInstall: function(options) {
    return this.addBowerPackageToProject('foundation', '5.4.2');
  },
  afterInstall: function(options) {
    var foundationPath = path.join(process.cwd(), 'bower_components', 'foundation', 'scss');
    var stylePath = path.join(process.cwd(), 'app', 'styles');
    console.log(foundationPath);
    var settingsPath = path.join(foundationPath, 'foundation', '_settings.scss');
    console.log(settingsPath);
    copyFile(settingsPath, path.join(stylePath, '_settings.scss'));
    copyFile(foundationPath + '/normalize.scss', path.join(stylePath, '_test.scss'));
    return true;
  }
};

var copyFile = function(source, target) {
  //var cbCalled = false;
  fs.writeFileSync(target, fs.readFileSync(source));
  /*var input = fs.createReadStream(source);
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
  input.pipe(output);*/
  console.log('Writing done.');
  return true;
  //function done(err) {
  //  if (!cbCalled) {
  //    cb(err);
  //    cbCalled = true;
  //  }
  //}
};