'use strict'

const submitButton = document.getElementById('btn-submit');
const ratingButton = document.querySelectorAll('.rating-input');

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
    imageContainer.innerHTML = `<div class = "final-icon-container"><img src = "${outputIcon}" id = "final-icon" class = "u-margin-bottom"></img></div>`   
    textContainer.innerHTML = `<div class = "text-content"><div class = "final-rating-container"><p>${ratingMessage(rating)}</p></div>
                                <div><h2 class = "heading-secondary u-margin-bottom final-header">${heading}</h2></div>
                                <p class=>${paragraph}</p></div>`;
}

ratingButton.forEach(button => {
    button.addEventListener('click',function(e){
        e.stopPropagation();
        selectedRating = this.value;
    })
})


submitButton.addEventListener('click', () =>{
    selectedRating !== undefined ? displayScreen(selectedRating) : alert('Kindly give us a rating')
});


