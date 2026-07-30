let onMenu = false;

function toggleMenu() {
    const menu = document.getElementById("menu");
    const main = document.getElementById("main");
    const mobMenu= document.getElementById("mobm");

    if(!onMenu) {
        menu.style.left = "0px";
        main.style.filter = "blur(5px)";
        menu.style.zIndex = 1;
        mobMenu.style.zIndex = 0;
        
        for(let child of document.querySelectorAll("main *")) {
            child.disabled = true
        }
    } else {
        menu.style.left = "-250px";
        main.style.filter = "blur(0px)";
        menu.style.zIndex = 0;
        mobMenu.style.zIndex = 1;

        for(let child of document.querySelectorAll("main *")) {
            child.disabled = false
        }
    };
    onMenu = !onMenu;
}
