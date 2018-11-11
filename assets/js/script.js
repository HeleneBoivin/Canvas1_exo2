var c = document.getElementById( "mon_canvas" );
var ctx = c.getContext("2d");

// Maison
ctx.fillStyle = "grey";
ctx.fillRect(100,150,150,150);  // fillRect(startx, starty, largeur, hauteur)

// Porte
ctx.fillStyle = "purple";
ctx.fillRect(165,260,25,40);

// Fenêtre
ctx.fillStyle = "white";
ctx.fillRect(205,180,20,20);

// Fenêtre
ctx.fillStyle = "white";
ctx.fillRect(125,180,20,20);

// // toit
ctx.fillStyle = "powderblue";
ctx.rotate(45*Math.PI/180);
ctx.globalCompositeOperation = "destination-over"
ctx.fillRect(177,-70,108,108);
