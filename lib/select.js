var eventy = require('eventy');
var jQuery = require('jquery');

module.exports = function Select(element) {

  if (element.__initSelect) throw new Error('initialized element already');

  eventy(element);

  element.addEventListener('click', onClick, true);

  // we put a listener to handle a click on an option
  element.getChildren.addEventListener('click', clickOption, true);

  function onClick(click) {
  }

  function clickOption(click) {
      // set the clicked option as selected 
  }

  function getParents(ele) {
    var ancestors = [],
        parent = ele.parentNode;

    while (parent && (parent.nodeType !== parent.DOCUMENT_NODE)) {
      ancestors.push(parent);
      parent = parent.parentNode;
    }

    return ancestors;
  }

  function getChilds(ele) {
    var children = [],

    return children;
  }


  /*
    Sets or returns the value of the option atrribute of this select button
    @return String
  */
  Object.defineProperty(element, 'option', {
  })

  /*
    Sets or returns whether this select button is disabled or not
    @return Boolean
  */
  Object.defineProperty(element, 'disabled', {
    get: function () {
      if (element.hasAttribute('disabled')) return true;
      else return false;
    },

    set: function (value) {
      if (value) {
        element.setAttribute('disabled', '');
        element.trigger('disabled').trigger('change');
      } else {
        element.removeAttribute('disabled');
        element.trigger('enabled').trigger('change');
      }
    }
  })

  /*
    Returns a reference to the form that contains this select button
    @return Object
  */
  Object.defineProperty(element, 'form', {
    value: (function () {
      var parents = getParents(element);

      for (var i in parents) {
        if (parents[i].tagName === 'FORM') return parents[i];
      }

      return null;
    }())
  })

  /*
    Sets or returns the value of the length atrribute of this select button
    @return String
  */
  Object.defineProperty(element, 'length', {
    get: function () {
      if (element.hasAttribute('length')) return element.getAttribute('length');
      else return 10;
    },

    set: function (value) {
      element.setAttribute('length', value);
      element.trigger('change');
    }
  })  

  /*
    Sets or returns the value of the multiple atrribute of this select button
    @return String
  */
  Object.defineProperty(element, 'multiple', {
    get: function () {
      if (element.hasAttribute('multiple')) return element.getAttribute('multiple');
      else return false;
    },

    set: function (value) {
      element.setAttribute('multiple', value);
      element.trigger('change');
    }
  })  

  /*
    Sets or returns the value of the name atrribute of this select button
    @return String
  */
  Object.defineProperty(element, 'name', {
    get: function () {
      if (element.hasAttribute('name')) return element.getAttribute('name');
      else return '';
    },

    set: function (value) {
      element.setAttribute('name', value);
      element.trigger('change');
    }
  })

  /*
    Sets or returns the value of the selectedIndex atrribute of this select button
    @return String
  */
  Object.defineProperty(element, 'selectedIndex', {
    get: function () {
      if (element.hasAttribute('selectedIndex')) return element.getAttribute('selectedIndex');
      else return 0;
    },

    set: function (value) {
      element.setAttribute('selectedIndex', value);
      element.trigger('change');
    }
  })

  /*
    Sets or returns the value of the size atrribute of this select button
    @return String
  */
  Object.defineProperty(element, 'size', {
    get: function () {
      if (element.hasAttribute('size')) return element.getAttribute('size');
      else return 5;
    },

    set: function (value) {
      element.setAttribute('size', value);
      element.trigger('change');
    }
  })

  /*
    Returns which type of form element this select button is
    @return String
  */
  Object.defineProperty(element, 'type', {
    value: 'select'
  })  

  /*
    Function to add an option
  */
  function add() {

  }

  /*
    Function to remove an option
  */
  function remove() {

  }

  element.__initSelect = true;
  return element;
}
