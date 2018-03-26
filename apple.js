let Apple = function (blockSize) {
    this.x = null;
    this.y = null;

    this.setPosition = function (snakeTail) {
        let snakeMap = [];
        for (let x = 1; x < gameSize[0] - 1; x++) {
            for (let y = 1; y < gameSize[1] - 1; y++) {
                snakeMap.push(x + '-' + y);
            }
        }

        snakeTail.map(element => {
            try {
                snakeMap.splice(snakeMap.indexOf(element.x + '-' + element.y), 1);
            } catch (error) { console.log(error) }
        })

        let coordinates = snakeMap[Math.floor(Math.random() * snakeMap.length)].split('-');
        this.x = parseInt(coordinates[0]);
        this.y = parseInt(coordinates[1]);
    };
    
    this.draw = function () {
        ctx.fillStyle = '#cc0000';
        ctx.fillRect(this.x * blockSize, this.y * blockSize, blockSize, blockSize);
    };
}