const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const jumbotron = document.getElementById("jumbotron");
const jumbtron_title = document.getElementById("jumbotron-title");
const jumbotron_description = document.getElementById("jumbotron-description");
const thumbnails = document.getElementById("thumbnails");
let currentSlide = 0;

function addToJumbotron(HTMLelement, objectaArray, currentSlide){

    objectaArray.forEach((element, index) => {
        let newImg = document.createElement("img");
        newImg.src = `./${element.image}`;
        newImg.alt = element.title;
        if(index != currentSlide){
            newImg.classList.add("hidden");
        }
        newImg.classList.add("slide");
        HTMLelement.append(newImg);
    })
    setTitleAndDescription(images, currentSlide, jumbtron_title, jumbotron_description);
}

addToJumbotron(jumbotron, images, currentSlide);

function addToThumbnails(HTMLelement, objectaArray, currentSlide){

    objectaArray.forEach((element, index) => {
        let newImg = document.createElement("img");
        newImg.src = `./${element.image}`;
        newImg.alt = element.title;
        newImg.classList.add("thumb");
        if(index === currentSlide){
            newImg.classList.add("selected");
        }
        HTMLelement.append(newImg);
    })
}

function setTitleAndDescription(objectaArray, currentSlide, titleElement, descriptionElement){
    titleElement.innerText = objectaArray[currentSlide].title;
    descriptionElement.innerText = objectaArray[currentSlide].text;
}

addToThumbnails(thumbnails, images, currentSlide);

const prev_button = document.getElementById("prev-button");
const next_button = document.getElementById("next-button");

const jumbotronElements = document.getElementsByClassName("slide");
const thumbnailsElements = document.getElementsByClassName("thumb");

prev_button.addEventListener("click", function(){
    if(currentSlide>0){
        jumbotronElements[currentSlide].classList.add("hidden");
        thumbnailsElements[currentSlide].classList.remove("selected");
        currentSlide--;

        jumbotronElements[currentSlide].classList.remove("hidden");
        thumbnailsElements[currentSlide].classList.add("selected");
        setTitleAndDescription(images, currentSlide, jumbtron_title, jumbotron_description);
    }else{
        jumbotronElements[currentSlide].classList.add("hidden");
        thumbnailsElements[currentSlide].classList.remove("selected");
        currentSlide = (jumbotronElements.length-1);

        jumbotronElements[currentSlide].classList.remove("hidden");
        thumbnailsElements[currentSlide].classList.add("selected");
        setTitleAndDescription(images, currentSlide, jumbtron_title, jumbotron_description);
    }
});


next_button.addEventListener("click", function(){
    if(currentSlide< jumbotronElements.length-1){
        jumbotronElements[currentSlide].classList.add("hidden");
        thumbnailsElements[currentSlide].classList.remove("selected");

        currentSlide++;
        jumbotronElements[currentSlide].classList.remove("hidden");
        thumbnailsElements[currentSlide].classList.add("selected");
        setTitleAndDescription(images, currentSlide, jumbtron_title, jumbotron_description);
    }else{
        jumbotronElements[currentSlide].classList.add("hidden");
        thumbnailsElements[currentSlide].classList.remove("selected");
        currentSlide = 0;

        jumbotronElements[currentSlide].classList.remove("hidden");
        thumbnailsElements[currentSlide].classList.add("selected");
        setTitleAndDescription(images, currentSlide, jumbtron_title, jumbotron_description);
    }
});
