//variables
const form = document.querySelector("#form");
const list = document.querySelector("#list");
const newDo= document.querySelector("#newToDo");
let listToDo = [];
let index;
const getRid = document.querySelector("#list");
getRid.addEventListener("click", remove);

form.addEventListener("submit", addToList);


//functions

//adds a new to do to the list
function addToList(event){
  event.preventDefault();

  let newBtn = document.createElement("BUTTON");
  newBtn.textContent =" ";
  newBtn.className = "buttonList";
  list.appendChild(newBtn);

  const newToDo = document.createElement("li");
  newToDo.textContent = `${newDo.value}`;
  list.appendChild(newToDo);

  listToDo.push(newBtn);
  listToDo.push(newToDo);

  form.reset();
}

function remove(event){
  index = listToDo.indexOf(event.target);
  if (event.target.nodeName != "BUTTON"){
    console.log(index);
    event.target.remove();
    listToDo[index-1].remove();
  }
  event.target.textContent = "✓";
  event.target.classList.add("complete");
  listToDo[index+1].classList.add("complete");


}


// Variables

// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
//

// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//

inititialise();
