let GameLoop = function (update, draw, maxFPS) {
    let lastRender = 0;
    let gameId;
    let state = 'pause';

    function loop(timestamp) {
        if(state === 'pause') return;
        let progress = timestamp - lastRender;
        let browserFps = 1000 / progress;

        if (timestamp < lastRender + (1000 / maxFPS)) {
            window.requestAnimationFrame(loop);
            return;
        }

        update(progress);
        draw();
        lastRender = timestamp;
        gameId = window.requestAnimationFrame(loop);
    }

    gameId = window.requestAnimationFrame(loop);

    return {
        playPause: function(){
            if(state === 'pause'){
                state = 'play';
                gameId = window.requestAnimationFrame(loop);
            }else{
                state = 'pause';
            }
        }
    }
}