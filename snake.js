let Snake = function (params) {
    this.speedX = 1;
    this.speedY = 0;
    this.lastTailPosition = null;
    this.startX = parseInt(params.startX);
    this.startY = parseInt(params.startY);
    this.tail = [
        { x: this.startX, y: this.startY },
        { x: this.startX + 1, y: this.startY },
        { x: this.startX + 2, y: this.startY }
    ];

    this.draw = function () {
        this.tail.map(currentElement => {
            ctx.fillStyle = params.color;
            ctx.fillRect(currentElement.x * params.size, currentElement.y * params.size, params.size, params.size);
        })
    };

    this.move = function () {
        this.lastTailPosition = this.tail[0];
        this.tail = this.tail.map((currentElement, index) => {
            if (index === this.tail.length - 1) { //snake head
                return { x: parseInt(currentElement.x) + this.speedX, y: parseInt(currentElement.y) + this.speedY }
            } else {
                let nextElement = this.tail[index + 1];
                return { x: parseInt(nextElement.x), y: parseInt(nextElement.y) }
            }
        })
    };

    this.getHead = function () {
        return this.tail[this.tail.length - 1];
    };

    this.eat = function () {
        this.tail.unshift(this.lastTailPosition);
    };

    this.changeDirection = function (key) {
        switch (key) {
            //WASD
            case 68: //right
                if (this.speedX === -1) return;
                this.speedX = 1;
                this.speedY = 0;
                break;
            case 65: //left
                if (this.speedX === 1) return;
                this.speedX = -1;
                this.speedY = 0;
                break;
            case 87: //up
                if (this.speedY === 1) return;
                this.speedX = 0;
                this.speedY = -1;
                break;
            case 83: //down
                if (this.speedY === -1) return;
                this.speedX = 0;
                this.speedY = 1;
                break;
            //ARROWS
            case 39: //right
                if (this.speedX === -1) return;
                this.speedX = 1;
                this.speedY = 0;
                break;
            case 37: //left
                if (this.speedX === 1) return;
                this.speedX = -1;
                this.speedY = 0;
                break;
            case 38: //up
                if (this.speedY === 1) return;
                this.speedX = 0;
                this.speedY = -1;
                break;
            case 40: //down
                if (this.speedY === -1) return;
                this.speedX = 0;
                this.speedY = 1;
                break;
        }
    };

    this.getTail = function () {
        return this.tail.slice();
    };
}