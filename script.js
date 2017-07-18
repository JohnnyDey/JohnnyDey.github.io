var modal = document.getElementById("modal");
var btn = document.getElementById("open-contact-popup");
var span = document.getElementById("close");

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

btn.onclick = function() {
    modal.style.display = "block";
}
