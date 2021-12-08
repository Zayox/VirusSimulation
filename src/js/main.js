import "./chart";

let container = document.getElementById("container");
let addPersonBtn = document.getElementById("addPerson");
let addInfectedPersonBtn = document.getElementById("addInfectedPerson");
let removePersonBtn = document.getElementById("removePerson");
export let healthyCount = 0;
let infectedCount = 0;
var array = [];
let ax,ay;
let bx,by;


function createElem(){
  let div = document.createElement("div");
  //div.style.transitionDuration = 4 + "s";
  div.style.position = "absolute";
  //div.style.top = 50 + "%";
  //div.style.left = 50 + "%";
  //div.style.transform = "translate(" + (-50) +"%," + (-50) + "%)";
  div.style.height = 25 + "px";
  div.style.width = 25 + "px";
  div.style.borderRadius = 3 + "rem";
  div.style.background = "green";
  div.style.background = "radial-gradient(circle at "+8+"px "+8+"px, green, #000)";

  document.getElementById("container").appendChild(div);

  healthyCount++;

  array.push(div);

  randomMovement(div);
}


function createElemInfected(){
  let div = document.createElement("div");
  //div.style.transitionDuration = 4 + "s";
  div.style.position = "absolute";
  div.style.height = 25 + "px";
  div.style.width = 25 + "px";
  div.style.borderRadius = 3 + "rem";
  div.style.background = "red";
  document.getElementById("container").appendChild(div);
  div.style.background = "radial-gradient(circle at "+8+"px "+8+"px, red, #000)";


  array.push(div);

  randomMovement(div);
}


function randomMovement(div){

  setInterval(function(){
    let randomNumber = Math.random()*270;
    let randomNumber2 = Math.random()*500;

    collision();

    div.style.top = randomNumber + "px";
    div.style.left = randomNumber2 + "px";
  },1500)


}


function getDistance(x1,x2,y1,y2){

        let xDist = x2 - x1;
        let yDist = y2 - y1;

        console.log(x1 + " " + x2 + " " + y1 + " " + y2);

        return Math.sqrt(Math.pow(xDist,2) + Math.pow(yDist,2));
}

function collision(){


  if (array.length >= 2){

    //console.log(parseInt(array[0].style.left) + " " + parseInt(array[1].style.left)+ " " + parseInt(array[0].style.top)+ " " + parseInt(array[1].style.left));

    setTimeout(() => {
      if (getDistance(parseInt(array[0].style.left), parseInt(array[1].style.left), parseInt(array[0].style.top), parseInt(array[1].style.left)) < 50) {
        array[0].style.background = "radial-gradient(circle at "+8+"px "+8+"px, red, #000)";
        array[1].style.background = "radial-gradient(circle at "+8+"px "+8+"px, red, #000)";
      }
    },1000)

  }
}

/*
  let xDist = x2 - x2;
  let yDist = y2 - y1;

  return Math.sqrt(Math.pow(xDistance,2) + Math.pow(yDistance,2));


  if (getDistance(circle1.x, circle1.y, circle2.x, circle2.y)< circle1.radius + circle2.radius){
    circle.color = 'red';
    }
    else{
      circle.color = 'black';
      }
*/


addPersonBtn.addEventListener("click", function(){
  createElem();
})


addInfectedPersonBtn.addEventListener("click", function(){
  createElemInfected();
})

removePersonBtn.addEventListener("click", function(){
  healthyCount--;
  container.removeChild(container.lastElementChild);
  array.pop();
})




