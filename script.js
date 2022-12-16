const magicMouse = document.querySelector('#magic-mouse');
const key = document.querySelector('#key');
function updateVideoClip(event) {
  const video = document.querySelector('#my-video');
  video.style.clipPath = `circle(${magicMouse.offsetWidth / 2}px at ${magicMouse.offsetLeft + magicMouse.offsetWidth / 2}px ${magicMouse.offsetTop + magicMouse.offsetHeight / 2}px)`;
}

document.querySelector('#magic-mouse').addEventListener('mousemove', updateVideoClip);
const sun = document.querySelector('#sun');
const moon = document.querySelector('#moon');

sun.addEventListener('click', (event) => {
  magicMouse.removeEventListener('mousemove', updateVideoClip);

  // Make the "sun" element display none
  sun.style.display = 'none';
  moon.style.display = 'block';
  myVideo.style.clipPath = '';
  magicMouse.style.display = 'none';
});
let isExpanding = false;
const expansionInterval = null;

magicMouse.addEventListener('mouseup', () => {
  isExpanding = false;
  clearInterval(expansionInterval);
});
moon.addEventListener('click', (event) => {
  magicMouse.addEventListener('mousemove', updateVideoClip);
  moon.style.display = 'none';
  sun.style.display = 'block';
  magicMouse.style.display = 'block';
});

document.addEventListener('mousemove', (event) => {
  const viewportWidth = document.documentElement.clientWidth;
  const viewportHeight = document.documentElement.clientHeight;

  let left = event.pageX - magicMouse.offsetWidth / 2;
  let top = event.pageY - magicMouse.offsetHeight / 2;

  left = Math.max(0, Math.min(left, viewportWidth + magicMouse.offsetWidth));
  top = Math.max(0, Math.min(top, viewportHeight - magicMouse.offsetHeight));

  magicMouse.style.left = `${left}px`;
  magicMouse.style.top = `${top}px`;
});

// thank u stackoverflow
var myVideo = document.querySelector('#my-video');
if (typeof myVideo.loop === 'boolean') {
  myVideo.loop = true;
} else { 
  myVideo.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
  }, false);
}

myVideo.play();
