let currentPage = 0;

let car;
let road;
let full;
let mom;
let me;
let walk2;
let hula;
let star;
let house;
let start;

let startX = 275;
let startY = 225;
let startW = 200;
let startH = 200;

//intro shot- road
let buttonX = 30;
let buttonY = 80;
let buttonW = 150;
let buttonH = 150;

//setting- garden
let button2X = 30;
let button2Y = 150;
let button2W = 50;
let button2H = 50;

let starX = 690;
let starY = 190;
let starH = 90;
let starW = 90;

let carX = 350;
let carY = 230;
let carH = 210;
let carW = 275;

let hulaX = 150;
let hulaY = 350;
let hulaH = 105;
let hulaW = 105;


//characters- house
let button3X = 30;
let button3Y = 220;
let button3W = 5;
let button3H = 5;


//windows for page 3
let w0X = 100;
let w0Y = 160;
let w0W = 150;
let w0H = 150;

let w1X = 100;
let w1Y = 330;
let w1W = 150;
let w1H = 150;

let w2X = 300;
let w2Y = 280;
let w2W = 150;
let w2H = 150;

let w3X = 350;
let w3Y = 160;
let w3W = 150;
let w3H = 150;

let w4X = 500;
let w4Y = 160;
let w4W = 50;
let w4H = 50;

let pondX = 150;
let pondY = 550;
let pondW = 150;
let pondH = 700;

let doorX = 500;
let doorY = 280;
let doorW = 150;
let doorH = 150;

let oX = 180;
let oY = 330;
let oW = 20;
let oH = 20;

let me2X = 275;
let me2Y = 150;
let me2W = 220;
let me2H = 225;


let creditX = 80;
let creditY = 550;
let creditW = 90;
let creditH = 20;

let endY = 100;

let close = 'majority of the images are taken by me. Start button: https://www.google.com/search?q=start%20here%20icon%20button&tbm=isch&tbs=itp:clipart&hl=en&sa=X&ved=0CAEQpwVqFwoTCMCYrJjQpuwCFQAAAAAdAAAAABAJ&biw=1905&bih=955#imgrc=T6-Fp6Wi-l6U9M. orange icon: https://www.google.com/search?q=orange+fruit&sxsrf=ALeKk03eQG4kdJNuN8W-W8ZPTwlSVe0xKA:1602223316529&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjtl4f96qbsAhVxk-AKHXcKBloQ_AUoAXoECDIQAw&biw=1280&bih=675#imgrc=kBUCtsWcfmgoVM. ghost icon: https://www.google.com/search?q=mario+ghost&sxsrf=ALeKk00vRsbMwyVRZvXJSymczvB1fq-58w:1602219352685&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi7yfma3KbsAhXtmeAKHfkSDAgQ_AUoAXoECB8QAw&biw=1920&bih=955&dpr=1#imgrc=aNCEAkBTEfK8cM. other icons taken from simple google search of each icon (icons taken from previous times google searches therefore link sources are not available.)' ;
  
function preload() {
  road = loadImage('assets/road.jpg');
  full = loadImage('assets/full.jpg');
  me = loadImage('assets/me.png');
 walk2 = loadImage('assets/walk2.png');
  car = loadImage('assets/f-tesla.png');
  hula = loadImage('assets/hula.png');
  star = loadImage('assets/sparkle1.png');
  house = loadImage('assets/goldfish_bowl_copy.png');
  start = loadImage('assets/start.png');
  ghost = loadImage('assets/ghost.png');
  orange = loadImage('assets/orange.png');
  c = loadImage('assets/clouds.png');
  out = loadImage('assets/outside.jpg');
  me2 = loadImage('assets/incar.jpg');
  spongebob = loadImage('assets/spongebob.gif');
}
  
function setup() {
  createCanvas(780, 600);
  background(0);
  frameRate(10);
}

function draw() {
   strokeWeight(4);
    stroke(240);
  
    image(start, buttonX, buttonY, buttonW, buttonH);
  
  if(currentPage == 1 ) {
    background(road);
    text("Our adventure starts here, as our hero is invited to join a quest. Click on either moving icons to choose which path leads you closer to the end. Good luck!", 150,50, 400, 400);
    textSize(25);
    
  
   image(me, mouseX - 45, mouseY - 45, 170, 190);
    
//1st page- decorations
    carX = carX + random (-3,3)
    carY = carY + random (-2,2)
    image(car, carX, carY, 210, 275);
    image(hula, random(150,160), random (350,360), 105, 105);
    
  }
  
  
  if(currentPage == 2) {
    background(full);
    text("Our hero gets to the magical garden and spots a twinkling star at the corner of their eye!", 150,10, 400,400);
    textSize(25);
    
    image(c,random(0,600),random(0,50),random(200,300),100);
    frameRate(1);
    image(c,random(0,600),random(0,50),200,100);
    
     image(orange, oX,oY, oW, oH);
    
    image(walk2, mouseX - 50, mouseY - 50, 250, 370);
  
    starX = starX + random (-5,5)
    starY = starY + random (-5,5)
  image(star, starX, starY, starW, starH);
    
    
    if(mouseX > oX && mouseX < oX + oH && mouseY > oY && mouseY < oY + oH && currentPage == 2) {
  }
} 

  if(currentPage == 3) {
    background(house);
    text("Oh no! It seems you've chosen the wrong path and encountered a ghost! Find out which window takes you back to the magical garden.", 150,10,420,300);
    textSize(20);
    
    image(ghost, mouseX - 60, mouseY - 60, 200, 150);
  }
  
  if(mouseX > w0X && mouseX < w0X + w0H && mouseY > w0Y && mouseY < w0Y + w0H && currentPage == 3) {
    text("try again", w0X, w0Y, w0H, w0W);
  }
  
  if(mouseX > w1X && mouseX < w1X + w1H && mouseY > w1Y && mouseY < w1Y + w1H && currentPage == 3) {
    text("try again", w1X, w1Y, w1H, w1W);
  }
  
  if(mouseX > w2X && mouseX < w2X + w2H && mouseY > w2Y && mouseY < w2Y + w2H && currentPage == 3) {
    text("try again", w2X, w2Y, w2H, w2W);
  }
  
  if(mouseX > w3X && mouseX < w3X + w2H && mouseY > w3Y && mouseY < w3Y + w3H && currentPage == 3) {
    text("try again", w3X, w3Y, w3H, w3W);
  }
  
  if(mouseX > doorX && mouseX < doorX + doorH && mouseY > doorY && mouseY < doorY + doorH && currentPage == 3) {
    text("entrance does not mean window", doorX, doorY, doorH, doorW);
  }
  
  if(mouseX > w4X && mouseX < w4X + w4H && mouseY > w4Y && mouseY < w4Y + w4H && currentPage == 3) {
    text("finally", w4X, w4Y, w4H, w4W);
  }
  
   if(mouseX > pondX && mouseX < pondX + pondH && mouseY > pondY && mouseY < pondY + pondH && currentPage == 3) {
    text("this is definitely not a window", pondX, pondY, pondH, pondW);
  }
  
  if(currentPage == 4) {
    background(out);
    text("You made it out of there! What a confusing and interesting quest? (was that even a quest???) Now, get in the car and get outta here!", 150,10,420,300);
    textSize(20);
  rect(creditX, creditY, creditW, creditH);
    text("CREDITS", creditX, creditY, creditW, creditH);
   
    if(mouseX > me2X && mouseX < me2X + me2H && mouseY > me2Y && mouseY < me2Y + me2H && currentPage == 4) {
    image(me2, me2X, me2Y, me2H, me2W);
  }
    
    image(spongebob, 590, 410, 180,180);
    
  }
   if(currentPage == 5) {
    background(out);
     text("CREDITS", 300,25,100,100);
     text(close, 200,endY - 10,300,300);
     textAlign(CENTER);
     
  }
  
}

function mousePressed() {
  
//if ( mouseX > startX && mouseX < startX+startW && mouseY > startY && mouseY < startY+startH) {
        //background(road);
       // currentPage = 1;
 // }
  
      if ( mouseX > buttonX && mouseX < buttonX+buttonW && mouseY > buttonY && mouseY < buttonY+buttonH) {
        background(road);
        currentPage = 1;
    }
  
  if ( mouseX > button2X && mouseX < button2X+button2W && mouseY > button2Y && mouseY < button2Y+button2H) {
        background(full);
    currentPage = 2;
    }
  //clicking on hula leads to page 3
  if ( mouseX > hulaX && mouseX < hulaX+hulaW && mouseY > hulaY && mouseY < hulaY+hulaH) {
    background(house);
    currentPage = 3;
  }
  //clicking on car leads to page 2
  if ( mouseX > carX && mouseX < carX+carW && mouseY > carY && mouseY < carY+carH) {
    background(full);
    currentPage = 2;
  }
  
  let housef = house.filter(INVERT,3);
  if ( mouseX > button3X && mouseX < button3X+button3W && mouseY > button3Y && mouseY < button3Y+button3H) {
        background(housef);
    currentPage = 3;
    }
  
  if ( mouseX > starX && mouseX < starX+starW && mouseY > starY && mouseY < starY+starH) {
    background(house);
 currentPage = 3;
  }
  
  if ( mouseX > w4X && mouseX < w4X+w4W && mouseY > w4Y && mouseY < w4Y+w4H) {
    background(full);
 currentPage = 2;
  }
  
  if ( mouseX > oX && mouseX < oX+oW && mouseY > oY && mouseY < oY+oH) {
    background(out);
 currentPage = 4;
  }
  
  if ( mouseX > creditX && mouseX < creditX+creditW && mouseY > creditY && mouseY < creditY+creditH) {
    background(out);
 currentPage = 5;
    out.filter(GRAY);
    
  }
}