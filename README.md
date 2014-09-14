# Ember CLI Foundation SASS Addon

This addon extremely simplifies and automates the steps to include [Foundation 5.4.2 SASS](https://github.com/zurb/foundation) into your ember-cli project and to customize it completely to your needs.

## Usage

* `npm install ember-cli-foundation-sass --save-dev`
* `ember g foundation-sass`

This installs **Foundation 5.4.2** via Bower, copies over `_settings.scss` as well as the `foundation.scss` files into your `app/styles` folder so you can customize Foundation and just include the modules you need. Furthermore it symlinks the foundation sass folder (from bower_components) to your styles folder, so you don't have to change any of the import statements.

It also provides a default `app.scss` that includes the `_settings.scss` as well as the `_foundation.scss` for you.

It will try to overwrite the default ember-cli `.gitignore` to add the symlinked `foundation` folder. If you don't want that file to be overrided, do at that folder manually.

Lastly it installs [broccoli-sass](https://github.com/joliss/broccoli-sass) and [broccoli-csso](https://github.com/sindresorhus/broccoli-csso) purely for convenience.

### Options
This addon also simplifies adding the Foundation JavaScript (and dependencies) in the `Brocfile.js`:

```js
//Brocfile.js
var app = new EmberApp({
  'foundation-sass': {
    'modernizr': true, //includes modernizer
    'fastclick': true, //includes fastclick
    'foundationJs': 'all' //Includes the full foundation.js with all modules
  }
});


var app = new EmberApp({
  'foundation-sass': {
    'foundationJs': true //Includes just the core foundation.js without any modules
  }
});

var app = new EmberApp({
  'foundation-sass': {
    'foundationJs': ['tab', 'topbar', 'orbit', 'drodpdown']
    //Includes just the core foundation.js with the tab, topbar, orbut and dropdown module
  }
});
```
