$( document ).ready(function() {

  $('.home-content').addClass(function( randomNumber ) {
    var randomNumber = Math.floor(Math.random() * 13) + 1;

    return "bg" + randomNumber;
  });

});
