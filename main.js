//variables
const form = document.querySelector("#form");
const list = document.querySelector("#list");
const newDo= document.querySelector("#newToDo");
const doneList = document.querySelector("#doneList");
let listToDo = [];
let finishedToDo=[];
let index;

const getRid = document.querySelector("#list");
const removeIt = document.querySelector("#doneList");

getRid.addEventListener("click", deleteToDo);
removeIt.addEventListener("click", removeFinished);

form.addEventListener("submit", addToList);

emptyList = document.createElement("P");
emptyList.textContent = "Currently Nothing To Do ʕ·ᴥ·ʔ";
list.appendChild(emptyList);

emptyDone = document.createElement("P");
emptyDone.textContent = "Currently Nothing Done ʕ ´•̥̥̥ ᴥ•̥̥̥`ʔ";
doneList.appendChild(emptyDone);

//functions

//adds a new to do to the list
function addToList(event){

  emptyList.remove();

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

function deleteToDo(event){
  index = listToDo.indexOf(event.target);

  if (event.target.nodeName == "LI"){
    event.target.remove();
    listToDo[index-1].remove();
  }

  else if (event.target.nodeName == "BUTTON"){
    emptyDone.remove();

    event.target.remove();
    finishedToDo.push(listToDo[index+1]);

    doneList.appendChild(listToDo[index+1]);
  }

  else{
    return;
  }
}


function removeFinished(event) {
  index = finishedToDo.indexOf(event.target);
  if (event.target.nodeName == "LI"){
    event.target.remove();
  }
}