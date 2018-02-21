
var C1 = 250;
var C2 = 150;
var C3 = 50;

var count = 0;

var Cornerimg;


function setup() {
    pixelDensity(1);
  createCanvas(800,800);
  Cornerimg = createGraphics(width/2, height/2);

  background(100,0,0);

}

function draw() {


  // Cornerimg.beginDraw();

  // count+= .1;

  //println(sin(count));
  
  count -= ( count - ((mouseX+mouseY)/85) ) /25;

  C2 = map(sin(count), -1, 1, 90, 175);
  C1 = map(cos(count), -1, 1, 320, 175);  
  C3 = map(sin(count+333.3333), -1, 1, 100, 30);    


  Cornerimg.background(250);

  Cornerimg.stroke(0);
  Cornerimg.noFill();

  Cornerimg.strokeWeight(20);

  Cornerimg.ellipse(width/2, height/2, C3-10, C3-10);

  Cornerimg.ellipse(width/2, height/2, C2, C2);


  //ellipse(width/2, height/2 + (C1/2 +C2/2), C1, C1);
  Cornerimg.ellipse(width/2, height/2 - (C1/2 +C2/2), C1, C1);

  Cornerimg.bezier(
    width/2 - (C1/2), height/2 - (C1/2 +C2/2), 
    width/2 - (C1/2), height/2 - (C1/2 +C2/2)/2, 
    width/2 - (C2/2), height/2 - (C1/2 +C2/2)/2, 
    width/2 - (C2/2), height/2 );

  Cornerimg.ellipse(width/2 - 180, height/2, C3+20, C3+20);
  //ellipse(width/2 + 200, height/2, C3+20, C3+20);

  var size = C2-20;

  Cornerimg.arc(100, height/2 -100, size, size, PI-QUARTER_PI-.45, PI*2-QUARTER_PI+.7, OPEN);
  Cornerimg.push();
  Cornerimg.translate(100, height/2 -100);
  Cornerimg.rotate(HALF_PI + sin(count-.3)/3);
  Cornerimg.line(-size/4-5, -size/4-5, size/4+5, size/4+5);
  //arc(0, 0, 120, 120, PI-HALF_PI-QUARTER_PI, PI*2-HALF_PI-QUARTER_PI+.7 -sin(count)/3, OPEN);

  Cornerimg.pop();

  Cornerimg.bezier(
    100+size/2, height/2 - 100, 
    100+size/2, height/2 - 50, 
    width/2 - 250, height/2 - (C3+20)/2, 
    width/2 - 180, height/2 - (C3+20)/2);

  Cornerimg.bezier(
    80, height/2 -103 +size/2, 
    120, height/2 -100+size/2, 
    120, height/2+100, 
    80, height/2  +103);



push();

  translate(0,0); // move to far corner

  image(Cornerimg, 0, 0, width/2, height/2); //video on canvas, position, dimensions

  translate(width,0); // move to far corner
   scale(-1.0,1.0);    // flip x-axis backwards
   image(Cornerimg, 0, 0, width/2, height/2); //video on canvas, position, dimensions

  translate(0,height); // move to far corner
  scale(1.0,-1.0);    // flip x-axis backwards
  image(Cornerimg, 0, 0, width/2, height/2); //video on canvas, position, dimensions

  translate(width,0); // move to far corner

  scale(-1.0,1.0);    // flip x-axis backwards
  image(Cornerimg, 0, 0, width/2, height/2); //video on canvas, position, dimensions

pop();


} 
