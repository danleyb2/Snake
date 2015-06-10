

var snakeSize=5;
var snakeLength=3;
var snakeHead,snakeFood;
var direction="DOWN";
var canvas;
var dead=false;
var context
var snakeParts=[];
var contextW=400,contextH=300;
var gameOn;


window.onload=init;

function getCanvsCont(){
    canvas=document.getElementById("canvs");
    context=canvas.getContext("2d");
    

}

function Point(x,y){
    this.x=x;
    this.y=y;
}
function drawSnake(snakeParts,context){
    fillBackground(context);
    context.fillStyle="#000000";
    for(var i=0;i<snakeParts.length;i++){
        context.fillRect(snakeParts[i].x,snakeParts[i].y,snakeSize,snakeSize);
    }
}
function createFood(context){
    snakeFood=new Point(Math.ceil(Math.random()*40)*5,Math.ceil(Math.random()*30)*5);
    
                      
}
function placeFood(){
    context.fillStyle="Blue";
    context.fillRect(snakeFood.x,snakeFood.y,snakeSize,snakeSize);
}


function getKeyBoard(event){
    console.log("About to switch")
    
    switch (event.keyCode){
        case 37:
            direction="LEFT";
            console.log(direction);
            break;
        case 38:
            direction="UP";
            console.log(direction);
            break;
        case 39:
            direction="RIGHT";
            console.log(direction);
            break;
        case 40:
            direction="DOWN";
            console.log(direction);
            break;
    }
    
}
function fillBackground(context){
    
    context.fillStyle="#ffffff";
    context.fillRect(0,0,contextW,contextH);
    
}
function gameplay(){
    
    if(!dead){
        
        
        console.log("Snake Food Position: X "+snakeFood.x+" Y "+snakeFood.y);
        console.log("Snake head Position: X "+snakeHead.x+" Y "+snakeHead.y);
        if(snakeHead.x==snakeFood.x && snakeHead.y==snakeFood.y){
            console.log("Got food.. Thanks"); 
            createFood(context);
            snakeLength++;
            
        }
        
        
        
        
        
        switch(direction){
            case "DOWN":
                {
                    snakeHead=new Point(snakeHead.x,snakeHead.y+snakeSize,snakeSize,snakeSize);
                    
                    if(snakeHead.y>contextH/2){
                        dead=true;
                        clearInterval(gameOn);
                        console.log("Dead Snake");
                    }
                    break;
            }
            case "UP":
                {
                    snakeHead=new Point(snakeHead.x,snakeHead.y-snakeSize,snakeSize,snakeSize);
                    if(snakeHead.y<0){
                        dead=true;
                        console.log("Dead Snake");
                    }
                    break;
            }
            case "LEFT":
                {
                    snakeHead=new Point(snakeHead.x-snakeSize,snakeHead.y,snakeSize,snakeSize);
                    if(snakeHead.x<0){
                        dead=true;
                        console.log("Dead Snake");
                    }
                    break;
                
            }
            case "RIGHT":
                {
                    snakeHead=new Point(snakeHead.x+snakeSize,snakeHead.y,snakeSize,snakeSize);
                    if(snakeHead.x>300){
                        dead=true;
                        console.log("Dead Snake");
                    }
                    break;
                
            }
        }
        
        
        
        
        
        drawSnake(snakeParts,context);
        placeFood();
        
        
        
        
        
    
        snakeParts.push(snakeHead);
        if(snakeParts.length>snakeLength){
            
        //console.log("Tall snake");
        snakeParts.shift();
    }
    }else{
        console.log("Game over.... ");
    }
                
}

function init(){
    
    direction="DOWN"
    snakeHead=new Point(0,0);
    getCanvsCont();
    snakeParts.push(snakeHead);
    //setInterval("getKeyBoard(event)",30);
    createFood(context);
    gameOn=setInterval("gameplay()",200)
    
    }
