function openatc(evt, tabname) {

    var i, poop, place;

    // - PLEASE JUST GET INTO IT
    poop = document.getElementsByClassName("poop");
    for(i = 0; i < poop.length; i++) {
        poop[i].style.display = "none"; // here the code was broken because "Style" < initial was in caps
    }

    // - UGHH 2
    place = document.getElementsByClassName("place");
    for(i = 0; i < place.length; i++){
        place[i].className = place[i].className.replace(" active", "");
    }

    // LALALLALLALALLALALALLALLA
    document.getElementById(tabname).style.display = "block";

    // THIS CODE SUPPOSEDLY MARKS IT AS ACTIVE 4
    evt.currentTarget.className += " active";
}
// lalalalalalalala
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".place").click();
});