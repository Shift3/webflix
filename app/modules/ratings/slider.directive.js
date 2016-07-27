angular.module('webflixApp')
  .directive('slider', slider);

function slider() {
  function link(scope, element, attrs) {
    $(element[0]).rangeslider({polyfill: false});
  }
  
  return {
    restrict: 'A',
    link: link
  };
}