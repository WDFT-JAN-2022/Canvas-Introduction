const canvas = document.getElementById("c");
//ctx is not a reserved word, just easy to remember
const ctx = canvas.getContext("2d");

canvas.height = 600;
canvas.width = 600;

const img = new Image();

img.src = "./mario.png";

img.onload = () => {
  ctx.drawImage(img, 100, 100, 40, 50);
};

// ctx.fillRect(x,y,w,h)

// ctx.fillRect(100, 100, 100, 100);
// ctx.fillStyle = "blue";

// ctx.fillRect(400, 400, 100, 100);

// ctx.strokeRect(250, 250, 100, 100);

// ctx.drawImage(img, x,y,w,h)
// ctx.drawImage(img, 100, 100, 40, 40);
