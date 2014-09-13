# Ember CLI Foundation SASS Addon

This addon includes **Foundation 5.4.2 SASS**, symlinks the bower folder and copies the settings as well as the main file over, so you can immediately customise everything.
The addon also installs [broccoli-sass](https://github.com/joliss/broccoli-sass), as well as [broccoli-csso](https://github.com/sindresorhus/broccoli-csso) as dependencies.

Make sure you have bower installed with: `npm install bower -g`

## Usage

* `npm install ember-cli-foundation-sass --save-dev`
* `ember g foundation-sass`

The generator sets everything up and you should find everything in your `app/styles` folder. Just make sure you are importing the `_settings.scss` as well as the `foundation.scss`.

It adds an option that you can include the foundation js (and dependencies), as follows in the `Brocfile.js`:

```js
var app = new EmberApp({
  'foundation-sass': {
    'modernizr': true, //includes modernizer
    'fastclick': true, //includes fastclick
    'foundationJs': 'all' //Includes just the full foundation.js without all modules
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
