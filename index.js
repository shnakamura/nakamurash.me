const tracker = document.getElementById("shirt-tracker");

const colorNames = [
    "black", "white", "gray", "sky-blue", "offwhite",
    "wine", "maple", "petal-pink", "lilac", "violet",
    "ocean-green", "sea-green", "cyan", "dark-blue",
    "lead", "sand"
];

let currentStamp = 0;

const moveTrackerTo = (name) => {
    const element = document.getElementById(name);
    const gap = 8;
    const padding = 8;

    tracker.scrollLeft = element.offsetLeft - padding - gap;
}

const changeStamp = () => {
    if (currentStamp >= 3) {
        currentStamp = 0;
    }

    for (let i = 0; i < 13; i++) {
        const stamp = document.getElementById(`stamp-${i}`);

        stamp.src = `assets/img/black-stamp-${currentStamp}.png`;
    }

    currentStamp++;
}

const refresh = () => {
    isInputPressed = false;

    scrollStart = 0;
    scrollAmount = 0;

    tracker.scrollLeft = scrollAmount;
}

window.onload = refresh();