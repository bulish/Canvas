let c = document.getElementById('firstLines');
let ctx = c.getContext('2d');
ctx.moveTo(0, 0);
ctx.lineTo(300, 300);
ctx.stroke();

let c2 = document.getElementById('secondLines');
let ctx2 = c2.getContext('2d');
ctx2.moveTo(0, 150);
ctx2.lineTo(300, 150);
ctx2.stroke();

let c3 = document.getElementById('thirdLines');
let ctx3 = c3.getContext('2d');
ctx3.moveTo(150, 0);
ctx3.lineTo(150, 300);
ctx3.stroke();

let c4 = document.getElementById('fourthLines');
let ctx4 = c4.getContext('2d');
ctx4.moveTo(0, 300);
ctx4.lineTo(300, 0);
ctx4.stroke();

let c5 = document.getElementById('fifthLines');
let ctx5a = c5.getContext('2d');
ctx5a.moveTo(120, 0);
ctx5a.lineTo(120, 300);
ctx5a.stroke();

let ctx5b = c5.getContext('2d');
ctx5b.moveTo(180, 0);
ctx5b.lineTo(180, 300);
ctx5b.stroke();

let ctx5c = c5.getContext('2d');
ctx5c.moveTo(0, 120);
ctx5c.lineTo(300, 120);
ctx5c.stroke();

let ctx5d = c5.getContext('2d');
ctx5d.moveTo(0, 180);
ctx5d.lineTo(300, 180);
ctx5d.stroke();
