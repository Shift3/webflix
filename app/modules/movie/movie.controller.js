angular.module('webflixApp')
  .controller('MovieController', MovieCtrl);

function MovieCtrl(movie, storage, webflixModal) {
  var vm = this;
  vm.movie = movie;
  vm.addComment = addComment;
  vm.trashComment = trashComment;
  vm.openCommentModal = openCommentModal;

  /**
   * Opens a modal for commenting.
   */
  function openCommentModal() {
    webflixModal
      .open('CommentModalCtrl', 'commentModal', 'build/partials/movie/comment-modal.html')
      .then(addComment);
  }

  /**
   * Add a comment to a movie.
   *
   * @param commentData
   */
  function addComment(commentData) {
    vm.movie.comments.push(commentData);
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