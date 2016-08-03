angular.module('webflixApp')
  .service('webflixModal', webflixModal);

function webflixModal($uibModal) {
  /**
   * Open a modal.
   * 
   * @param controller
   * @param controllerAs
   * @param templateUrl
   * @param size
   * @returns {*}
   */
  this.open = function (controller, controllerAs, templateUrl, size) {
    return $uibModal.open({
      controller: controller,
      controllerAs: controllerAs,
      templateUrl: templateUrl,
      size: size || 'md' 
    }).result;
  };
}