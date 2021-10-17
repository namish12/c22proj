const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var computer, computerBase;

/*function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}*/

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  //angleMode(DEGREES);

  var options = {
    isStatic : true
  };

  //create player base body
  //playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  //World.add(world, playerBase);
  //create player body
  //player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  //World.add(world, player);
  //create player archer
 
  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );

}

function draw() {
  background(189);

  //show the player image using image() function
  //image(baseimage, playerBase.position.x, playerBase.position.y, 180, 150);
  //show the playerbase image using image() function
  //image(playerimage, player.position.x, player.position.y, 50, 180);
  //displays the Computer
  

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
}
