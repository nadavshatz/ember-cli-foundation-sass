'use strict';

module.exports = function(environment, appConfig) {
  if(!appConfig.sassOptions) {
    appConfig.sassOptions = {};
  }

  if(!appConfig.sassOptions.includePaths) {
    appConfig.sassOptions.includePaths = [];
  }

  appConfig.sassOptions.includePaths.push('bower_components/foundation/scss');

  return {};
};
