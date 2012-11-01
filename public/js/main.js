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

  var random_index = Math.floor( Math.random() * (game_data.length - 1) );
  
  player.reset();

  // Show 5 Seconds countdown ...

  setTimeout(function() {
      player_main( game_data[random_index].data, game_data[random_index].id);
  }, 5000);  

};


function player_main( data, game_id ) {
  
  game_id = game_id || 0;

  window.player = new Player();

  function after_played( _isWin ) {
    
    /*    
      $.ajax({
      url : '/games/' + game_id + '/played',
      data : { win : _isWin },
      type : 'PUT',
      success : function() {}
    }); */

    addToPlaylist(data.title, game_id, _isWin); // Todo -> game_id has to be the corresponding index of game_data

    if(isEndlessMode()) {
      randomGame(window.player);
    }

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
      
      player.onWin = function() { after_played( true ); };
      player.onLose = function() { after_played( false ); };
      
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
