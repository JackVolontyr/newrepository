'use strict';

let Methods = require('./methods');

class Input extends Methods {
  constructor(options) {
    super();
    this._el = options.el;
  }
}

module.exports = Input;
