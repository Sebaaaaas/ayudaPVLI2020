import Enemy from "./enemy.js";
import player from "./player.js";

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: "main" });
    
    
  }

  create() {
    this.contadorEnemigosSuperados = 0;
    this.timer_enemy = this.time.addEvent({delay: Phaser.Math.Between(2000, 4000), callback: this.createEnemy, callbackScope:this, loop:true});

    this.enemigos = this.add.group();

    this.soundCreator();

    this.creaFondos();

    
    //this.fondo = this.add.tileSprite(0, 0, (this.game.renderer.width/this.fondo_scale), (this.game.renderer.height/this.fondo_scale), 'fondo').setScale(this.fondo_scale);

    //this.ground = this.add.rectangle(200, 500, this.L, this.L, 0XFA1105);
    this.platforms1 = this.physics.add.image(this.game.renderer.width/2, 700, 'suelo').setScale(4, 2).refreshBody();
    //this.platforms1 = new gameobject(this, this.game.renderer.width/2, 700, 'suelo').setScale(4, 2).refreshBody();
    this.platforms1.setImmovable(true);
    this.platforms1.body.allowGravity = false;



    this.player = new player(this, 200, 500, 'anim', this.jumpsound);
    this.player.anims.play('run', true);

    this.addColliders();

    //botonJugar.on('pointerover', pointer => {
    //     
    //})

    this.input.keyboard.on('keydown', key => {
      this.player.jump();
    });

    
    
  }

  update(time, delta) {
    

    if(this.player.body.touching.down){
      this.player.anims.play('run', true);
    }

    this.fonso1.tilePositionX++;
    this.fonso2.tilePositionX+= 2;
    this.fonso3.tilePositionX+= 4;
    //this.fondo2.x -= 1.5;
    //this.fondo3.x -= 2;
  }

  soundCreator(){
    const config = {
      mute: false,
      volume: 0.2,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0
    }; 

    this.jumpsound = this.sound.add('jumpsound', config);
    this.hitsound = this.sound.add('hitsound', config);
  }

  creaFondos(){ //CREAMOS LOS FONDOS
    this.fonso1 = this.add.tileSprite(this.game.renderer.width/2, this.game.renderer.height/2, 
      this.game.width, 
      this.game.height, 
      'montana1'
    );

    this.fonso2 = this.add.tileSprite(this.game.renderer.width/2, this.game.renderer.height/2, 
      this.game.width, 
      this.game.height, 
      'montana2'
    );

    this.fonso3 = this.add.tileSprite(this.game.renderer.width/2, this.game.renderer.height/2, 
      this.game.width, 
      this.game.height, 
      'montana3'
    );
  }

  createEnemy(){
    this.timer_enemy.reset({ delay: Phaser.Math.Between(2000, 4000), callback: this.createEnemy, callbackScope: this, loop: true});

    this.enemigos.add(new Enemy(this, this.game.renderer.width - 50, 600, 'animenemy'));
    //this.enemy = new Enemy(this, this.game.renderer.width - 50, 600, 'animenemy');
    //this.enemy.setTexture('animenemy');
    //this.physics.add.collider(this.enemy, this.platforms1);

    this.rand = Phaser.Math.Between(2000, 4000);

  }

  addColliders(){ //ponemos las colisiones
    this.physics.add.collider(this.player, this.platforms1);
    this.physics.add.overlap (this.player, this.enemigos, this.player.chocaEnemigo, null, this);
  }

  // chocaEnemigo(){
  //   this.hitsound.play();
  //       this.scene.pause('main');
  //       this.timer_pause = this.time.addEvent({delay: 4000, callback: this.reiniciaPartida, callbackScope:this, loop:false});
  //       //this.scene.pause('main');
        
        
  // }

  reiniciaPartida(){
    console.log('sebas es tonto');
    this.scene.resume('main');
  }



}
