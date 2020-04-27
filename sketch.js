const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var engine, world;
var ground;
var platform1,platform2,sepLog,platform3;
var bird;
var pig1,pig2,pig3,pig4,p5,pig6,pig7,pig8,pig9,pig10,pig11,pig12,pig13,pig14,pig15;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,395,1200,10);
    platform1 = new Ground(700,150,250,10);
    platform2 = new Ground(700,300,250,10);
    
    platform3 = new Ground(1000,230,250,10);
    bird = new Bird(200,200,10,10);
    con1 = new Slingshot(bird.body,{x:200,y:200})
    pig1 = new Pig(900,225,10,10);
    pig2 = new Pig(950,225,10,10);
    pig3 = new Pig(1000,225,10,10);
    pig4 = new Pig(1050,225,10,10);
    pig5 = new Pig(1100,225,10,10);
    pig6 = new Pig(575,140,10,10);
    pig7 = new Pig(625,140,10,10);
    pig8 = new Pig(675,140,10,10);
    pig9 = new Pig(725,140,10,10);
    pig10 = new Pig(775,140,10,10);
    pig11 = new Pig(575,290,10,10);
    pig12 = new Pig(625,290,10,10);
    pig13 = new Pig(675,290,10,10);
    pig14 = new Pig(725,290,10,10);
    pig15 = new Pig(775,290,10,10);
    





}
   function draw(){
    background(backgroundImg);
    Engine.update(engine);
      ground.display();
      platform1.display();
      platform2.display();
     
      platform3.display();
      bird.display();
      con1.display();
      pig1.display();
      pig2.display();
      pig3.display();
      pig4.display();
      pig5.display();
     
      pig7.display();
      pig8.display();
      pig9.display();
      pig10.display();
     
      pig12.display();
      pig13.display();
      pig14.display();
      pig15.display();





}
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
con1.fly();
}

function keyPressed(){
if(keyCode === 32){
    con1.attach(bird.body);
}


}