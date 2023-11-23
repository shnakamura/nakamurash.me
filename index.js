let mouseDown = false;
let startX, scrollLeft;

const track = document.getElementById("image-track")

const onInputPress = event => {
    mouseDown = true;
    startX = event.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
}

const onInputRelease = event => {
    mouseDown = false;
}

const onInputMove = event => {
    event.preventDefault();

    if (!mouseDown) { 
        return; 
    }
    
    const x = event.pageX - track.offsetLeft;
    const scroll = x - startX;
    track.scrollLeft = scrollLeft - scroll;
}

window.onmouseleave = event => onInputRelease(event);
window.onmouseup = event => onInputRelease(event);
window.onmousedown = event => onInputPress(event);
window.onmousemove = event => onInputMove(event);

window.ontouchstart = event => onInputPress(event.touches[0]);
window.ontouchmove = event => onInputMove(event.touches[0]);
window.ontouchend = event => onInputRelease(event.touches[0]);
window.ontouchcancel = event => onInputRelease(event.touches[0]);