var player,
  gamePlayed = [0, 0, 0, 0, 0],
  gameOrder = [0, 1, 2, 3, 4 ],
  gameIndex = 0,
  messageAppeared = false;

function player_main() {
  
  // var names = ['push', 'pull', 'clone', 'branch', 'fork'];
  // 
  // for (var i = 0; i < 10; i++) {
  //   
  //   addToPlaylist( names[i % 5], i % 5, Math.random() > 0.5, Math.random() * 10 );
  //   
  // }
  
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
    
    addToPlaylist( game.data.title, _index, _isWin, player.timePlayed / 1000 );
    
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

function addToPlaylist( _title, _index, _isWin, _time ) {

  var ul = $('.playlist'),
    li = ul.find('.template').clone();

  li.removeClass( "template" );
  li.data( "index", _index );

  li.find( ".title" ).text( _title ).addClass( _isWin ? "win" : "lose" );
  
  if ( _isWin ) {
  
    li.find( ".time" ).text( _time.toFixed( 1 ) + 's' );
  
  }
  
  ul.prepend( li );
  li.hide().fadeIn( 500 );
  
  updateScore( _isWin );

};

function updateScore( _isWin ) {

  var scoreNode = $("." + ( _isWin ? "winCount" : "loseCount" ) );

  scoreNode.text( parseInt( scoreNode.html() ) + 1 ); 

};

(function($){
    $.fn.disableSelection = function() {
        return this.attr('unselectable', 'on').css('user-select', 'none').on('selectstart', false);
    };
})(jQuery);


// ---------------------------------
// Google Analytics 
var trackingCode = 'UA-32425368-1';

window._gaq = window._gaq || [];
window._gaq.push(['_setAccount', trackingCode]);
window._gaq.push(['_trackPageview']);
(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();