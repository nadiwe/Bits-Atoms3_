console.log('Loading...');

let table;

const canvasWidth = 600;
const canvasHeight = 600;

// https://p5js.org/reference/#/p5/loadTable
function preload() {
  table = loadTable('future_cities_data_truncated.csv', 'csv', 'header');
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');
  print('All cities:', table.getColumn('current_city'));
}

function draw() {
  background(20,30,5);
  fill('#fae');
 

  textSize(32);
text('Belgrade', width/2,height/2);
fill(0, 102, 153);
text('Belgrade', width/2,height/21 + 60);
fill(0, 102, 153, 51);
text('Belgrade', width/2,height/2+90);
fill(250,120,50);

  
  circle(width/2,height/2,2.159518671*100);

  //ellipse(10,10,5);

}
