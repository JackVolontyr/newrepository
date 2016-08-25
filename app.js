'use strict'

let Desk = require('./desk');

if (NODE_ENV === 'development') {
  console.log('development!');
}

// App
let desk = new Desk({
  el: document.querySelector(`.js-calc`)
});
