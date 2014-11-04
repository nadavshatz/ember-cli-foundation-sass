# ember-cli-foundation-sass Changelog

### master

### 0.4.1
* [BUGFIX] Make sure custom ember-cli-sass settings in the Brocfile are not getting overwritten.

### 0.4.0
* [BREAKING ENHANCEMENT] Using addPackagesToProject syntax which requires **ember-cli >= 0.1.2**.
* [BRAKING ENHANCEMENT] Switched to `ember-cli-sass`, which should fix or at least improve [#1](https://github.com/artificialio/ember-cli-foundation-sass/issues/1)
* [BRAKING ENHANCEMENT] Switched to `broccoli-clean-css`, since it generally seems to minify better: [CSSO vs clean-css](http://goalsmashers.github.io/css-minification-benchmark/)
* [BREAKING FEATURE] Removed `foundation-link` generator, since `ember-cli-sass` removes the need for symlinking.

### 0.3.3
* [ENHANCEMENT] Updated foundation to use `~5.4.7` and broccoli-sass to `^0.3.2`.

### 0.3.2
* [BUGFIX] Added `foundation-link` generator for when you clone an existing project and need to create the symlink the first time.

### 0.3.1
* [BUGFIX] Added .gitignore file for symlinked `foundation` folder.

### 0.3.0
* [FEATURE] Added default `app.scss` which imports foundation.

### 0.2.0
* [FEATURE] Added an option to include Foundation JS and dependencies easier.
* [BUGFIX] Fixed installing of the npm dependencies through adding the `RSVP` library.

### 0.1.1
* [FEATURE] Added installing of npm dependencies `broccoli-sass` and `broccoli-csso` for the actual ember-cli project and not this addon

### 0.1.0

* [FEATURE] Added `foundation-sass` generator, that bower installs foundation, symlinks the main folder, the  copies the `_settings.scss` and `foundation.scss` into your project for easy customisation.