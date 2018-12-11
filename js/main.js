const [current, imgs, opacity] = [document.querySelector('#current'),
    document.querySelectorAll('.imgs img'),
    0.5
];

imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', display));

function display(e) {
    imgs.forEach(img => (img.style.opacity = 1));
    current.src = e.target.src;
    // add fading class

    current.classList.add('fade-in');

    setTimeout(() => current.classList.remove('fade-in'), 500);
    e.target.style.opacity = opacity;
}

//Auto image slider using Carousel
let i = 0;
let sliderImages = document.querySelectorAll('.imgs img');


function imageSlide(e) {
    sliderImages.forEach(image => (image.style.opacity = 1));
    if (i < sliderImages.length - 1) {

        curren = document.slide.src = sliderImages[i].src;
        document.slide.classList.add('fade-in')
        setTimeout(() => document.slide.classList.remove('fade-in'), 500)
        sliderImages[i].style.opacity = opacity
        i++;
    } else {
        i = 0;
    }
    setTimeout("imageSlide()", 3000)
}

imageSlide();