
function removeLoader(){
    $( "#loader" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( "#loader" ).remove(); //makes page more lightweight 
  });  

$('body').append('div class="loader">Loading...</div></div>');
$(window).on('load', function(){
  setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
});

}