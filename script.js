let submitButton=document.getElementById("Submit");
let radios=document.getElementsByName("Radios");
let displayRating=document.getElementById("DisplayRating");
let ratingContainer=document.getElementById("RatingContainer");
let thankContainer=document.getElementById("ThankContainer");
let main=document.getElementById("main");

submitButton.addEventListener("click",()=>{
    for(let i=0;i<radios.length;i++){

        if(radios[i].checked){
            displayRating.innerHTML=radios[i].value;
            main.style.cssText="animation: slide .5 ease 200ms forwards"

            thankContainer.style.display="block";
            ratingContainer.style.display="none";

            break;
        }
    }
});