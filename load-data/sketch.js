console.log('Loading...');

let table;
let temp;

const canvasWidth = 600;
const canvasHeight = 600;

// https://p5js.org/reference/#/p5/loadTable
function preload() {
  table = loadTable('future_cities_data_truncated.csv', 'csv', 'header');
}

function setup() {

  //print(table.getRowCount() + ' total rows in table');
  //print(table.getColumnCount() + ' total columns in table');
  //print('All cities:', table.getColumn('current_city'));

  // const cities = table.getColumn('current_city');
  // console.log(cities);
  // noLoop();
}

function draw() { 
  createCanvas(windowWidth, windowHeight);
console.log("windowWidth:" + windowWidth);
  background('white');
// firstTry();
getInfos();
// circle(0,40,50);


}

function getInfos(){

 let distanceX = windowWidth/7
 let distanceXFrame =  windowWidth-distanceX *2

     let distanceY = windowHeight/6
    //  console.log(city);
  for (let i =0; i< 6;i++) {  //gibt die gesamtzahl der spalte an table.getRowCount()
  
   
    // console.log(city, tempJetzt, tempFutur);
    
// console.log(city,i)

    for (let j =0; j<5;j++) { //erstellt Y
       let positionX = (distanceX * i)+ distanceX;
 let positionY = (distanceY * j)+distanceY;
 const city = table.get(i*6+j,'current_city');
 const tempJetzt = table.get(i*6+j,'Max_Temperature_of_Warmest_Month');
 const tempFutur = table.get(i*6+j,'future_Max_Temperature_of_Warmest_Month');
 fill(255, 0, 0,70);

 stroke(255, 0, 0);
 
 circle(positionX,positionY-tempFutur,tempFutur*2);
 fill(255, 0, 0);

//  noFill();
noStroke();


 circle(positionX,positionY-tempJetzt,tempJetzt*2);

 fill('red');
 textSize(12);
text(city,positionX,positionY+7);
text(tempJetzt,positionX,positionY+17);
text(tempFutur,positionX,positionY+27);



    // console.log('positionX: ' +positionX);
    // console.log('positionY: ' +positionY);



  }

   
   

   

    //drawCityPoint(city, tempJetzt, tempFutur,positionX , positionY)
  }
    

}


function drawCityPoint(city, tempJetzt, tempFutur, positionX, positionY){
  fill('red');
  circle(positionX,positionY,tempFutur);
  circle(positionX,positionY,tempJetzt);
  textSize(12);
  text(positionX,positionY,city);

  // draw circle with radius tempFutur
  // draw circle with radius tempJetzt
  // draw label on top
  
}

function firstTry(){
  fill('#fae'); 
  textSize(12);

  for (let i =0; i<table.getColumnCount();i++){  //gibt die gesamtzahl der spalte an
    print(table.getColumnCount());
   // print(table.getString(i, 0)); // 0
   fill(255, 0, 0);

    text(table.getString(i, 0), 10, 30+i*14);
   // print(table.getNum(i,15));
     temp = (table.getNum(i,15)*2+50);
     temp2 = 255-temp*0.5;
     //print(temp);


fill(temp,0,temp2);
   circle(300,30+i*14,table.getNum(i,15));
  }
}
