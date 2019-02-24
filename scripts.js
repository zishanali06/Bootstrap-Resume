let expClick = document.querySelector(".clickToSee");

//added funtionality to the Click to See Experiences
expClick.addEventListener("click", function showCards(){
    let cards = document.querySelectorAll(".card");


    cards.forEach(function(card){
        card.style.display = "block";
    });
    
    expClick.classList.remove('clickToSee');
    expClick.removeEventListener("click", showCards);
});