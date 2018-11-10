/* eslint-disable no-undef */
class Player {
    constructor() {
        this.width = 150;
        this.height = 20;
        this.x = canvas.width / 2 - this.width / 2; 
        this.y = canvas.height - this.height-20;
        this.spd = 8;
    
        this.show = () => {
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(this.x,this.y,this.width,this.height);
        };
    }
}

class Ball {
    constructor(player) {
        this.width = 10;
        this.height = 10;
        this.x  = player.x + (player.width / 2);
        this.y = player.y - 50;
        this.velocity = {
            x: 0,
            y: 0
        };

        this.show = () => {
            ctx.fillStyle = '#ffffff';
            ctx.ellipse(this.x,this.y,this.width,this.height,0,0,360);
        };
    }
}