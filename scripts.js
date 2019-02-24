let expClick = document.querySelector(".clickToSee");

expClick.addEventListener("click", function(){
    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card){
        card.style.display = "block";
    });
    
});