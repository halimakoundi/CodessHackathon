  $(function() {
    $("#drag").draggable({ 
      revert: "invalid",
      revertDuration: 200,
      cursor: "move", 
      helper: "clone",
      cursorAt: { top: 17, left: 80 },
      start: function(event, ui) {
        $('#drop')
          .removeClass("ui-highlight")
            .find("p")
              .html("Drop here");
      },
      drag: function(event, ui) {
        $('#drop')
          .addClass("ui-selected")
          .find("p")
            .html("Yes, here !");
            
       $(".ui-draggable-dragging")
         .find("p")
           .html("Let's go");
      }
    });
  
    $("#drop").droppable({
      activeClass: "ui-hover",
      hoverClass: "ui-active",
      drop: function( event, ui ) {
        $(this)
          .addClass("ui-highlight")
          .find("p")
            .html("Got it !");
      }
    });
  });

$(document).ready(function() {
    $(".col-md-4 .infobox").on('click', function() {
        $(this).append("<h2 class='message'>Made TV/radio announcement</h2>");
        setTimeout(function(){
            console.log(1);
            $(".col-md-4 .infobox h2").remove();
        }, 1000);
        setTimeout(function(){
            console.log(2);
            $(".col-md-4 .infobox").append("<h2 class='message'>Called out for international aid</h2>");
        }, 1000);
    });
});
