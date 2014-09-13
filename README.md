# Ember CLI Foundation SASS Addon

This addon includes **Foundation 5.4.2 SASS**, symlinks the bower folder and copies the settings as well as the main file over, so you can immediately customise everything.  
The addon also installs [broccoli-sass](https://github.com/joliss/broccoli-sass), as well as [broccoli-csso](https://github.com/sindresorhus/broccoli-csso) as dependencies.

Make sure you have bower installed with: `npm install bower -g`

## Usage

* `npm install ember-cli-foundation-sass --save-dev`
* `ember g foundation-sass`

The generator sets everything up and you should find everything in your `app/styles` folder. Just make sure you are importing the `_settings.scss` as well as the `foundation.scss`.

It doesn't do anything for the Javascript yet, so you still need to include it in your `Brocfile.js` as usual via `app.import()`.
