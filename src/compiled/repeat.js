"use strict";

var repeat = {};

repeat.getZIndex = function (element) {
  var index = 0;
  var parent = element.parentElement;

  while (parent.tagName != 'BODY' && index < 10) {
    index++;
    parent = parent.parentElement;
  }

  return index;
};

repeat.compareIndexedElements = function (a, b) {
  return b.index - a.index;
};

repeat.initialize = function () {
  var elements = document.querySelectorAll('[repeat-element]');
  var indexedElements = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var e = _step.value;
      indexedElements.push({
        element: e,
        index: repeat.getZIndex(e)
      });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  indexedElements.sort(repeat.compareIndexedElements);

  for (var _i = 0; _i < indexedElements.length; _i++) {
    var indexedElement = indexedElements[_i];

    var _repeat = indexedElement.element.getAttribute("repeat-element") - 1;

    indexedElement.element.removeAttribute("repeat-element");

    for (var i = 0; i < _repeat; i++) {
      indexedElement.element.parentElement.appendChild(indexedElement.element.cloneNode(true));
    }
  }
};

window.addEventListener("load", repeat.initialize);