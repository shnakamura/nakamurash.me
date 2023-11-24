const tracker = document.getElementById("shirt-tracker");

const colorNames = [
    "black", "white", "gray", "sky-blue", "offwhite",
    "wine", "maple", "petal-pink", "lilac", "violet",
    "ocean-green", "sea-green", "cyan", "dark-blue",
    "lead", "sand"
];

let currentStampDesign = 0;
let currentStampColor = "white";

const moveTrackerTo = (name) => {
    const element = document.getElementById(name);
    const gap = 8;
    const padding = 8;

    tracker.scrollLeft = element.offsetLeft - padding - gap;
}

const changeStampColor = color => {
    currentStampColor = color;

    refreshStamps();
}

const changeStampDesign = () => {
    if (currentStampDesign >= 3) {
        currentStampDesign = 0;
    }

    refreshStamps();
    
    currentStampDesign++;
}

const refreshStamps = () => {
    for (let i = 0; i < 13; i++) {
        const stamp = document.getElementById(`stamp-${i}`);
        stamp.src = `assets/img/${currentStampColor}-stamp-${currentStampDesign}.png`;
    }
}

const refreshPage = () => {
    isInputPressed = false;

    scrollStart = 0;
    scrollAmount = 0;

    tracker.scrollLeft = scrollAmount;

    refreshStamps();
}

window.onload = refreshPage();