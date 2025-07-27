const train = document.getElementById("train");


const totalFrames = 8;
const frameWidth = 596;
const animationWidth = totalFrames * frameWidth;
const scrollSpeedFactor = window.innerWidth < 1024 ? 150 : 75;

// Scale train to fit half the screen width
const baseDivisor = window.innerWidth < 1024 ? 1.25 : 3.5;
const scale = window.innerWidth / baseDivisor / frameWidth;
train.style.transform = `scale(${scale})`;

// Max scrollable distance
const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

// Max horizontal distance the train can travel
const maxX = window.innerWidth - frameWidth * scale - frameWidth * 0.05 * scale;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const scrollPercent = scrollY / maxScroll;

  const scrollValue = maxScroll - scrollY / scrollSpeedFactor;
  const frameIndex = Math.floor((scrollValue % totalFrames) + 1);
  const offsetX = animationWidth - frameIndex * frameWidth;

  const translateX = scrollPercent * maxX;

  train.style.backgroundPosition = `-${offsetX}px 0`;
  train.style.transform = `translateX(${translateX}px) scale(${scale})`;
});
