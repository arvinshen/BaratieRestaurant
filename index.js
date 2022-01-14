var index = -1;
autoSlideshow();

function changeSlide(num) {
    slideshow(index += num);
}

function slideshow(slideIndex) {
    var slides = document.getElementsByClassName("slides"); 
    if (slideIndex >= slides.length) {
        index = 0;
    }
    if (slideIndex < 0) {
        index = slides.length - 1;
    }
    for (let i = 0; i < slides.length; ++i) {
        slides[i].style.display = "none";
    }
    slides[index].style.display = "block";
}

function autoSlideshow() {
    var slides = document.getElementsByClassName("slides"); 

    for (let i = 0; i < slides.length; ++i) {
        slides[i].style.display = "none";
    }
    ++index;
    if (index >= slides.length) {
        index = 0;
    }
    if (index < 0) {
        index = slides.length - 1;
    }
    slides[index].style.display = "block";
    setTimeout(autoSlideshow, 5000);
}