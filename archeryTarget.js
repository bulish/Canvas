let c = document.getElementById('theCanvas');
let colors = ['white', 'black', 'blue', 'red', 'yellow'];
let z = 160;
for (let i=0; i<colors.length; i++){
    for (let j=0; j<2; j++){
            let ctx = c.getContext('2d');
				ctx.beginPath();
				ctx.arc(300, 190, z, 0, 2 * Math.PI);
				ctx.fillStyle = colors[i];
				ctx.fill();
				ctx.stroke();
				z -= 15;
    }
}
