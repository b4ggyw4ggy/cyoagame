//Press a button to choose your path
//See the README file for more information
//Note that this sample project includes all optional spice levels

/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;

let bgColor = "pink";
let buttonColor = "light pink";


let fontRegular;
function preload() {
  fontRegular = loadFont("assets/SpaceGrotesk-Medium.ttf");
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textFont(fontRegular);
  noStroke();

  background(bgColor);
  fill("plum");
  textSize(50);
  text(
    "Average Hangout",
    width - width / 2,
    height / 2 - 130
  );
  textSize(20);
  text(
    width / 2,
    height / 2 - 40
  );

  textSize(19);
  fill("white");
  text(
    "We start out walking towards the road \n no one knows where to go and everyone is confused.",
    width / 2,
    height / 2 - 65
  );


  enterButton = new Sprite(width / 2, height / 2 + 120);
  a1Button = new Sprite(-200, -200);
  a2Button = new Sprite(-50, -50);
  b1Button = new Sprite(-100, -100);
  b2Button = new Sprite(-150, -150);
}

function draw() {
  enterButton.w = 180;
  enterButton.h = 75;
  enterButton.collider = "k";
  enterButton.text = "Start Walking";
  enterButton.color = buttonColor;


  fill("white");

  
  if (enterButton.mouse.presses()) {
    showScreen1();
    screen = 1;
  }

  if (screen == 1) {
    if (a1Button.mouse.presses()) {
      showScreen2();
      screen = 2;
    } else if (a2Button.mouse.presses()) {
      showScreen5();
      screen = 5;
    }
  } else if (screen == 2) {
    if (b1Button.mouse.presses()) {
      showScreen3();
      screen = 3;
    } else if (b2Button.mouse.presses()) {
      showScreen4();
      screen = 4;
    }
  }

  print(screen);
}

function showScreen1() {
  background(bgColor);
  text(
    "Everyone is confused on where to go as they step foot. \n They started to walk around but they soon come to \n a fork in the road. Where should they go? ",
    width / 2,
    height / 2 - 130
  );
  textAlign(CENTER);
  enterButton.pos = { x: -100, y: -100 }; 
  b1Button.pos = { x: -100, y: -100 };
  b2Button.pos = { x: -150, y: -150 };

  // Add a1 button
  a1Button.pos = { x: width / 2 - 110, y: height / 2 + 120 };
  a1Button.w = 175;
  a1Button.h = 60;
  a1Button.collider = "k";
  a1Button.color = buttonColor;
  a1Button.text = "The Forest";

  // Add a2 button
  a2Button.pos = { x: width / 2 + 110, y: height / 2 + 120 };
  a2Button.w = 175;
  a2Button.h = 60;
  a2Button.collider = "k";
  a2Button.color = buttonColor;
  a2Button.text = "The Neighborhood";
}

function showScreen2() {
  print("Display screen 2");
  background(bgColor);
  text(
    "They come to a fork in the rode \n wondering where to go to hangout",
    width / 2,
    height / 2 - 130
  );
  textAlign(CENTER);
  
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -50, y: -50 };
  
  b1Button.pos = { x: width / 2 - 110, y: height / 2 + 120 };
  b1Button.w = 150;
  b1Button.h = 60;
  b1Button.collider = "k";
  b1Button.color = buttonColor;
  b1Button.text = "To the Left with \n a Black Cat";
  
  b2Button.pos = { x: width / 2 + 110, y: height / 2 + 120 };
  b2Button.w = 150;
  b2Button.h = 60;
  b2Button.collider = "k";
  b2Button.color = buttonColor;
  b2Button.text = "To the Right with \n a Dog";

}

function showScreen3() {
  background(bgColor);
  text("They walked to the boba shop they always visted.\n They went to the arcade afterwards.", width / 2, height / 2 - 110);
  b1Button.pos = { x: -100, y: -100 };
  b2Button.pos = { x: -150, y: -150 };

}
textAlign(CENTER);

function showScreen4() {
  background(bgColor);
  text("They noticed a new shop in the corner store.\n It was a very new sushi store which they all enjoyed.", width / 2, height / 2 - 140);
  b1Button.pos = { x: -100, y: -100 };
  b2Button.pos = { x: -150, y: -150 };
}
textAlign(CENTER);

function showScreen5() {
  print("Display screen 5");
  background(bgColor);
  text("They walked home and ate pizza for the day.", width / 2, height / 2 - 100);
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -50, y: -50 };

}
textAlign(CENTER);
