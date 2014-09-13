var fs          = require('fs');
var path        = require('path');

module.exports = {
  normalizeEntityName: function() {
  },

  //beforeInstall: function(options) {
  //  console.log(options);
  //  return this.addBowerPackageToProject('foundation', 'zurb/bower-foundation#5.4.2');
  //},
  afterInstall: function(options) {
    var appPath = path.join(process.cwd(), 'app', 'styles', 'app.css');
    console.log(options);
    console.log(appPath);
    return true;
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