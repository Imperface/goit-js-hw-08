import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframeRef = document.querySelector('#vimeo-player');

const player = new Player(iframeRef);
const CURRENT_TIME_SET = 'videoplayer-current-time';

const timeUpdate = data => {
  const timeUpdateSeconds = data.seconds;
  localStorage.setItem(CURRENT_TIME_SET, timeUpdateSeconds);
};
const onIframePlay = data => {};

player.setCurrentTime(localStorage.getItem(CURRENT_TIME_SET));

player.on('play', onIframePlay);
player.on('timeupdate', throttle(timeUpdate, 1000));
player.off('play', onIframePlay);
