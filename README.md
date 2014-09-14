# Ember CLI Foundation SASS Addon

This addon extremely simplifies and automates the steps to include [Foundation 5.4.2 SASS](https://github.com/zurb/foundation) into your ember-cli project and customize it completely to your needs.

## Usage

* `npm install ember-cli-foundation-sass --save-dev`
* `ember g foundation-sass`

The generator then installs **Foundation 5.4.2** via Bower, copies over the `_settings.scss` as well as the `foundation.scss` into your `app/styles` folder so you can completely customize Foundation and just include the modules you need. Furthermore it symlinks the foundation sass folder (in bower_components) to your styles folder, so you don't have to change any of the imports.

It also provides a default `app.scss` that already includes the `_settings.scss` as well as teh `_foundation.scss`.

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
