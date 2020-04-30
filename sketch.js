function setup() {
  createCanvas(400,400);
  

}

function draw() {
  background(255,255,255);  
  rect(55, 220,60,200);
  rect(115,220,60,200);
  rect(170,220,60,200);
  rect(220,220,60,200);
  rect(270,220,60,200);
  triangle(54,220,80,150,115,220);
  triangle(170,220,193,150,220,220);
  triangle(270,220,300,150,330,220);
}