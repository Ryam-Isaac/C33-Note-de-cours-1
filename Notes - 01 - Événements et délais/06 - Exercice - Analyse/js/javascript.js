let btn = document.querySelector("button");
let icon = document.querySelector("#analyze-icon");
let result = document.querySelector("#analyze-result");

btn.onclick = () => {
    icon.style.display = "block";

    setTimeout(() => {
        icon.style.display = "none";
        result.style.display = "block";
    }, 2000);
}