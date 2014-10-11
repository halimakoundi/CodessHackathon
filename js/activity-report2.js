$( document ).ready(function() {
 
	function dropped(event, ui) {
		$("#result").css("background-color", 'green');	
		ui.draggable.css({"border-color": "orange"});

	}  

  
    $(".element-list").draggable({ helper: 'clone', cursor: "move" }); 
	$("#drop").droppable({ accept: '#drag > .element-list',
							drop: function(event, ui) {
								$(this).append($(ui.draggable).clone());
								$("#drop .element-list").addClass(".item-drag");
								$(".item-drag").removeClass("ui-draggable product");
								$(".item-drag").draggable({
									containment: 'parent',
								});	
								$(".item-drag span").css("display", 'none')
		
						}
		
		});
    $("#drop").on("drop", function(event, ui) {dropped(event, ui)});


});

