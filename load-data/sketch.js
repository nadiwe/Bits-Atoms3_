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
}

function draw() {
  background(20,30,5);
  fill('#fae');
 
   
  textSize(12);


  for (let i =0; i<table.getColumnCount();i++){  //gibt die gesamtzahl der spalte an
    //print(table.getString(i));
   // print(table.getString(i, 0)); // 0
   fill(255, 0, 0);

    text(table.getString(i, 0), 10, 30+i*14);
   // print(table.getNum(i,15));
     temp = (table.getNum(i,15)*2+50);
     temp2 = 255-temp*0.5;
     print(temp);


fill(temp,0,temp2);
   circle(300,30+i*14,table.getNum(i,15));
  }



  

  //ellipse(10,10,5);

}
