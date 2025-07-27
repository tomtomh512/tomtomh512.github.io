const train = document.getElementById("train");

const totalFrames = 8;
const frameWidth = 825;
const frameHeight = 242;
const animationWidth = totalFrames * frameWidth;

let scrollSpeedFactor;
let baseDivisor;
let scale;
let maxScroll;
let maxX;

function updateDimensions() {
  scrollSpeedFactor = window.innerWidth < 1024 ? 150 : 75;
  baseDivisor = window.innerWidth < 1024 ? 1.5 : 3.5;
  scale = window.innerWidth / baseDivisor / frameWidth;
  maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  maxX = window.innerWidth - frameWidth * scale - frameWidth * 0.05 * scale;

  train.style.width = frameWidth + "px";
  train.style.height = frameHeight + "px";
}

function updateScroll() {
  const scrollY = window.scrollY;
  const scrollPercent = scrollY / maxScroll;

  const scrollValue = maxScroll - scrollY / scrollSpeedFactor;
  const frameIndex = Math.floor((scrollValue % totalFrames) + 1);
  const offsetX = animationWidth - frameIndex * frameWidth;

  const translateX = scrollPercent * maxX;

  train.style.backgroundPosition = `-${offsetX}px 0`;
  train.style.transform = `translateX(${translateX}px) scale(${scale})`;
}

// on load and resize:
updateDimensions();
updateScroll();

window.addEventListener("resize", () => {
  updateDimensions();
  updateScroll();
});

window.addEventListener("scroll", updateScroll);
