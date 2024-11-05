const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
]

const chosenImge = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img")

bgImage.src = `img/${chosenImge}`;
bgImage.width = "500";

document.body.appendChild(bgImage);
