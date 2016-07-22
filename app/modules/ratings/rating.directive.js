angular.module('webflixApp')
  .directive('ratings', ratings);

function ratings() {
  function controller() {
    
  }
  
  //Directive Definition Object or DDO
  return {
    restrict: 'E',
    controller: controller,
    controllerAs: 'ratings',
    bindToController: true,
    scope: {
      movie: '='
    },
    templateUrl: 'build/partials/ratings/ratings.html'
  };
}