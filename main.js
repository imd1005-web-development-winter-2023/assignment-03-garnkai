//variables
const form = document.querySelector("#form");
const list = document.querySelector("#list");
const idkWhat = document.querySelector("#newToDo");

form.addEventListener("submit", addToList);

//functions

//adds a new to do to the list
function addToList(event){
  event.preventDefault();

  const newToDo = document.createElement("li");
  newToDo.textContent = `${idkWhat.value}`;
  list.appendChild(newToDo);

  form.reset();
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
