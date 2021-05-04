var basket,basket_img,fruit,fruit_img,fruit1,fruit2,fruit3,stone,stone_img;
var backGround_img
var invisibleGround;
var score=0;
var basketGroup;
function preload(){
    fruit_img = loadImage("apple1.png");
    fruit2 = loadImage("watermelon1.png");
    
    basket_img = loadImage("bask1.png");
backGround_img = loadImage("jungle.jpg");
fruitGroup = new Group();
}

function setup(){
createCanvas(800,500);
basket = createSprite(400,425,50,50);
basket.addImage("basket",basket_img);
basket.scale=0.1
invisibleGround = createSprite(400,488,800,7);
invisibleGround.visible=false
}

function draw(){

background(backGround_img);
text("score :"+score,720,30);
fruits();
if(fruitGroup.isTouching(basket)){
    score=score+2
fruitGroup.destroyEach();
}


drawSprites();
}

function fruits(){
if(frameCount % 200 === 0){
    fruit = createSprite(400,-50,30,30);
    r=Math.round(random(2,3));
    if(r===2){
        fruit.addImage("fruit1",fruit_img);
        fruit.scale=0.1
    }
   if(r===3){
       fruit.addImage("fruit2",fruit2);
       fruit.scale=0.1
   }
  
fruit.velocityY=3
fruit.x=random(100,750);

fruitGroup.add(fruit);


basket.x=fruit.x
}
}