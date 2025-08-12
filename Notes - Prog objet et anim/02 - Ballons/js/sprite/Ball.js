class Ball {

    constructor(id) {
       this.id = id;
       this.node = document.querySelector("#" + this.id);
       this.node.style.left = Math.floor(Math.random() * 400) + "px";
       this.node.style.top = Math.floor(Math.random() * 40) + "px";
       this.node.addEventListener("mouseover", () => {
            this.speedY = -10;
       })

       this.speedY = 2;
       this.velocityY = 0.5;
       this.posY = this.node.offsetTop;
    }

    // Méthode appelée ~60fps
    tick() {
        this.speedY += this.velocityY;
        this.posY += this.speedY;

        if (this.posY > 220) {
            this.posY = 220;
            this.speedY = -this.speedY/1.5;
        }

        this.node.style.top = this.posY + "px";
    }
}