var fix, move;

function setup() 
{
  createCanvas(1600,800);

  fix = createSprite(500,400,60,80);
  move = createSprite(800,600,80,60);
  fix.shapeColor = "blue";
  move.shapeColor = "blue";
 
}

function draw() 
{
  background(0);

  move.x = mouseX;
  move.y = mouseY;

  if(move.x - fix.x < move.width/2 + fix.width/2 
    && fix.x - move.x < fix.width/2+move.width/2)
  {
    fix.shapeColor = "red";
    move.shapeColor = "red";
  }
  else
  {
    fix.shapeColor = "blue";
    move.shapeColor = "blue";
  }
  
  drawSprites();
}