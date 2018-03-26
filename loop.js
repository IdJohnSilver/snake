let GameLoop = function (update, draw, maxFPS) {
    let lastRender = 0;

    function loop(timestamp) {
        let progress = timestamp - lastRender;
        let browserFps = 1000 / progress;

        if (timestamp < lastRender + (1000 / maxFPS)) {
            window.requestAnimationFrame(loop);
            return;
        }

        update(progress);
        draw();
        lastRender = timestamp;
        window.requestAnimationFrame(loop);
    }

    window.requestAnimationFrame(loop);
}