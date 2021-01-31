export default class gameobject extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, type){

        super(scene, x, y, type);
		scene.add.existing(this);
		scene.physics.world.enable(this);
        //this.body.setCollideWorldBounds(true);
        //this.body.enable = true;
        //this.player.setBounce(0.2);//rebote de 0.2 al aterrizar
        
		this.x = x;
        this.y = y;

    }
    
    
}