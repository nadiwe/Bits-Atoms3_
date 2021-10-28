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
  createCanvas(canvasWidth, canvasHeight);

  //print(table.getRowCount() + ' total rows in table');
  //print(table.getColumnCount() + ' total columns in table');
  //print('All cities:', table.getColumn('current_city'));

  // const cities = table.getColumn('current_city');
  // console.log(cities);
  // noLoop();
}

function draw() { 
  background(20,30,5);
// firstTry();
getInfos();
// circle(0,40,50);


}

function getInfos(){

 const distanceX = windowWidth/7
     const distanceY = windowHeight/6

  for (let i =0; i<table.getRowCount();i++) {  //gibt die gesamtzahl der spalte an
    const city = table.get(i,'current_city');
    const tempJetzt = table.get(i,'Max_Temperature_of_Warmest_Month');
    const tempFutur = table.get(i,'future_Max_Temperature_of_Warmest_Month');
   
  //   //console.log(city, tempJetzt, tempFutur);


    for (let j =0; j<5;j++) {
       const positionX = (distanceX * i) + 150;
 const positionY = (distanceY * j)+ 150;
 circle(positionX,positionY,20);

    console.log('positionX: ' +positionX);
    console.log('positionY: ' +positionY);



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
