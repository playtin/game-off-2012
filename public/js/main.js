function player_main() {
  
  $("#endlessButton").click(function() {

    var btn = $(this),
      activeClass = "btn-danger";

    btn.toggleClass(activeClass).toggleClass("btn-inverse");

    if( btn.hasClass(activeClass) ) {
      btn.html("Endless mode is on");
    } else {
      btn.html("Endless mode is off");
    }

  });
  
  window.player = new Player();
  
  if ( $( '#player' ) ) {
  
    player.init( $( '#player' ) );
    player.startRunloop();
    
    play_game( game_data[0] );
    
  }
  
};

function play_game( _game ) {
  
  player.parse( _game.data );
  
  player.onRestart = function( _isWin ) {
    
    /*
    $.ajax({
      url : '/games/' + game_id + '/played',
      data : { win : _isWin },
      type : 'PUT',
      success : function() {}
    });
    */
    
    addToPlaylist( _game.data.title, _game.id, _isWin ); // Todo -> game_id has to be the corresponding index of game_data
    
    if ( isEndlessMode() ) {
      
      play_game( game_data[ randInt( 0, game_data.length ) ] )
      
      return false;
      
    }
    
    return true;
    
  }
  
};

function isEndlessMode() {

  return $("#endlessButton").hasClass("btn-danger");

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
