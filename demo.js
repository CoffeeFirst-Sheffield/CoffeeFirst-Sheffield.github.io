function myFunction() {
    var x = document.getElementById("mainnav");
    if (x.className === "nav") {
        x.className += "responsive";
    } else {
        x.className = "nav";
    }
}

$("submit_button").on("click", function() {
            alert("Thanks for submitting your contact details!")