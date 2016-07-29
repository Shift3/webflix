angular.module('webflixApp')
  .controller('MovieController', MovieCtrl);

function MovieCtrl(movie, storage) {
  var vm = this;
  vm.movie = movie; 
  vm.addComment = addComment;
  vm.emailPattern = /[a-z]+@[a-z]+\.(com|edu|net|io)/;

  /**
   * Add a comment to a movie.
   *
   * @param comment
   * @param email
   */
  function addComment(comment, email) {
    vm.movie.comments.push({
      comment: comment, 
      email: email
    });  
   
    storage.set(vm.movie.id + '.comment', vm.movie.comments);
    
    vm.comment = ''; 
  }
}