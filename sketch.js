var bgImage,stoneImg,stoneImg2,cloudImg1,cloudImg2,boxGroup;
var playerRun,playerIdle,playerJump,enemyRun,enemyIdle;
var cherry,cartImg,chestImg,birdImg,coinAni,energy,playerDead,platf;
var eng = 0,enemyGroup,coinGroup,treeImg;
var c1,counter = 1,fire,bullet;

function preload(){
    bgImage = loadImage("bg/bgimg.jpeg");

    playerRun = loadAnimation("girl/Walk (3).png","girl/Walk (4).png","girl/Walk (6).png","girl/Walk (8).png","girl/Walk (9).png");
    playerIdle = loadAnimation("girl/idle.png");
    playerJump = loadAnimation("girl/Jump (6).png");
    playerDead = loadAnimation("girl/dead.png");
    playerAttack = loadAnimation("girl/JumpAttack (5).png","girl/JumpAttack (6).png")

    enemyRun= loadAnimation("bg/e1.png","bg/e2.png","bg/e3.png","bg/e4.png","bg/e5.png");
    enemyIdle = loadAnimation("bg/e1.png");
    
    treeImg = loadImage("bg/tree.png");

    stoneImg = loadAnimation("bg/stone 1.png");
    stoneImg2 = loadImage("animals/platform.png")
    
    cloudImg1 = loadImage("bg/cloud.png");
    cloudImg2 = loadImage("bg/cloud2.png");
    cartImg = loadImage("bg/box.png");
    chestImg = loadImage("bg/chest box.png");
    cherry = loadImage("animals/cherry.png");

    enr1 = loadImage("bg/1.png");
    enr2 = loadImage("bg/2.png");
    enr3 = loadImage("bg/3.png");
    enr4 = loadImage("bg/4.png");
    enr5 = loadImage("bg/5.png");
    //enr6 = loadImage("bg/6.png");

    c1 = loadAnimation("bg/en1.png","bg/en2.png","bg/en3.png");
    
    fire = loadAnimation("bg/fire.png");

    coinAni = loadAnimation("animals/coin1.png","animals/coin2.png","animals/coin3.png","animals/coin4.png","animals/coin5.png","animals/coin6.png","animals/coin7.png");
    birdImg = loadAnimation("animals/sprite1.png","animals/sprite2.png","animals/sprite3.png","animals/sprite4.png","animals/sprite5.png","animals/sprite6.png","animals/sprite7.png","animals/sprite8.png","animals/sprite9.png");
  }

function setup() {
  createCanvas(displayWidth - 50,displayHeight - 190);
  
  

  bg = createSprite((displayWidth - 50)/2,(displayHeight - 190)/2,displayWidth - 50,displayHeight - 190);
  bg.addImage("bg",bgImage);
  bg.velocityX = -2;

  player = createSprite(50,displayHeight - 260);
  player.addAnimation("idle",playerIdle);
  player.addAnimation("run",playerRun);
  player.addAnimation("jump",playerJump);
  player.addAnimation("dead",playerDead);
  player.addAnimation("attack",playerAttack);
  player.scale=0.3;
  
  

  stone = createSprite(displayWidth - 140,(displayHeight - 190)/2);
  stone.addAnimation("stone",stoneImg);
  stone.velocityX = -4;
  stone.scale = 1;

  ground = createSprite((displayWidth - 50)/2,(displayHeight - 170),displayWidth - 50,50);
  ground.shapeColor = "green";

  boxGroup = new Group()

  coins = createSprite(displayWidth - 140,(displayHeight - 260)/2);
  coins.addAnimation("coin",coinAni);
  coins.velocityX = -4;
  coins.scale = 0.5;

  enbar = createSprite(displayWidth - 200,50)
  enbar.addImage("energy",enr1);
  enbar.addImage("energy2",enr2);
  enbar.addImage("energy3",enr3);
  enbar.addImage("energy4",enr4);
  enbar.addImage("energy5",enr5);
  enbar.scale = 1.5;



  coinGroup = new Group();
  enemyGroup = new Group();
  
}

function draw() {
  background(0); 

  player.collide(ground);

  if(frameCount % 200 === 0){
    spawnEnemy ();
  }

  if(keyWentDown("RIGHT_ARROW")){
      player.velocityX = 2;
      player.changeAnimation("run");
  }

  if(keyWentUp("RIGHT_ARROW")){
    player.velocityX = 0;
    player.changeAnimation("idle");
  } 

  if(keyWentDown("LEFT_ARROW")){
    player.velocityX = -2;
    player.changeAnimation("run");
  }

  if(keyWentUp("LEFT_ARROW")){
    player.velocityX = 0;
    player.changeAnimation("idle");
  }

  if(keyWentDown("UP_ARROW") ){
    player.velocityY = -12;
    player.changeAnimation("jump");
  }

  if(keyWentUp("UP_ARROW")){
    
    player.changeAnimation("idle");
  }

  player.velocityY += 0.5;

  if(keyWentDown("SPACE")){

    player.changeAnimation("attack");
  }

  if(keyWentUp("SPACE")){

    player.changeAnimation("idle");
  }
  
  if(eng > 10 && eng < 20){
    enbar.changeImage("energy2");
  }

  else if(eng > 20 && eng < 30){
    enbar.changeImage("energy2");
  }
  else if(eng > 30 && eng < 40){
    enbar.changeImage("energy3");
  }
  else if(eng > 40 && eng < 50){
    enbar.changeImage("energy4");
  }
  else if(eng > 250 && eng < 300){
    enbar.changeImage("energy5");
  }
  else if(eng > 300 && eng < 350){
    enbar.changeImage("energy6");
  }
  eng = eng + 0.1;

  
  player.setCollider("rectangle",0,0,400,600);

  if(bg.x<0 ){
    bg.x=(displayWidth - 50)/2;

  }

  if(frameCount % 700 === 0){
    cher = createSprite(displayWidth - 50 ,displayHeight - 500);
    cher.addImage("cher",cherry);
    cher.velocityX = -2;
    cher.scale=0.2;
  }

  if(frameCount % 500 === 0 ){
    bird = createSprite(displayWidth-50,(displayHeight - 350)/2);
    bird.addAnimation("tort",birdImg);
    bird.velocityX = -3;
    bird.scale = 0.5;
  }

//for(i = 0;i<enemyGroup;i++)
//{
 // if(enemyGroup.get(i).isTouching(player)){
   
 // }
//}

  if(frameCount % 500 === 0){
    tree = createSprite(displayWidth - 50,displayHeight - 267);
    tree.addImage("tree",treeImg);
    tree.scale = 0.5;
    tree.velocityX = -2;
  }
  
  for(var i =0 ;i<coinGroup.length;i++){
    if(coinGroup.get(i).isTouching(player)){
      //destroy the specific coinusing get(i) 
      coinGroup.get(i).destroy()
      enbar.changeAnimation()
    }
  }

  for(var i =0 ;i<enemyGroup.length;i++){
    if(enemyGroup.isTouching(player)){
    
    player.velocityX = 0;
    bg.velocityX = 0;
    enemyGroup.get(i).destroy()

   }
  }

 
  
  
  spawnClouds();
  spawnPlatforms();
  

  drawSprites();
}

function spawnEnemy(){
  if(counter === 1){
    counter = counter + 1;
    var en = createSprite(random(displayWidth - 140,displayWidth - 240),displayHeight - 260);
    en.addAnimation("enemy",enemyRun);
    en.velocityX = -2;
    en.scale = 0.2;

    var bullet = createSprite(en.x,en.y);
    bullet.addAnimation("fire",fire);
    bullet.velocityX = -5;
    bullet.scale = 0.5
    enemyGroup.add(en);
  }
  
}
//function enemy1(){
  
  
 // en.velocityX = -2;
  
 // en.collide(stone);
 //var num=Math.round(random(1,2))
 //if(num === 1){
 // en.addAnimation("enm",c1);
 // en.scale = 1;
// }
// else{
  
 //}

 // en.collide(ground);
 // enemyGroup.add(en);
//}

function spawnClouds(){
  if(frameCount % 200 === 0){
    clouds = createSprite(displayWidth + 50,random(50,150));
    //var clname = "cloudImg"+Math.round(random(1,2))
    var no = Math.round(random(1,2))
  
    clouds.velocityX = -3;
    clouds.scale = 0.5;

   switch(no){
    case 1:
      clouds.addImage("cloud",cloudImg1);
      break;
    case 2:
      clouds.addImage("cloud",cloudImg2);
      break;
    }
  }
}

function spawnPlatforms(){
  if(frameCount % 250 === 0){
    platf = createSprite(displayWidth + 50,random(200,400));
    platf.velocityX = -2;
    platf.scale = 0.5;
    platf.addImage("platform",stoneImg2);
  } 

  if(frameCount % 750 === 0){
    coin = createSprite(displayWidth + 50,platf.y - 50);
    coin.velocityX = -2;
    coin.scale = 0.5;
    coin.addAnimation("coin",coinAni);

    coinGroup.add(coin);
  }
  
}

function finish(){
  clouds.velocityX = 0;
    platf.velocityX = 0;
}
