'use strict'

const submitButton = document.getElementById('submitBtn');
const ratingButtons = document.querySelectorAll('.rating-input');

const imageContainer = document.querySelector('.image-container');
const textContainer = document.querySelector('.main-section');
const mainContainer = document.querySelector('.container-main')

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

    submitButton.remove();
    mainContainer.id = 'padding-new';

    imageContainer.innerHTML = `<div class = "icon-container-2" id=""><img src = "${outputIcon}" id = "icon-2"></img></div>`   
    textContainer.innerHTML = `<div class = "main-section" id="align-center"><div class = "selected-rating__container"><p>${ratingMessage(rating)}</p></div>
                                <div class="text-content" id=""align-center"><h2>${heading}</h2>
                                <p class=>${paragraph}</p></div></div>`;
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


