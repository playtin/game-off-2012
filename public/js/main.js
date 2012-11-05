function player_main() {
  
  $( "#navi li" ).click( function() {
    
    play_game( $( this ).data( "index" ) );
    
  });
  
  $( "#overlay #games li" ).click( function() {
    
    play_game( $( this ).data( "index" ) );
    
  });
  
  window.player = new Player();
  
  if ( $( '#player' ) ) {
  
    player.init( $( '#player' ) );
    player.startRunloop();
    
  }
  
};

function play_game( _index ) {
  
  $( "#navi li" ).removeClass( "active" );
  $( "#navi li:nth-child(" + ( _index + 1 ) + ")" ).addClass( "active" );
  
  $( "#overlay" ).hide();
  
  if ( _index === 5 ) {
    
    _index = randInt( 0, 5 );
    
  }
  
  var game = game_data[ _index ];
  
  $( "#player .title" ).text( game.data.title );
  $( "#player .instruction" ).text( game.data.instructions );
  
  player.parse( game.data );
  
  player.onRestart = function( _isWin ) {
    
    /*
    $.ajax({
      url : '/games/' + game_id + '/played',
      data : { win : _isWin },
      type : 'PUT',
      success : function() {}
    });
    */
    
    addToPlaylist( game.data.title, game.id, _isWin ); // Todo -> game_id has to be the corresponding index of game_data
    
    if ( isEndlessMode() ) {
      
      play_game( 5 );
      
      return false;
      
    }
    
    return true;
    
  }
  
};

function isEndlessMode() {

  return $( "#navi li:nth-child(6)" ).hasClass( "active" );

};

function addToPlaylist(_title, _id, _isWin) {

  var ul = $('.playlist');
  var template = ul.find('.template');

  var newLi = template.clone().removeClass("template").hide();
  newLi.attr("data-id", _id);

  var titleEle = newLi.find(".title");
  titleEle.html(_title);

  var statusClass = _isWin ? "win" : "lose";
  titleEle.addClass(statusClass);

  ul.prepend(newLi);
  newLi.fadeIn(500);
  
};

(function($){
    $.fn.disableSelection = function() {
        return this
                 .attr('unselectable', 'on')
                 .css('user-select', 'none')
                 .on('selectstart', false);
    };
})(jQuery);
