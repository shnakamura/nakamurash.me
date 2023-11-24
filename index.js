const tracker = document.getElementById("shirt-tracker");

const colorNames = [
    "black", "white", "gray", "sky-blue", "offwhite",
    "wine", "maple", "petal-pink", "lilac", "violet",
    "ocean-green", "sea-green", "cyan", "dark-blue",
    "lead", "sand"
];

let currentStampDesign = 0;

let currentStampColor = "white";
let previousStampColor = currentStampColor;

let currentShirtColor = "sky-blue";
let previousShirtColor = currentShirtColor;

const changeShirtColor = color => {
    previousShirtColor = currentShirtColor;
    currentShirtColor = color;

    const shirt = document.getElementById(`${color}-shirt`);

    tracker.scrollLeft = shirt.offsetLeft - 16;
    
    refreshShirtIndicator();
}

const changeStampColor = color => {
    previousStampColor = currentStampColor;
    currentStampColor = color;
    
    refreshStamps();
    refreshStampIndicator();
}

const changeStampDesign = () => {
    refreshStamps();
    refreshStampIndicator();
    
    currentStampDesign++;
}

const refreshStamps = () => {
    if (currentStampDesign > 2) {
        currentStampDesign = 0;
    }
    else if (currentStampDesign < 0) {
        currentStampDesign = 0;
    }

    for (let i = 0; i < 13; i++) {
        const stamp = document.getElementById(`stamp-${i}`);
        stamp.src = `assets/img/${currentStampColor}-stamp-${currentStampDesign}.png`;

        console.log(stamp.src)
    }
}

const refreshShirtIndicator = () => {
    const selector = document.getElementById("shirt-color-selector");
    selector.classList.remove(`bg-${previousShirtColor}`);
    selector.classList.add(`bg-${currentShirtColor}`);
    
    const button = document.getElementById(`${currentShirtColor}-shirt-button`);

    const buttonLeft = button.offsetLeft;
    const buttonTop = button.offsetTop;
    const buttonHeight = button.offsetHeight + 4;

    const selectorLeft = selector.offsetLeft;
    const selectorTop = selector.offsetTop;

    const translateX = buttonLeft - selectorLeft;
    const translateY = buttonTop + buttonHeight - selectorTop;

    selector.style.transform = `translate(${translateX}px, ${translateY}px)`;
}

const refreshStampIndicator = () => {
    const selector = document.getElementById("stamp-color-selector");
    const button = document.getElementById(`${currentStampColor}-stamp-button`);
    
    const buttonLeft = button.offsetLeft;
    const buttonTop = button.offsetTop;
    const buttonHeight = button.offsetHeight + 4;

    const selectorLeft = selector.offsetLeft;
    const selectorTop = selector.offsetTop;

    const translateX = buttonLeft - selectorLeft;
    const translateY = buttonTop + buttonHeight - selectorTop;

    selector.style.transform = `translate(${translateX}px, ${translateY}px)`;
}

const refreshPage = () => {
    isInputPressed = false;

    currentShirtColor = "sky-blue";
    previousShirtColor = currentShirtColor;

    currentStampColor = "white";
    previousStampColor = currentStampColor;

    currentStampDesign = 0;

    refreshStamps();

    refreshShirtIndicator();
    refreshStampIndicator();
}

window.onload = refreshPage();