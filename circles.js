let c = document.getElementById('firstCircles');
let ctx = c.getContext('2d');
ctx.beginPath();
ctx.arc(150, 110, 100, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill();
ctx.stroke();

let c2 = document.getElementById('secondCircles');
let ctx2 = c2.getContext('2d');
ctx2.beginPath();
ctx2.arc(80, 110, 70, 0, 2 * Math.PI);
ctx2.fillStyle = 'blue';
ctx2.fill();
ctx2.stroke();

let c3 = document.getElementById('thirdCircles');
let ctx3 = c3.getContext('2d');
ctx3.beginPath();
ctx3.arc(150, 150, 130, 0, 2 * Math.PI);
ctx3.fillStyle = 'green';
ctx3.fill();
ctx3.stroke();

let c4 = document.getElementById('fourthCircles');
let ctx4 = c4.getContext('2d');
ctx4.beginPath();
ctx4.arc(40, 150, 30, 0, 2 * Math.PI);
ctx4.fillStyle = 'pink';
ctx4.fill();
ctx4.stroke();

let c5 = document.getElementById('fifthCircles');
let ctx5 = c5.getContext('2d');
ctx5.beginPath();
ctx5.arc(130, 170, 120, 0, 2 * Math.PI);
ctx5.fillStyle = 'yellow';
ctx5.fill();
ctx5.stroke();
