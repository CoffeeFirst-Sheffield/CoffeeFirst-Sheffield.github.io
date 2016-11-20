/* $(function(){
	$('h1').css('color','#e68a00');
}) */

function myFunction() {
    var x = document.getElementById("mainnav");
    if (x.className === "nav") {
        x.className += "responsive";
    } else {
        x.className = "nav";
    }
}