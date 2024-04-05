'use strict'

const submitButton = document.getElementById('btn-submit');
const ratingButtons = document.querySelectorAll('.rating-input');

const imageContainer = document.querySelector('.image-container');
const textContainer = document.querySelector('.main-section');

const contentToDisplay = {
    outputIcon : '/images/illustration-thank-you.svg',
    heading : 'Thank you!',
    paragraph :`We appreciate you taking the time to give a rating. If you ever need more support don't hesitate to get in touch!`,
    ratingMessage : function(rating){
        return `You selected ${rating} out of 5`
    }
}


Object.freeze(contentToDisplay);
const {outputIcon, ratingMessage, heading, paragraph} =contentToDisplay;

let selectedRating;


function displayScreen(rating){
    imageContainer.innerHTML = `<div class = "icon-container-2"><img src = "${outputIcon}" id = "icon-2" class="bottom-margin"></img></div>`   
    textContainer.innerHTML = `<div class = "text-content"><div class = "selected-rating_dispaly-container"><p>${ratingMessage(rating)}</p></div>
                                <div><h2 class = "display-message-heading bottom-margin">${heading}</h2></div>
                                <p class=>${paragraph}</p></div>`;
}

ratingButtons.forEach(button => {
    button.addEventListener('click',function(e){
        e.stopPropagation();
        selectedRating = this.value;
    })
})


submitButton.addEventListener('click', () =>{
    selectedRating !== undefined ? displayScreen(selectedRating) : alert('Kindly give us a rating')
});


