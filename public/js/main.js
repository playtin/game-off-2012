var player,
  gamePlayed = [0, 0, 0, 0, 0],
  gameOrder = [0, 1, 2, 3, 4 ],
  gameIndex = 0;

function player_main() {
  
  function playIndex() {
    
    play_game( $( this ).data( "index" ) );
    
  }
  
  $( "#navi li" ).click( playIndex );
  $( "#gameOverlay #games li" ).click( playIndex );
  $( ".playlist li" ).live( "click", playIndex );
  
  player = new Player();
  
  player.init( $( '#player' ) );
  player.startRunloop();
  
};

function play_game( _index ) {
  
  $( "#navi li" ).removeClass( "active" );
  $( "#navi li:nth-child(" + ( _index + 1 ) + ")" ).addClass( "active" );
  
  $( "#gameOverlay" ).hide();
  $( "#messageOverlay" ).hide();
  
  if ( _index === 5 ) {
    
    if ( gameIndex === 0 ) {
      
      gameOrder.shuffle();
      
    }
    
    _index = gameOrder[ gameIndex ];
    gameIndex = ( gameIndex + 1 ) % 5;
    
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
    
    addToPlaylist( game.data.title, _index, _isWin );
    
    if ( isEndlessMode() ) {
      
      play_game( 5 );
      
    }
    
    gamePlayed[ _index ] = 1;
    
    if ( gamePlayed.every( function( e ) { return e === 1; } ) ) {
      
      $( "#messageOverlay" ).show();
      
    }
    
    return !isEndlessMode();
    
  }
  
};

function isEndlessMode() {

  return $( "#navi li:nth-child(6)" ).hasClass( "active" );

};

function addToPlaylist( _title, _index, _isWin ) {

  var ul = $('.playlist'),
    newLi = ul.find('.template').clone();

  newLi.removeClass( "template" ).hide();
  newLi.data( "index", _index );

  var titleEle = newLi.find( ".title" );
  titleEle.html( _title );
  titleEle.addClass( _isWin ? "win" : "lose" );

  ul.prepend( newLi );
  newLi.fadeIn( 500 );

};

(function($){
    $.fn.disableSelection = function() {
        return this
                 .attr('unselectable', 'on')
                 .css('user-select', 'none')
                 .on('selectstart', false);
    };
})(jQuery);
