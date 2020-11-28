const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;


var particles = [];
var plinko = [];
var divisions =[];
var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(400,800);
  engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,height,width,20);  
}

function draw() {
  background(0,0,0); 
  Engine.update(engine);
  
  
  if(frameCount % 40 === 0 ){
    //console.log("if is working")
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));
   
    //console.log("particle is getting created")
  }

  for (var j = 30; j <=width; j=j+60) {
    plinko.push(new Plinko(j,55));
 }

 for (var j = 20; j <=width-10; j=j+50) {
     plinko.push(new Plinko(j,155));
 }

 for (var j = 30; j <=width; j=j+60) {
     plinko.push(new Plinko(j,255));
 }

 for (var j = 20; j <=width-10; j=j+50) {
     plinko.push(new Plinko(j,355));
 }

 for (var k = 0; k <=width; k = k + 80) {
  divisions.push(new Division(k, height-divisionHeight/2, 3, divisionHeight));
}
 

  for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }

  for (var i = 0; i < plinko.length; i++) {
    plinko[i].display();  
 }

 for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }

  ground.display();
}