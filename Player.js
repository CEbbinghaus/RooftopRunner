var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var Player = function()
{
    this.x;
    this.y;
    this.gravity;
    this.ground;
    this.state;
    this.sprite;
};

Player.prototype.initialise() = function()
{
    this.sprite = new AnimatedSprite();
    this.sprite.addAnimation([0])
    this.sprite.frameWidth = 64;
    this.sprite.frameHeight = 64;
    this.sprite.numFramesWide = 2;
    this.sprite.numFramesHigh = 2;
    this.sprite.frameTime = 0.09
    this.sprite.image.src = "Sprites/Player.png"

    this.sprite.setAnimation(0)
    // this.sprite = new Sprite()
    // this.sprite = new AnimatedSprite();
    // this.sprite.addAnimation([0])
    // this.sprite.numFramesWide = 1;
    // this.sprite.numFramesHigh = 1;
    // this.sprite.frameTime = 0.09
    // this.sprite.image.src = "Sprites/Pizza Delivery Girl.png"

    // this.sprite.setAnimation(0)
};

Player.prototype.update() = function()
{

};

player.prototype.draw() = function()
{

};