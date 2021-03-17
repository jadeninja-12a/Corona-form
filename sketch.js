var totalDeaths, newDeaths;
var totalRecovered, newRecovered;
var totalConfirmed, newConfirmed;

function setup() {
  createCanvas(1200,800);
  createSprite(600, 0, 1200, 10);
  createSprite(600, 800, 1200, 10);
  createSprite(0, 400, 10, 800);
  createSprite(1200, 400, 10, 800);
}

function draw() {
  background(255);
  update();
  textSize(72);
  fill(0);
  text("CORONA FORM", 300, 100);
  if(newConfirmed === undefined){
    totalDeaths = "loading";
  newDeaths = "loading";
  totalRecovered = "loading";
  totalConfirmed = "loading";
  newRecovered = "loading";
  newConfirmed = "loading";
  }
  textSize(40);
  text("Total Confirmed Corona Cases : " + totalConfirmed, 200, 250);
  text("Total Recovered Patients : " + totalRecovered, 200, 350);
  text("Total Number Of Deaths : " + totalDeaths, 200, 450);
  text("New Recovered Patients : " + newRecovered, 200, 650);
  text("New Confirmed Corona Cases : " + newConfirmed, 200, 550);
  text("New Deaths : " + newDeaths, 200, 750);
  // console.log(totalConfirmed);
  // console.log(newDeaths);
  // console.log(newConfirmed);
  // console.log(newRecovered);
  // console.log(totalRecovered);
  // console.log(totalDeaths);
  drawSprites();
}

async function update(){
  var storage = await fetch("https://api.covid19api.com/summary");
  var JSON = await storage.json();
  var info = await JSON.Global.TotalDeaths;
  console.log(info);
  totalDeaths = JSON.Global.TotalDeaths;
  newDeaths = JSON.Global.NewDeaths;
  totalRecovered = JSON.Global.TotalRecovered;
  totalConfirmed = JSON.Global.TotalConfirmed;
  newRecovered = JSON.Global.NewRecovered;
  newConfirmed = JSON.Global.NewConfirmed;
  
}