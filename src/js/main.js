import "./chart";

let container = document.getElementById("container");
let addPersonBtn = document.getElementById("addPerson");
let addInfectedPersonBtn = document.getElementById("addInfectedPerson");
let removePersonBtn = document.getElementById("removePerson");
export let healthyCount = 0;
var array = [];
let ax,ay;
let bx,by;
var id = 0;
var transmissionRate = 0;
let valueConvert = 0;

//Sliders

var slider = document.getElementById("myRange");
var output = document.getElementById("value");

var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("value2");

var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("value3");


output.innerHTML = slider.value;

slider.oninput = function (){
  output.innerHTML = this.value;
}


slider.addEventListener("input", function (){
  var x = slider.value*9;
  var color = 'linear-gradient(90deg, rgb(117,252,117)' + x + '%, rgb(214,214,214)' + x + '%)';
  slider.style.background = color;
})

output2.innerHTML = slider2.value;

slider2.oninput = function (){
  output2.innerHTML = this.value;
}


slider2.addEventListener("input", function (){
  var x = slider2.value*9;
  var color2 = 'linear-gradient(90deg, rgb(255,0,0)' + x + '%, rgb(214,214,214)' + x + '%)';
  slider2.style.background = color2;
})

output3.innerHTML = slider3.value;

slider3.oninput = function (){
  output3.innerHTML = this.value;
}


slider3.addEventListener("input", function (){
  var x = slider3.value;
  var color3 = 'linear-gradient(90deg, rgb(255,127,80)' + x + '%, rgb(214,214,214)' + x + '%)';
  slider3.style.background = color3;
})



function transmissionRateHandler(){
  transmissionRate = Math.floor(Math.random()*9);
}

setInterval(transmissionRateHandler, 1000);


function getTransmissionRate(){
  switch(true){
    case (slider3.value<=10):
      valueConvert = 1;
      break;
    case (slider3.value<=20):
      valueConvert = 2;
      break;
    case (slider3.value<=30):
      valueConvert = 3;
      break;
    case (slider3.value<=40):
      valueConvert = 4;
      break;
    case (slider3.value<=50):
      valueConvert = 5;
      break;
    case (slider3.value<=60):
      valueConvert = 6;
      break;
    case (slider3.value<=70):
      valueConvert = 7;
      break;
    case (slider3.value<=80):
      valueConvert = 8;
      break;
    case (slider3.value<=90):
      valueConvert = 9;
      break;
    case (slider3.value<=100):
      valueConvert = 10;
      break;
  }
}

function createElem(){
  let div = document.createElement("div");
  //div.style.transitionDuration = 4 + "s";
  div.style.position = "absolute";
  div.style.top = 0 + "px";
  div.style.left = 0 + "px";
  //div.style.transform = "translate(" + (-50) +"%," + (-50) + "%)";
  div.style.height = 25 + "px";
  div.style.width = 25 + "px";
  div.style.borderRadius = 3 + "rem";
  div.style.background = "green";
  div.style.background = "radial-gradient(circle at "+8+"px "+8+"px, green, #000";
  div.id = id;
  id++;


  container.appendChild(div);

  healthyCount++;

  array.push(div);

  randomMovement(div);
}


function createElemInfected(){
  let div = document.createElement("div");
  //div.style.transitionDuration = 4 + "s";
  div.style.position = "absolute";
  div.style.top = 0 + "px";
  div.style.left = 0 + "px";
  div.style.height = 25 + "px";
  div.style.width = 25 + "px";
  div.style.borderRadius = 3 + "rem";
  div.style.background = "red";
  document.getElementById("container").appendChild(div);
  div.style.background = "radial-gradient(circle at "+8+"px "+8+"px, red, #000";

  array.push(div);

  randomMovement(div);
}



function randomMovement(div) {

  let randomNumber = Math.floor(Math.random() * 265);
  let randomNumber2 = Math.floor(Math.random() * 465);

  const interval = setInterval(() => {
    if(parseInt(div.style.top) < randomNumber) {
      div.style.top = parseInt(div.style.top) + 1 + "px";
      collision();
    }
    if(parseInt(div.style.left) < randomNumber2){
      div.style.left = parseInt(div.style.left) + 1 + "px";
      collision();
    }

    else if(parseInt(div.style.top) > randomNumber) {
      div.style.top = parseInt(div.style.top) - 1 + "px";
      collision();
    }

    else if(parseInt(div.style.left) > randomNumber2){
      div.style.left = parseInt(div.style.left) - 1 + "px";
      collision();
    }

    else {
      clearInterval(interval);
      randomNumber = 0;
      randomNumber2 = 0;
      randomMovement(div);
    }

  },10)


  }



  function getDistance(x1, x2, y1, y2) {

    let xDist = x2 - x1;
    let yDist = y2 - y1;


    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
  }

  function collision() {

  //setTimout le tmps que tout se place
    setTimeout(() => {
      if (array.length >= 2) {
        array.map(e => {
              for (let i = 0; i < array.length; i++) {
                if(e.id !== array[i].id){
                  if (getDistance(parseInt(e.style.left), parseInt(array[i].style.left), parseInt(e.style.top), parseInt(array[i].style.top)) < 25 && (e.style.background !== array[i].style.background)) {
                    //collisionCount++;
                    console.log(valueConvert);
                    if(transmissionRate<valueConvert){
                      array[i].style.background = "radial-gradient(circle at " + 8 + "px " + 8 + "px, red, #000";
                      e.style.background = "radial-gradient(circle at " + 8 + "px " + 8 + "px, red, #000";
                      healthyCount--;
                    }
                  }
                }
              }
            }
        )
      }
    },3000)

  }



  addPersonBtn.addEventListener("click", function () {
    createElem();
  })


  addInfectedPersonBtn.addEventListener("click", function () {
    createElemInfected();
  })

  removePersonBtn.addEventListener("click", function () {
    healthyCount--;
    container.removeChild(container.lastElementChild);
    array.pop();
  })



// form

const form = document.getElementById('form');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  getTransmissionRate();

  for(let i=0; i < slider.value; i++){
    createElem();
  }

  for(let i=0; i < slider2.value; i++){
    createElemInfected();
  }

})

