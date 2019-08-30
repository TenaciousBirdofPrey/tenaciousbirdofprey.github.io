// image stuff
let img
  function preload() {
  img=loadImage('data/cage_sm.png');
}
//dat gui stuff
var sliders;

var driver = 0.0;
var slider_speed;
var slider_freq;
var slider_textSize;
var slider_amp;
//var shape = 1;

// headline
var headline ="BRENDAN O'DONNELL";

function setup() {
  createCanvas(windowWidth, windowHeight);

  //dat gui stuff
  sliders = new Slider();
  var gui = new dat.GUI();
  gui.add(sliders, 'Total_Shapes', 1, 200);
  gui.add(sliders, 'Speed', 1, 10);
  gui.add(sliders, 'Frequency', 0, 0.05);
  gui.add(sliders, 'Amplitude', 0, 0.5);
  gui.add(sliders, 'Shape', { 
  Circle: 
  0, Square: 
  1, Line: 
  2, CAGE:
    3,
  } 
  );


  // text spec
  fill(255, 10);

  //textSize(0);
  textFont('Jura');
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



  textSize(width*0.02);

  fill(255, 50);
  textAlign(CENTER);
  text(headline, width/2, 50);


  noFill();
  translate(width/2, height/2);


  if (sliders.Shape ==1) {
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
  for (var i =0; i<sliders.Total_Shapes; i++) {
    stroke(255, 50);
    push();
    rotate(i*sliders.Speed);


    if (sliders.Shape ==0) {
      ellipse(cosx(sliders.Frequency*i, (height*sliders.Amplitude), driver+i), siny(sliders.Frequency*i, (height*sliders.Amplitude)+i, driver), height*0.09, height*0.09);
      ellipse(cosx(sliders.Frequency*i, (-height*sliders.Amplitude/2), driver), siny(sliders.Frequency*i, (-height*sliders.Amplitude/2)+i, driver), height*0.03, height*0.03);
      headline ="BRENDAN O'DONNELL";
    }

    if (sliders.Shape == 1) {

      rect(cosx(sliders.Frequency*i, (height*sliders.Amplitude), driver), siny(sliders.Frequency*i, (height*sliders.Amplitude)+i, driver), height*0.09, height*0.09);
      rect(cosx(sliders.Frequency*i, (-height*sliders.Amplitude/2), driver), siny(sliders.Frequency*i, (-height*sliders.Amplitude/2)+i, driver), height*0.03, height*0.03);
      headline ="BRENDAN O'DONNELL";
    }


    if (sliders.Shape == 2) {

      line(cosx(sliders.Frequency*i, (height*sliders.Amplitude), driver), siny(sliders.Frequency*i, (height*sliders.Amplitude)+i, driver), height*0.09, height*0.09);
      line(cosx(sliders.Frequency*i, (-height*sliders.Amplitude/2), driver), siny(sliders.Frequency*i, (-height*sliders.Amplitude/2)+i, driver), height*0.03, height*0.03);
      headline ="BRENDAN O'DONNELL";
    }
    //image(img, 0, 0);
    if (sliders.Shape == 3) {
      image(img, cosx(sliders.Frequency*i, (height*sliders.Amplitude), driver+i), siny(sliders.Frequency*i, (height*sliders.Amplitude)+i, driver));
      image(img,cosx(sliders.Frequency*i, (-height*sliders.Amplitude/2), driver), siny(sliders.Frequency*i, (-height*sliders.Amplitude/2)+i, driver));
      headline = "CAGE THE NICHOLAS";
    }





    pop();
  }
  if (sliders.Shape ==1) {
    push();
    rotate(driver*0.05);
    rect(0, 0, height*0.1, height*0.1);
    pop();
  } else {
    ellipse(0, 0, height*0.1, height*0.1);
  }






  driver +=(sliders.Speed*0.008);
}


function cosx( freq, amp, driver) {

  return (cos(driver*freq)*amp);
}


function siny( freq, amp, driver) {

  return (sin(driver*freq)*amp);
}

function Slider() {
  this.Total_Shapes = 10;
  this.Speed =5;
  this.Frequency = 0.01;
  this.Amplitude = 0.25;
  this.Shape =1;
}
