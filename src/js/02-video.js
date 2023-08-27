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

const setCurrentTime = time => {
  player.setCurrentTime(localStorage.getItem(CURRENT_TIME_SET));
  console.log(`successful return to time ${time} seconds`);
};
const checkCurrentTimeLocalStorage = () => {
  const checkTime = localStorage[CURRENT_TIME_SET];
  if (checkTime) {
    setCurrentTime(checkTime);
  }
};
checkCurrentTimeLocalStorage();
player.on('play', onIframePlay);
player.on('timeupdate', throttle(timeUpdate, 1000));
player.off('play', onIframePlay);
