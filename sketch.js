const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16
var polygon

function preload() {
    imageMode(center);
    image(polydon_img,polygon.position.x,polygon.position.y,40,40)
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(100,350,90,30);

    box1 = new Box(120,365);
    box2 = new Box(150,365);
    box3 = new Box(180,365);
    box4 = new Box(210,365);
    box5 = new Box(240,365);
    box6 = new Box(270,365);
    box7 = new Box(300,365);
    box8 = new Box(330,235);
    box9 = new Box(360,235);
    box10 = new Box(390,235);
    box11 = new Box(420,235);
    box12 = new Box(450,235);
    box13 = new Box(360,195);
    box14 = new Box(390,195);
    box15 = new Box(420,195);
    box16 = new Box(390,155);

    polygon = Bodies.circle(50,200,20);
    world.add(world,polygon)

    slingShot = new SlingShot(this.polygon,{x:100,y:200});
}

function draw(){
    background("black");
    Engine.update(engine);
    groung1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
} 

function mouseDragged(){
    if(gamestate!=="launched"){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
}


function mouseReleased(){
    slingshot.fly();
    gamestate = "launched";
}
