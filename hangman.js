let c = document.getElementById('hangmanCanvas');

let ctx = c.getContext('2d');
ctx.fillRect(100, 450, 250, 15);

let ctx2 = c.getContext('2d');
ctx2.fillRect(130, 100, 15, 350);

let ctx3 = c.getContext('2d');
ctx3.fillRect(130, 100, 100, 15);

let ctx4 = c.getContext('2d');
ctx4.fillRect(230, 100, 15, 50);

let ctx5 = c.getContext('2d');
ctx5.beginPath();
ctx5.arc(240, 180, 30, 0, 2 * Math.PI);
ctx5.stroke();

let ctx6 = c.getContext('2d');
ctx6.moveTo(240, 210);
ctx6.lineWidth = 6;
ctx6.lineTo(240, 340);
ctx6.stroke();


let ctx7 = c.getContext('2d');
ctx7.moveTo(240, 338);
ctx7.lineWidth = 6;
ctx7.lineTo(280, 400);
ctx7.stroke();


let ctx8 = c.getContext('2d');
ctx8.moveTo(240, 338);
ctx8.lineWidth = 6;
ctx8.lineTo(198, 400);
ctx8.stroke();


let ctx9 = c.getContext('2d');
ctx9.moveTo(240, 250);
ctx9.lineWidth = 6;
ctx9.lineTo(200, 292);
ctx9.stroke();


let ctx10 = c.getContext('2d');
ctx10.moveTo(240, 250);
ctx10.lineWidth = 6;
ctx10.lineTo(280, 292);
ctx10.stroke();