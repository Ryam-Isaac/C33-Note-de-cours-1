// Tous les elements animes vont dans la spriteList
let spriteList = []; 

for (let i = 0 ; i < 5 ; i++){
    let ball = new Ball("ball_" + i); // instantie un cerveau poru le div dont l'id est ball_0
    spriteList.push(ball); 
}
// 

// la basee 
const generaltick = () =>{
    
    console.log("sadf")
    //appeler la fonction tick 
    // setTimeout(tick, 15); ca c'etait avant maitenant window...
    
    
    // Pour chaque sprite, temps avance
    for (let i = 0 ; i < spriteList.length ; i++){
        
        let sprite = spriteList[i] ; 
        sprite.tick();  // la methode tick dans dans l'object ball 
    }


    window.requestAnimationFrame(tick); // ca va suivre le refresh rate de ton ecran Environ ( si ecran 60Hz) 
}


// animation demarre 
tick(); 

