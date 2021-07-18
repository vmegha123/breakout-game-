var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var Sofia =createSprite(20,25,20,20);
 Sofia.shapeColor="purple";
 
 var cup=createSprite(400,375,22,45);
 cup.shapeColor="gold";
 
 var wall1=createSprite(10,70,100,20);
 wall1.shapeColor="brown";
 var wall2=createSprite(100,50,20,100);
 wall2.shapeColor="brown";
 var wall3=createSprite(160,22,100,20);
 wall3.shapeColor="brown";
 var wall4=createSprite(80,124,100,20);
 wall4.shapeColor="brown";
 var wall5 =createSprite(167,120,20,100);
 wall5.shapeColor="brown";
 var wall6 =createSprite(130,200,100,20);
 wall6.shapeColor="brown";
 var wall7 = createSprite(59,240,20,100);
 wall7.shapeColor="brown";
 var wall8 = createSprite(30,240,70,20);
 wall8.shapeColor="brown";
 var wall9 = createSprite(278,75,20,100);
 wall9.shapeColor="brown";
 var wall10 = createSprite(300,150,100,20);
 wall10.shapeColor="brown";
 var wall11 = createSprite(350,50,80,20);
 wall11.shapeColor="brown";
 var wall12 = createSprite(364,120,20,100);
 wall12.shapeColor="brown";
 var wall13 = createSprite(40,350,20,115);
 wall13.shapeColor="brown";
 var wall14 = createSprite(100,280,20,100);
 wall14.shapeColor="brown";
 var wall15 = createSprite(180,280,100,20);
 wall15.shapeColor="brown";
 var wall16 = createSprite(220,240,20,100);
 wall16.shapeColor="brown";
 var wall17 = createSprite(171,340,20,115);
 wall17.shapeColor="brown";
 var wall18 = createSprite(330,200,165,20);
 wall18.shapeColor="brown";
 var wall19 = createSprite(350,250,100,20);
 wall19.shapeColor="brown";
 var wall20 = createSprite(292,270,20,100);
 wall20.shapeColor="brown";
 var wall21 = createSprite(250,388,100,20);
 wall21.shapeColor="brown";
 var wall22 = createSprite(350,350,20,100);
 wall22.shapeColor="brown";
 
  function draw() {
  background("pink");
  textFont("arabic")
  textSize(22);
  text("Sofia", 36, 24);
   text("cup",366,332)
  
if (keyDown(UP_ARROW)) {
    Sofia.y=Sofia.y-10;
    }
 if (keyDown(DOWN_ARROW)) {
     Sofia.y=Sofia.y+10;
    }
 if (keyDown("right")) {
       Sofia.x=Sofia.x+10;
       }
 if (keyDown("left")) {
       Sofia.x=Sofia.x-10;
             }
    createEdgeSprites(); 
    Sofia.bounceOff(wall1);
Sofia.bounceOff(wall2);
Sofia.bounceOff(wall3);
Sofia.bounceOff(wall4);
Sofia.bounceOff(wall5);
Sofia.bounceOff(wall6);
Sofia.bounceOff(wall7);
Sofia.bounceOff(wall8);
Sofia.bounceOff(wall9);
Sofia.bounceOff(wall10);
Sofia.bounceOff(wall11);
Sofia.bounceOff(wall12);
Sofia.bounceOff(wall13);
Sofia.bounceOff(wall14);
Sofia.bounceOff(wall15);
Sofia.bounceOff(wall16);
Sofia.bounceOff(wall17);
Sofia.bounceOff(wall18);
Sofia.bounceOff(wall19);
Sofia.bounceOff(wall20);
Sofia.bounceOff(wall21);
Sofia.bounceOff(wall22);
Sofia.bounceOff(edges);
 
 if (Sofia.collide(cup)) {
   background("white")
   textFont("bold");
   textSize(30);
   stroke("black");
   text("You Win",129,60);
 }
              
  drawSprites();
}
























// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
