var player,
  gamePlayed = [0, 0, 0, 0, 0],
  gameOrder = [0, 1, 2, 3, 4 ],
  gameIndex = 0,
  messageAppeared = false;

function player_main() {
  
  function playIndex() {
    
    play_game( $( this ).data( "index" ) );
    
  }
  
  $( "#navi li" ).click( playIndex );
  $( "#gameOverlay #games li" ).click( playIndex );
  $( ".playlist li" ).live( "click", playIndex );
  
  $( "#messageOverlay .confirm .btn" ).click( function() { 
    
    $( "#messageOverlay" ).hide();
    
  });
  
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
  $( "#player .playerBar a").attr( "href", "http://www.playtin.com/play/" + game.id );
  
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

    updateScore( _isWin );
    
    addToPlaylist( game.data.title, _index, _isWin );
    
    if ( isEndlessMode() ) {
      
      play_game( 5 );
      
    }
    
    gamePlayed[ _index ] = 1;
    
    if ( !messageAppeared && gamePlayed.every( function( e ) { return e === 1; } ) ) {
      
      $( "#messageOverlay" ).show();
      messageAppeared = true;
      
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

  // Remove last element if there are more than 5
  var items = ul.find(".box").not(".template");
  if(items.length > 5) {    

    var lastEle = items.last();

    lastEle.fadeOut(500, function() {

      lastEle.remove();

    });

  }

};

function updateScore( _isWin ) {

  var selector = _isWin ? "numberOfWin" : "numberOfLose";

  var scoreObj = $("." + selector);
  var newScore = parseInt(scoreObj.html()) + 1;

  scoreObj.fadeOut(500).html(newScore).fadeIn(500); 

};

(function($){
    $.fn.disableSelection = function() {
        return this
                 .attr('unselectable', 'on')
                 .css('user-select', 'none')
                 .on('selectstart', false);
    };
})(jQuery);
