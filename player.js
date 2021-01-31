import gameobject from "./gameobject.js";

export default class player extends gameobject
{
    constructor(scene, x, y, type, jumpsound){
        super(scene, x, y, type);
        this.game = scene;
        this.L = 64; //tamaño en pixeles del jugador

        this.displayHeight = this.L;
        this.displayWidth = this.L;
        this.jumpsound = jumpsound;
        this.body.setCollideWorldBounds(true);
    }

    create(){
        
    }

    update(){
        

    }

    jump(){
        if(this.body.touching.down){
            this.anims.play('jump', true);
            this.jumpsound.play();
            this.body.velocity.y = -320;   
        }

            
    }

    chocaEnemigo(){
        this.hitsound.play();

        //this.pasatiempo = this.time.addEvent({delay: 4000, callback: this.reiniciaPartida, callbackScope:this, loop:false});
        
        this.scene.pause('main');
        
        this.timer_pause = this.time.addEvent({delay: 4000, callback: this.scene.restart('main'), callbackScope:this, loop:false});

        

        //this.game.events.on('transitionstart', this.scene.restart('main'));
        //this.timer_pause.paused = false;
        //this.scene.pause('main');
        
        
    }

    reiniciaPartida(){
        //console.log(this.pasatiempo);
        this.scene.restart('main');
    }

}