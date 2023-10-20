$(document).ready(function() {
   $('.ham-bar').on('click',  function(e){
      e.preventDefault();
      $('body').toggleClass('menu-show');
  });
});