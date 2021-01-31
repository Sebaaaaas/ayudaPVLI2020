import gameobject from "./gameobject.js";

export default class Enemy extends gameobject
{
    constructor(scene, x, y, type){
        super(scene, x, y, type);
        this.game = scene;
        this.L = 64; //tamaño en pixeles del jugador

        this.displayHeight = this.L;
        this.displayWidth = this.L;
        //this.body.velocity.x = -500;
        //this. rand = game.rnd.realInRange(-2, 6);
        this.body.setVelocityX(-500);
        this.anims.play('enemy', true);

        this.scene.physics.add.collider(this, this.scene.platforms1);

        //this.game.physics.moveTo(this, obj.x, obj.y, this.moveSpeed);
    }

    preUpdate(){
        if(this.x <= 0){
            this.destroy();
            console.log('jpok');
            this.game.contadorEnemigosSuperados ++;
            console.log(this.game.contadorEnemigosSuperados);
            if(this.game.contadorEnemigosSuperados >= 1){
                console.log('he ganado puto');
                this.game.scene.start('final');
            }
        }
    }
  

}