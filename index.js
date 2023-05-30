const username = document.getElementById("username");
const discriminator = document.getElementById("discriminator");

username.addEventListener("mouseover", function mouseOver() {
    if (screen.width <= 768) {
        return;
    }

    discriminator.style.opacity = "100";
});

username.addEventListener("mouseout", function mouseOut() {
    if (screen.width <= 768) {
        return;
    }
    
    discriminator.style.opacity = "0";
});