"use strict";

var repeat = {};

repeat.getZIndex = function (element) {
  var index = 0;
  var parent = element.parentElement;

  while (parent.tagName != 'BODY' && parent && index < 100) {
    index++;
    parent = parent.parentElement;
  }

  return index;
};

repeat.compareIndexedElements = function (a, b) {
  return b.index - a.index;
};

repeat.initializeTexts = function () {
  var elements = document.querySelectorAll('[repeat-text]');
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
    var text = indexedElement.element.innerHTML;

    var _repeat = indexedElement.element.getAttribute("repeat-text") - 1;

    indexedElement.element.removeAttribute("repeat-text");

    for (var i = 0; i < _repeat; i++) {
      indexedElement.element.innerHTML += text;
    }
  }
};

repeat.initializeElements = function () {
  var elements = document.querySelectorAll('[repeat-element]');
  var indexedElements = [];
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var e = _step2.value;
      indexedElements.push({
        element: e,
        index: repeat.getZIndex(e)
      });
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  indexedElements.sort(repeat.compareIndexedElements);

  for (var _i2 = 0; _i2 < indexedElements.length; _i2++) {
    var indexedElement = indexedElements[_i2];

    var _repeat2 = indexedElement.element.getAttribute("repeat-element") - 1;

    if (_repeat2 > 0) {
      indexedElement.element.removeAttribute("repeat-element");

      if (indexedElement.element.parentElement.childElementCount > 1) {
        for (var i = 0; i < _repeat2; i++) {
          indexedElement.element.parentElement.insertBefore(indexedElement.element.cloneNode(true), indexedElement.element);
        }
      } else {
        for (var i = 0; i < _repeat2; i++) {
          indexedElement.element.parentElement.appendChild(indexedElement.element.cloneNode(true));
        }
      }
    } else if (_repeat2 == -1) {
      indexedElement.element.parentElement.removeChild(indexedElement.element);
    }
  }
};

repeat.initialize = function () {
  repeat.initializeTexts();
  repeat.initializeElements();
};

window.addEventListener("load", repeat.initialize);