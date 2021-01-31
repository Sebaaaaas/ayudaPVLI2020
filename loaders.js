export default class Loaders extends Phaser.Scene {
    constructor() {
      super({ key: "loaders" });

    }
  
    preload() {     
      this.load.image('suelo', 'images/suelo.png');
      this.load.image('fondo', 'images/fondoMontanas.png');
      this.load.image('montana1', 'images/montana1p.png');
      this.load.image('montana2', 'images/montana2p.png');
      this.load.image('montana3', 'images/montana3p.png');

      this.load.spritesheet('anim', 'images/dude.png', { frameWidth: 32, frameHeight: 48 });
      this.load.spritesheet('animenemy', 'images/skeleton.png', { frameWidth: 224, frameHeight: 364});
      this.load.spritesheet('animenemyatk', 'images/skeletonAttack.png', { frameWidth: 328, frameHeight: 364});
      

      this.load.audio('jumpsound', 'sonidos/continue.mp3');
      this.load.audio('hitsound', 'sonidos/sonidofeo.mp3');
    }
  
    create() {
 
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('anim', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
            });

        this.anims.create({
            key: 'jump',
            frames: this.anims.generateFrameNumbers('anim', { frames:[ 4, 0, 7, 4, 0, 7 ]}),
            frameRate: 10,
            });

        this.anims.create({
          key: 'enemy',
          frames: this.anims.generateFrameNumbers('animenemy', { start: 0, end: 7 }),
          frameRate: 10,
          repeat: -1
          });

        this.scene.start('main');
  
    }

    

  }