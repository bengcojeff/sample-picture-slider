const shortcuts = {
    image: '.images',
    nextButton: '.next-btn',
    backButton: '.back-btn',
    indicator: '.indicators',
    sliderIndicator: '.slider-indicator'
}

const controller = {
    img: [],
    counter: 0
}

//Get the images
document.querySelectorAll(shortcuts.sliderIndicator).forEach((cur) => {
    controller.img.push(cur.id);
})

const showImage = () => {
    document.querySelector(shortcuts.image).src = `Images/${controller.img[controller.counter]}`;
}

// buttons next and back
const nxtBtn = () => {

    if (controller.counter < controller.img.length - 1) {
        controller.counter++;
        showImage();
    } else {
        controller.counter = 0;
        showImage();
    }

    indicatorColors();
}

const backBtn = () => {
    if (controller.counter > 0) {
        controller.counter--;
        showImage();
    } else {
        controller.counter = controller.img.length - 1;
        showImage();
    }

    indicatorColors();
}

document.querySelector(shortcuts.nextButton).addEventListener('click', nxtBtn);
document.querySelector(shortcuts.backButton).addEventListener('click', backBtn);


// indicator section
const imageClick = (e) => {
    const index = Array.from(e.target.parentElement.children).indexOf(e.target);
    controller.counter = index;

    showImage();
    indicatorColors();

}
// change color of the indicators
const indicatorColors = () => {
    document.querySelectorAll(shortcuts.sliderIndicator).forEach((cur) => {
        cur.style.background = 'white';
    })

    document.querySelector(shortcuts.indicator).children[controller.counter].style.background = 'black';
}

indicatorColors();

//indicator function
document.querySelectorAll(shortcuts.sliderIndicator).forEach((current) => {
    current.addEventListener('click', imageClick);
})

// change picture per 3 seconds
setInterval(() => {
    if (controller.counter !== controller.img.length - 1) {
        controller.counter++

        showImage();
        indicatorColors();
    }
    else {
        controller.counter = 0;
        showImage();
        indicatorColors();
    }
}, 3000)