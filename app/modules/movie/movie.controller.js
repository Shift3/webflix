angular.module('webflixApp')
  .controller('MovieController', MovieCtrl);

function MovieCtrl(movie) {
  var vm = this;
  vm.movie = movie; 
  vm.addComment = addComment;
  vm.emailPattern = /[a-z]+@[a-z]+\.(com|edu|net|io)/;
  
  /**
   * Add a comment to a movie.
   * 
   * @param comment
   */
  function addComment(comment) {
    vm.movie.comments.push(comment);  
    vm.comment = ''; 
  }
}