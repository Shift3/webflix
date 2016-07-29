angular.module('webflixApp')
  .controller('MovieController', MovieCtrl);

function MovieCtrl(movie, storage) {
  var vm = this;
  vm.movie = movie; 
  vm.addComment = addComment;
  vm.trashComment = trashComment;
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

  /**
   * Remove a comment.
   * 
   * @param comment
   */
  function trashComment(comment) {
    _.remove(vm.movie.comments, comment);
    storage.set(vm.movie.id + '.comment', vm.movie.comments);
  }
}