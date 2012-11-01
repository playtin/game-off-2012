$(document).ready(function() {

  // Toggle endless mode
  $("#endlessButton").click(function() {

    var btn = $(this);
    var activeClass = "btn-danger";

    btn.toggleClass(activeClass).toggleClass("btn-inverse");

    if( btn.hasClass(activeClass) ) {
      btn.html("Endless mode is on");
    } else {
      btn.html("Endless mode is off");
    }

  });

});


var isEndlessMode = function() {

  return $("#endlessButton").hasClass("btn-danger");

};


function randomGame(player) {

  if(!isEndlessMode()) return false;

  console.log("next game in 5 seconds");

  var random_index = Math.floor( Math.random() * (game_data.length - 1) );
  
  player.reset();

  // Show 5 Seconds countdown ...

  setTimeout(function() {
      player_main( game_data[random_index].data, game_data[random_index].id);
  }, 5000);  

}

function player_main( data, game_id ) {
  
  game_id = game_id || 0;

  window.player = new Player();  

  function increaseCounter( _isWin ) {
    
    $.ajax({
      url : '/games/' + game_id + '/played',
      data : { win : _isWin },
      type : 'PUT',
      success : function() {}
    }); 

    randomGame(window.player);

  };  
  
  console.log( JSON.stringify( data ) );
  
  if ( $( '#player' ) ) {
  
    player.init( $( '#player' ) );
    player.startRunloop();
    
    // player.debug();
  
    if ( data ) {
  
      player.parse( data );
  
    }
    
    if ( game_id ) {
      
      player.onWin = function() { increaseCounter( true ); };
      player.onLose = function() { increaseCounter( false ); };
      
    }
    
  }
  
};

(function($){
    $.fn.disableSelection = function() {
        return this
                 .attr('unselectable', 'on')
                 .css('user-select', 'none')
                 .on('selectstart', false);
    };
})(jQuery);
