
var c = document.getElementById("hello");
var ctx = c.getContext("2d");

let randomthingidk = 500;
ctx.translate(200, randomthingidk);

let xboundary = 1000;
ctx.moveTo(xboundary, randomthingidk);
ctx.lineTo(xboundary, -randomthingidk);
let radius = 10;

let scale = 1;

let t = 0;
let dt = 0.05;

let x = radius;
let dx = dt* 250;
let d2x = dt * (0);

let y = 100;
let dy = dt * (300);
let d2y = -20;



let mass = 1;



let PE0 = Math.abs(-9.8 * mass * y);
let KE0 = 0.5 * mass * Math.pow((dy / dt), 2);
let energy = PE0 + KE0;

var okThen = setInterval(basicgraph, 0.01);
function basicgraph() {
    

    ctx.fillStyle = "black";
    ctx.fillRect(-200, -randomthingidk, 1800, 2000);
    ctx.fillStyle = "red";
    ctx.fillRect(x * scale, y * -1 * scale, radius, radius);
    ctx.fill();

    ctx.strokeStyle = "lightblue";
    ctx.moveTo(0, -randomthingidk);
    ctx.lineTo(0, randomthingidk);
    ctx.moveTo(-100, 0);
    ctx.lineTo(randomthingidk, 0);
    ctx.moveTo(xboundary, randomthingidk);
    ctx.lineTo(xboundary, -randomthingidk);
    ctx.stroke();

    dy += d2y * dt;
    dx += d2x * dt;
    dx *= 0.999;
    y += dy;
    x += dx;
    if (-1 * y + radius >= 0) {
        dx *= 0.98;
        y = radius;
        dy *= -1;
    }
    if (x - radius <= 0) {
        x = radius;
        dx *= -1;
    }
    if (x >= xboundary - radius) {
        x = xboundary - radius;
        dx *= -1;
    }

}



// var myVar = setInterval(linedrawer, 10);

// function linedrawer(){
//     ctx.moveTo(scale*t, -1*scale*y);
//     let d2y = dt*(Math.tanh(Math.exp(t))/Math.log(t));
//     dy += d2y;
//     y += dy;
//     t += dt;
//     ctx.lineTo(scale*t, -1*scale*y);
//     ctx.stroke();

// }

