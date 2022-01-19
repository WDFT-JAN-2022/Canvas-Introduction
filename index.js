const canvas = document.getElementById("c");
//ctx is not a reserved word, just easy to remember
const ctx = canvas.getContext("2d");

canvas.height = 600;
canvas.width = 600;

// ctx.fillRect(x,y,w,h)

ctx.fillRect(100, 100, 100, 100);
ctx.fillStyle = "blue";

ctx.fillRect(400, 400, 100, 100);

ctx.strokeRect(250, 250, 100, 100);

ctx.clearRect(0, 0, 600, 600);
