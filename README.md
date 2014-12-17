# Ember CLI Foundation SASS Addon
**Requires at least ember-cli v0.1.2**  
*If you want to use it with ember-cli >=0.0.44, use v0.3.3 of the addon.*

This addon automates the steps to include SASS with [Foundation 5.4.7](https://github.com/zurb/foundation) into your ember-cli using [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass) as well as simplifying the customization of the settings and which components you want to include.

It also installs [broccoli-clean-css](https://github.com/shinnn/broccoli-clean-css), purely for convinience since it gernally seems to lead to the best minifiaction results: http://goalsmashers.github.io/css-minification-benchmark/.

## Usage

* `npm install ember-cli-foundation-sass --save-dev`
* `ember g foundation-sass`
* If you clone an existing project with this addon, just run `npm i && bower i`.

Running the blueprint installs **Foundation 5.4.7** via Bower, copies over the `_settings.scss` as well as the `foundation.scss` to your `app/styles` folder.
It also creates a default `app.scss` that imports the `_settings.scss` as well as the `_foundation.scss`, so you can get serve the app immediately. Lastly, it installs the already mentioned dependencies [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass) and [broccoli-clean-css](https://github.com/shinnn/broccoli-clean-css).

This setup is made so you don't have to worry about how to how to be able to customize Foundation, but just lets you do it. Furthermore [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass) helps that the foundation `import` statements (in the `_foundation.scss`) 'just' work.


### Options

This addon provides an API to simplify adding the Foundation JavaScript modules and dependencies:

```js
//Brocfile.js
//Includes modernizr, fastclick and the full foundation.js with all modules
var app = new EmberApp({
  'foundation-sass': {
    'modernizr': true,
    'fastclick': true,
    'foundationJs': 'all'
  }
});

//Includes the core foundation.js with the tab, topbar, orbit and dropdown module
var app = new EmberApp({
  'foundation-sass': {
    'foundationJs': ['tab', 'topbar', 'orbit', 'dropdown']
  }
});

//Includes just the core foundation.js without any modules
var app = new EmberApp({
  'foundation-sass': {
    'foundationJs': true
  }
});
```

Whenever you use any foundation JS module in your code, make sure that view/component includes the following:
```js
import Ember from 'ember';

export default Ember.View.extend({ //or Ember.Component.extend
  didInsertElement: function() {
    this.$().foundation(); //or Ember.$(document).foundation();
  }
});
```
