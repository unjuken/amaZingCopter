// $( document ).on( "mousemove", function( event ) {
//   var x = event.pageX;
//   var y = event.pageY;

// });

function moveAndOver(x, y)
{
  moveHand(x,y);
  testIfOverForDivs(x,y);
}

function moveHand(cursorPositionX,cursorPositionY){
	var windowHeight = $(window).height() - 1;
	var windowWidth = $(window).width() - 1;
	if(cursorPositionX == 0 || cursorPositionY == 0 || cursorPositionX == windowWidth || cursorPositionY == windowHeight){
	$( "#hand" ).css( "display","none");
	}else{
	cursorPositionX-=25;
	cursorPositionY-=25;
	$( "#hand" ).css( "display" , "block" );
	$( "#hand" ).css( "top" , cursorPositionY + "px");
	$( "#hand" ).css( "left" , cursorPositionX + "px");
	}
}

function testIfOverForDivs(cursorPositionX,cursorPositionY){
	testIfOver(cursorPositionX, cursorPositionY, "#up");
	testIfOver(cursorPositionX, cursorPositionY, "#down");
	testIfOver(cursorPositionX, cursorPositionY, "#left");
	testIfOver(cursorPositionX, cursorPositionY, "#rotate-left");
	testIfOver(cursorPositionX, cursorPositionY, "#forward");
	testIfOver(cursorPositionX, cursorPositionY, "#backward");
	testIfOver(cursorPositionX, cursorPositionY, "#right");
	testIfOver(cursorPositionX, cursorPositionY, "#rotate-right");
}

function testIfOver(cursorPositionX,cursorPositionY,idDiv){
	var widthDiv = $(idDiv).width();
	var heightDiv = $(idDiv).height();
	var objectPositionY = $(idDiv).offset().top;
	var objectPositionX = $(idDiv).offset().left;
	var limitObjectX = widthDiv + objectPositionX;
	var limitObjectY = heightDiv + objectPositionY;
	
	if( cursorPositionX >= objectPositionX && cursorPositionY >= objectPositionY && cursorPositionX <= limitObjectX && cursorPositionY <= limitObjectY){
		$(idDiv).css("opacity",".6");
		
	}else{
		$(idDiv).css("opacity",".1");
	}
}