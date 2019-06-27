var driver = 0.0;
var slider_numSqaures;
var slider_speed;
var slider_freq;
var slider_textSize;
var slider_amp;
var shape = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // text spec
  fill(255, 10);

  //textSize(0);
  textFont('Jura');

  //sliders
  slider_numSqaures = createSlider(0, 150, 25);
  slider_numSqaures.position(width/40, 30);
  slider_numSqaures.style('width', '180px');

  slider_speed = createSlider(0, 200, 50);
  slider_speed.position(width/40, 70);
  slider_speed.style('width', '180px');

  slider_freq = createSlider(0, 500, 250);
  slider_freq.position(width/40, 110);
  slider_freq.style('width', '180px');



  slider_amp = createSlider(0, 500, 250);
  slider_amp.position(width/40, 150);
  slider_amp.style('width', '180px');
}


function draw() {
  background(0, 90);

  //slider
  textAlign(LEFT);
  //size of text 
  if (width/50 < 20) {
    slider_textSize=20;
  } else {
    slider_textSize= width/50;
  }
  textSize(slider_textSize);

  var val_numSquares = slider_numSqaures.value();
  text("Number of squares", width/40, 30);

  var val_speed = slider_speed.value();
  text("Accelerate", width/40, 65); 

  var val_freq = slider_freq.value()*0.00001;
  text("Frequency", width/40, 110);


  var val_amp = slider_amp.value()*0.001;
  text("Amplitude", width/40, 145);
  

  //click to change shape 
  //circle
  if (  mouseIsPressed &&   dist((width/40)+10, 190, mouseX, mouseY)<10              ) { 
    shape =0;
  }
  if (shape ==0) {
    fill(255);
  } else {
    noFill();
  }
  ellipse((width/40)+10, 190, 20, 20);

  //square
  if (  mouseIsPressed &&   dist((width/40)+40, 190, mouseX, mouseY)<10              ) { 
    shape =1;
  }
  if (shape ==1) {
    fill(255);
  } else {
    noFill();
  }
  rect((width/40)+40, 190, 20, 20);
  
  // lines
 if (  mouseIsPressed &&   dist((width/40)+75, 190, mouseX, mouseY)<15              ) { 
    shape =2;
  }
   if (shape ==2) {
    fill(255);
  } else {
    noFill();
  }
  rect((width/40)+75, 190, 30, 5);

  
  
  
  
  
  textSize(width*0.02);

  fill(255, 50);
  textAlign(CENTER);
  text("BRENDAN O'DONNELL", width/2, 50);


  noFill();
  translate(width/2, height/2);


  if (shape ==1) {
    push();
    rotate(QUARTER_PI);
    rect(0, 0, height/2, height/2);
    pop();
  } else {
    ellipse(0, 0, height/2, height/2);
  }







  noFill();
  stroke(255);
  rectMode(CENTER);
  for (var i =0; i<val_numSquares; i++) {
    stroke(255, 50);
    push();
    rotate(i*val_speed);


    if (shape ==0) {
      ellipse(cosx(val_freq*i, (height*val_amp), driver+i), siny(val_freq*i, (height*val_amp)+i, driver), height*0.09, height*0.09);
      ellipse(cosx(val_freq*i, (height*val_amp/2), driver), siny(val_freq*i, (height*val_amp/2)+i, driver), height*0.03, height*0.03);
    }

    if (shape == 1) {

      rect(cosx(val_freq*i, (height*val_amp), driver), siny(val_freq*i, (height*val_amp)+i, driver), height*0.09, height*0.09);
      rect(cosx(val_freq*i, (height*val_amp/2), driver), siny(val_freq*i, (height*val_amp/2)+i, driver), height*0.03, height*0.03);
    }


 if (shape == 2) {

      line(cosx(val_freq*i, (height*val_amp), driver), siny(val_freq*i, (height*val_amp)+i, driver), height*0.09, height*0.09);
      line(cosx(val_freq*i, (height*val_amp/2), driver), siny(val_freq*i, (height*val_amp/2)+i, driver), height*0.03, height*0.03);
    }


    pop();
  }
  if (shape ==1) {
    push();
    rotate(driver*0.05);
    rect(0, 0, height*0.1, height*0.1);
    pop();
  } else {
    ellipse(0, 0, height*0.1, height*0.1);
  }






  driver +=(val_speed*0.008);
  print(shape);
}


function cosx( freq, amp, driver) {

  return (cos(driver*freq)*amp);
}


function siny( freq, amp, driver) {

  return (sin(driver*freq)*amp);
}
