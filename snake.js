let Snake = function(startX, startY, color){
    this.speedX = 10;
    this.speedY = 0;
    this.tail = [
        {x: startX - 20, y: startY},
        {x: startX - 10, y: startY},
        {x: startX, y: startY}
    ];
    this.draw = function(){
        this.tail.map(currentElement => {
            ctx.fillRect(currentElement.x, currentElement.y, 10, 10);
            ctx.fillStyle = color;
        })
    },
    this.move = function(){
        this.tail.map((currentElement, index) => {
            if(index === this.tail.length - 1){ //snake head
                currentElement.x += this.speedX;
                currentElement.y += this.speedY;
            }else{
                let nextElement = this.tail[index+1];
                currentElement.x = nextElement.x;
                currentElement.y = nextElement.y;
            }
        })
        
    },
    this.changeDirection = function(key){
        switch (key) {
            case 68: //right
                this.speedX = 10;
                this.speedY = 0;
                break;
            case 65: //left
                this.speedX = -10;
                this.speedY = 0;
                break;
            case 87: //up
                this.speedX = 0;
                this.speedY = -10;
                break;
            case 83: //down
                this.speedX = 0;
                this.speedY = 10;
                break;
        }
    }
}