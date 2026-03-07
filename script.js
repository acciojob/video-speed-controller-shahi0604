
const video = document.querySelector('.player__video');
const toggle = document.querySelector('.toggle');
const volume = document.querySelector('[name="volume"]');
const playbackRate = document.querySelector('[name="playbackRate"]');
const skipButtons = document.querySelectorAll('[data-skip]');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');


function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}


function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}


function handleRangeUpdate() {
  video[this.name] = this.value;
}


function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}


function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
}


function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}


video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
volume.addEventListener('input', handleRangeUpdate);
playbackRate.addEventListener('input', handleRangeUpdate);

skipButtons.forEach(btn => btn.addEventListener('click', skip));

progress.addEventListener('click', scrub);