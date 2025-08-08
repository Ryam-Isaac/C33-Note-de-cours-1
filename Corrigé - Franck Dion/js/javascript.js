let node = null;
let posY = null;
let speed = -1;

const moveGeneric = () => {
    if (node == null) {
        node = document.querySelector(".generic");
        node.onclick = () => {
            speed = -speed;
        }
    }

    let currentTop = node.getBoundingClientRect().y;
    currentTop += speed;
    document.querySelector("#pos-field").value = currentTop;
    node.style.top = currentTop + "px";

    setTimeout(moveGeneric, 30);
}

window.addEventListener("load", moveGeneric);