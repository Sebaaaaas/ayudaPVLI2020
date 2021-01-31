export default class EscenaFinal extends Phaser.Scene {
    constructor() {
      super({ key: "final" });
    }

    create(){
        let text = new Phaser.GameObjects.Text(this,200,200,"Fin");
        this.lulw = this.add.text(this.game.renderer.width/2, 200, "Fin", { fontSize:50, color: '#b73' });
    //     text.setFont(config.font);
    // text.setStroke(config.stroke, 5);
    // text.setFill(config.fillColor);
    // text.setFontSize(config.fontSize);
    // text.setDepth(config.hudDepth);
    // text.setVisible(true);
    }
}