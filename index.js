/* eslint-env node */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-fabric2-shim',

  included(app) {
    this._super.included.apply(this, arguments);

    const vendor = this.treePaths.vendor;

    app.import(vendor + '/fabric2.js', { prepend: true });
    app.import(vendor + '/shims/fabric.js');
  },
};
