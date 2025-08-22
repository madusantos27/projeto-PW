function toggleMode() {
    const html = document.documentElement;
    html.classList.togglr("ligth");

    const img = document.querySelector("#profile img");

    if(html.classList.contains("ligth")){
        img.setAttribute("src", "./img/foto1.webp");
    } else {
        img.setAttribute("src", "./img/foto2.png");
    }
}
