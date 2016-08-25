'use strict'

// Drag N Drop
function dragNdrop(e, options) {
  e.preventDefault();

  let elem = options.elem;
  let parent = options.parent;
  let finterFunc = options.ifTarget;

  let target = e.target;
  finterFunc(target);

  let coords = getCoords(elem);
  let shiftX = e.pageX - coords.left;
  let shiftY = e.pageY - coords.top;

  elem.style.position = 'absolute';
  // elem.style.zIndex = 1000;
  document.body.appendChild(elem);
  moveAt(e);

  function moveAt(e) {
    let positionLeft = e.pageX - shiftX;
    let positionTop  = e.pageY - shiftY;
    let deskRectW = parent.getBoundingClientRect().width;
    let deskRectH = parent.getBoundingClientRect().height;
    let elemRectW = elem.getBoundingClientRect().width;
    let elemRectH = elem.getBoundingClientRect().height;

    if (positionTop  <= 0) {
      positionTop = 0;
    } else if (positionTop + elemRectH  >= deskRectH) {
      positionTop = deskRectH - elemRectH;
    }
    if (positionLeft <= 0) {
      positionLeft = 0;
    } else if (positionLeft + elemRectW >= deskRectW) {
      positionLeft = deskRectW - elemRectW;
    }

    elem.style.cursor = 'move';
    elem.style.left = positionLeft + 'px';
    elem.style.top  = positionTop + 'px';
  }

  document.onmousemove = function(e) {
    moveAt(e);
  };
  // document.addEventListener('mousemove', wrapMoveAt);
  // function wrapMoveAt(e) {
  //   return moveAt(e);
  // };

  document.addEventListener('mouseup', stopMove);
  function stopMove(e) {
    elem.style.cursor = '';
    document.onmousemove = document.onmouseup = null;
  };
}

function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

module.exports = dragNdrop;
