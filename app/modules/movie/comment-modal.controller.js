angular.module('webflixApp')
  .controller('CommentModalCtrl', CommentModalCtrl);

function CommentModalCtrl($uibModalInstance) {
  var vm = this;

  /**
   * Email regex.
   * 
   * @type {RegExp}
   */
  vm.emailPattern = /[a-z]+@[a-z]+\.(com|edu|net|io)/;
  
  /**
   * Holds the actual comment data.
   * 
   * @type {{}}
   */
  vm.data = {};

  /**
   * Close the modal so we can save the comment.
   * 
   * @returns {*}
   */
  vm.close = function () {
    return $uibModalInstance.close(vm.data); 
  };

  /**
   * Throw it all away and don't save the comment.
   * 
   * @returns {*}
   */
  vm.dismiss = function () {
    return $uibModalInstance.dismiss(); 
  };
}