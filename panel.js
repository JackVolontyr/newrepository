'use strict';

let Methods = require('./methods');

class Panel extends Methods {
  constructor(options) {
    super();
    this._el = options.el;
  }
}

module.exports = Panel;
