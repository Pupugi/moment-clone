const images = ["0.jpg", "1.jpg", "2.jpg"];

const randomImg = images[Math.floor(Math.random() * images.length)];

const background = document.createElement("img");

background.src = `img/${randomImg}`;

document.body.appendChild(background);