let expClick = document.querySelector(".clickToSee");

//added funtionality to the Click to See Experiences
expClick.addEventListener("click", function showCards(){
    let cards = document.querySelectorAll(".card");


    cards.forEach(function(card){
        card.style.display = "block";
    });
    
    //removed cursor change on hover class 
    expClick.classList.remove('clickToSee');
    //removed event listener
    expClick.removeEventListener("click", showCards);
});