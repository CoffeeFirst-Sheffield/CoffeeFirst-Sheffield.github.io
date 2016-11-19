$(function(){
	$('h1').css('color','#e68a00');
})

<!--Trying to make nav bar text expand a bit when you hover over them-->
$("li").hover(function(){
	$(this).expand(100);
});

$( "h1" )
  .mouseover(function() {
    $( this ).fadeOut(100);
  })
  .mouseout(function() {
    $( this ).fadeIn(500);
  });