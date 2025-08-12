// Tous les éléments animés vont dans la spriteList
let spriteList = [];

for (let i = 0; i < BALL_COUNT; i++) {
    let ball = new Ball("ball_" + i); // Instantie un cerveau pour le div dont l'id est ball_0
    spriteList.push(ball);
}

// spriteList.push(new Player("asdf"));

const tick = () => {
    // Pour chaque sprite, temps avance!
    for (let i = 0; i < spriteList.length; i++) {
        let sprite = spriteList[i];
        sprite.tick(); // la méthode tick dans l'objet Ball
    }
      
    window.requestAnimationFrame(tick); // Environ 60 fps (si écran 60Hz)    
}

// Animation démarre
tick();