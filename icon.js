'use strict';

let Methods = require('./methods');

class Icon extends Methods {
  constructor(options) {
    super();
    this._el = options.el;
  }
}

module.exports = Icon;
