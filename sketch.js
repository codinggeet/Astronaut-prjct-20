var bg,sleep, brush, gym, eat, bath, move;
 var astronaut,astronaut1,astronaut2,astronaut3, astronaut4,astronaut5, astronaut6

function preload(){
  bg= loadImage("iss.png");
  sleep = loadImage("images/sleep.png");
  brush = loadImage("images/brush.png");
  gym = loadAnimation("images/gym1.png","gym2.png");
  eat = loadAnimation("images/eat1.png","eat2.png");
  bath = loadAnimation("images/bath1.png","images/bath2.png");
 move = loadAnimation("images/move1.png","images/move2.png");
}

function setup() {
  createCanvas(600, 500);
  
  astronaut = createSprite(300,230);
  astronaut.addImage("sleeping", sleep);
  astronaut.scale = 0.1;

  astronaut1=createSprite(300,230);
  astronaut1.addImage("brushing",brush);
  astronaut1.scale=0.1;
  
  astronaut3=createSprite(300,230);
  astronaut3.addImage("excersicing",gym);
  astronaut3.scale=0.1;

  astronaut4=createSprite(300,230);
  astronaut4.addAnimation("eating",eat);
  astronaut4.scale=0.1;

  astronaut5=createSprite(300,230);
  astronaut5.addAnimation("bathing",bath);
  astronaut5.scale=0.1;

  astronaut6=createSprite(300,230);
  astronaut.addAnimation("moving",move);
  astronaut6.scale=0.1;

}

function draw() {
  background(bg);
  drawSprites();

  textSize(20);
  fill("white")
  text("Instructions:",20, 35);
  textSize(15);
  text("Up Arrow = Brushing",20, 55);
  text("Down Arrow = Gymming",20, 70);
  text("Left Arrow = Eating",20, 85);
  text("Right Arrow = Bathing",20, 100);
  text("m key = Moving",20, 115);
  
  /*edges=createEdgeSprites();
  astronautbounce.Off(edges);*/

  /*edges=createEdgeSprites();
  astronaut.BounceOff(edges);*/

  edges=createEdgeSprites();
  astronaut.bounceOff(edges);

  /*edges=createEdgeSprite();
  astronaut.bounceOff(edges);*/
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.x = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  /*if(key Down("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }*/

  /*if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }/*

  /*if(keyDown("m")){
    astronaut.changeAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }*/

  if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

}