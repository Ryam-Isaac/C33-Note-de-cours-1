class Ball {

    constructor(id){
        this.id = id ;  // variable d'instance 
        this.node = document.querySelector("#"+ this.id) ;
        this.node.style.left = Math.floor(Math.random()*400) + "px" ; 
        this.node.style.top = Math.floor(Math.random()*40) + "px" ; 

        this.speedY = 2; 
        this.velocityY= 0.5 ;

        this.node.addEventListener("mouseover" , () => {
            this.speedY = -10 ; 
        })
    }

    // methode appeler 60 fois par secondes 
    tick() {
        this.speedY += this.velocityY; 
        // calcul moi 
        let newPositionY = this.node.offsetTop + this.speedY;

        if (newPositionY > 220){
            newPositionY = 220 ; 
            this.speedY = -this.speedY/1.5; 
        }
        
        this.node.style.top = newPositionY + "px" ; 
        
    }

   
    // 
    


}