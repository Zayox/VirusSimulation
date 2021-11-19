import "./chart";

let container = document.getElementById("container");
let addPersonBtn = document.getElementById("addPerson");
let addInfectedPersonBtn = document.getElementById("addInfectedPerson");
let removePersonBtn = document.getElementById("removePerson");
let tab = [];

function createElem(){
  let div = document.createElement("div");
  div.style.transitionDuration = 4 + "s";
  div.style.position = "absolute";
  div.style.height = 25 + "px";
  div.style.width = 25 + "px";
  div.style.borderRadius = 3 + "rem";
  div.style.background = "green";
  document.getElementById("container").appendChild(div);


  randomMovement(div);
}

function createElemInfected(){
  let div = document.createElement("div");
  div.style.transitionDuration = 4 + "s";
  div.style.position = "absolute";
  div.style.height = 25 + "px";
  div.style.width = 25 + "px";
  div.style.borderRadius = 3 + "rem";
  div.style.background = "red";
  document.getElementById("container").appendChild(div);


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


function collision(){

  var x = document.getElementById("container");
  let tab = [];
  let tab2 = [];

  if (x.hasChildNodes()) {
    let children = x.childNodes;

    for (let i = 0; i < children.length; i++) {
      tab.push(x.lastChild.style.top +  x.lastChild.style.left);
      console.log(tab);
    }
  }

}



addPersonBtn.addEventListener("click", function(){
  createElem();
})


addInfectedPersonBtn.addEventListener("click", function(){
  createElemInfected();
})

removePersonBtn.addEventListener("click", function(){
  container.removeChild(container.lastElementChild);
})




