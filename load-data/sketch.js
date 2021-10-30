console.log('Loading...');

let table;
let temp;


// https://p5js.org/reference/#/p5/loadTable
function preload() {
  table = loadTable('future_cities_data_truncated.csv', 'csv', 'header');
}

function setup() {
  // print(table.getRowCount() + ' total rows in table');
  //print(table.getColumnCount() + ' total columns in table');
  print('All cities:', table.getColumn('current_city'));

  // const cities = table.getColumn('current_city');
  // console.log(cities);
  // noLoop();
}

function draw() { 
  createCanvas(windowWidth, windowHeight);
  background('white');

 let distanceX = windowWidth/7
 let distanceY = windowHeight/6

  for (let i =0; i< 6;i++) {  //erstellt 1ste  spalte/column [0]
    for (let j =0; j<5;j++) {  //erstellt 5 zeilen/rows [0,1,2,3,4]
      let positionX = (distanceX * i)+ distanceX;
      let positionY = (distanceY * j)+ distanceY;
      const city = table.get(i*5+j,'current_city'); // i*5+j !!!!!!!
      const tempJetzt = table.get(i*5+j,'Max_Temperature_of_Warmest_Month');
      const tempFutur = table.get(i*5+j,'future_Max_Temperature_of_Warmest_Month');

     drawCityPoint(city, tempJetzt, tempFutur,positionX , positionY);
   }
   
  }

}



function drawCityPoint(city, tempJetzt, tempFutur, positionX, positionY){

  fill(255, 0, 0,70);
  stroke(255, 0, 0); 
  circle(positionX,positionY-tempFutur,tempFutur*2);
  fill('red');
  noStroke();
  circle(positionX,positionY-tempJetzt,tempJetzt*2);

  fill('red');
  textSize(12);
  text(city,positionX,positionY+7);
  text(tempJetzt,positionX,positionY+17);
  text(tempFutur,positionX,positionY+27);
}


