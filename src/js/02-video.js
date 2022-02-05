// import player from "@vimeo/player";
import throttle from "lodash.throttle";

  const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(getCurrentVideoTime, 1000));

function getCurrentVideoTime(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}

function setCurrentVideoTime() {
    const saveCurrentTime = localStorage.getItem('videoplayer-current-time');

    if (saveCurrentTime) {
       player.setCurrentTime(saveCurrentTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
        player.setCurrentTime(saveCurrentTime)
    }
}


setCurrentVideoTime();