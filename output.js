'use strict';

let Methods = require('./methods');

class Output extends Methods {
  constructor(options) {
    super();
    this._el = options.el;
  }
}

module.exports = Output;
