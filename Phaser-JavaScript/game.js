var config = {

        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics : {
            default: 'arcade',
            arcade: {
                //gravity: {y: 300},
                debug: false
            }
        },
        scene: {
            init: init,
            preload: preload,
            create: create,
            update: update
        }

}

var game = new Phaser.Game(config);

function init(){
    var platforms;
    var player;
    var cursors;
}

function preload(){
    this.load.image('background','assets/fond.png');
    this.load.image('sol','assets/sol.png');
    this.load.spritesheet('perso','assets/sprite.png',{frameWidth: 20, frameHeight: 40});
}
function create(){
    this.add.image(400,300,'background');
    platforms = this.physics.add.staticGroup();

    platforms.create(470,300,'sol').setScale(0.5).refreshBody();

    player = this.physics.add.sprite(100,0,'perso')/*.setScale(4).refreshBody()*/;


    //-------------------------------------------------------------------------//
    player.setCollideWorldBounds(true);

    this.physics.add.collider(player,platforms);

   cursors = this.input.keyboard.createCursorKeys();

this.anims.create({
    key:'droite',
    frames: this.anims.generateFrameNumbers('perso', {
        start: 0, end:4
    }),
    frameRate : 1,
    repeat: -1
})

}
function update(){
    if(cursors.left.isDown){
        player.setVelocityX(-150);
       // player.anims.play('droite', true);
    } else
    if(cursors.right.isDown){
        player.setVelocityX(150);
    } else {player.setVelocityX(0)}




    if(cursors.up.isDown){
        player.setVelocityY(-150);
    } else
    if (cursors.down.isDown) {
        player.setVelocityY(150);
    } else {player.setVelocityY(0)}
}