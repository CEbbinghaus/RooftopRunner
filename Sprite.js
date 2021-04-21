var Sprite = function(k)
{
    this.image = k;
    this.time = 0;
    this.frameTime = 0;
    this.currentFrame = 0;

    this.numFramesWide = 0;
    this.numFramesHigh = 0;
    this.frameWidth = this.image.width / this.numFramesWide;
    this.frameHeight = this.image.height / this.numFramesHigh;

    this.animations = [];
    this.currentAnimation = 0;
};

Sprite.prototype.addAnimation = function(animIndexArray)
{
    this.animations.push(animIndexArray);
};

Sprite.prototype.setAnimation = function(animIndex)
{
    if (this.currentAnimation == animIndex)
    return

    this.currentAnimation = animIndex;
    this.currentFrame = 0;
};

Sprite.prototype.Update = function(dt)
{
    this.time -= dt;
    if(this.frameTime != test)
    {
        this.time = - 0.3;
    };
    if (this.time <= 0)
    {
        this.currentFrame ++;
        if (this.currentFrame >= this.animations[this.currentAnimation].length)
        {
            this.currentFrame = 0;
        };
        this.time = this.frameTime;
        test = this.frameTime;

    };
};

Sprite.prototype.Draw = function(dt, c, x, y)
{
    var currFrameNum = this.animations[this.currentAnimation][this.currentFrame];
    var yoffset = Math.floor(currFrameNum / this.numFramesWide);
    yoffset *= this.frameHeight;
    var xoffset = currFrameNum % this.numFramesWide;
    xoffset *= this.frameWidth;
    
    c.drawImage(this.image, xoffset, yoffset, this.frameWidth, this.frameHeight, x, y, this.frameWidth, this.frameHeight);
};