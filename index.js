const cadernosButton = document.getElementById("cadernosButton");
const linksButton = document.getElementById("linksButton");
const tarefasButton = document.getElementById("tarefasButton");

cadernosButton.addEventListener("click", showList);
linksButton.addEventListener("click", showList);
tarefasButton.addEventListener("click", showList);


function showList() {
    const cadernosList = document.getElementById("cadernosList");

    if (cadernosList.classList.contains("opacity-0")) {
        cadernosList.classList.remove("opacity-0");
        cadernosList.classList.add("opacity-100");
    }
    else if (cadernosList.classList.contains("opacity-100")) {
        cadernosList.classList.remove("opacity-100");
        cadernosList.classList.add("opacity-0");
    }


}