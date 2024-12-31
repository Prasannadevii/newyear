console.log
const newYearImage = document.querySelector('.new-year-image');
const heartContainer = document.querySelector('.heart-container');
const newYearVideo = document.querySelector('.new-year-video');

newYearImage.addEventListener('click', () => {
    console.log("heyyyyy");
  generateHearts();
});

newYearImage.addEventListener('click', () => {
  generateHearts();
});

function generateHearts() {
    console.log("Generating hearts...");
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.top = `${Math.random() * 100}%`;
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDelay = `${Math.random() * 2}s`;
    heartContainer.appendChild(heart);

    heart.addEventListener('click', () => {
      newYearVideo.style.display = 'block';
    });

    heart.addEventListener('touchstart', () => {
      newYearVideo.style.display = 'block';
    });
  }
}
