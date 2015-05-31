(function () {

  var native = jQuery.attr;
  jQuery.attr = function (element, attr, value) {
    if (attr === 'style') {
      resetStyles(element);
      applyStyles(element, value);
    } else {
      native.apply(jQuery, arguments);
    }
  };
  
  function applyStyles(element, styleString) {
    var styles = styleString.split(';');
    styles.forEach(function (styleBit) {
      var parts = styleBit.split(':');
      var property, value;
      if (parts.length === 2) {
        property = parts[0].trim();
        value = parts[1].trim();
  
        element.style[property] = value;
      }
    });
  }
  
  function resetStyles(element) {
    var styleList = [].slice.call(element);
    styleList.forEach(function (propertyName) {
      element.style.removeProperty(propertyName);
    });
  }

}());

