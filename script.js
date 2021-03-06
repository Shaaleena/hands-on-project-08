//Alina Sharafutdinova, 06.05.2020

"use strict"; //setting document contents in strict mode
var list=[];

function generateList(){ //function that creating the list of items
  var listItems = document.getElementsByTagName("li");
  for (var i=listItems.length-1;i>=0;i--){
    document.getElementsByTagName("ol")[0].removeChild(listItems[i]);
  }
  for(var i=0;i<list.length;i++){ //loops through existing li elements and removes them all
    var newItem="<span class='first'>first</span>"+"<span class='last'>last</span>"+list[i];
    var newListItem = document.createElement("li"); //creates new li element for each array element
    newListItem.innerHTML=newItem;
    document.getElementsByTagName("ol")[0].appendChild(newListItem);
    var firstButtons=document.querySelectorAll(".first");
    var lastFirstButton=firstButtons[firstButtons.length-1];
    var lastButtons=document.querySelectorAll(".last");
    var lastLastButton=lastButtons[lastButtons.length-1];
    if(lastFirstButton.addEventListener){ //adds event listenere to the "first" and "last" buttons
      lastFirstButton.addEventListener("click", moveToTop,false);
      lastLastButton.addEventListener("click", moveToBottom, false);
  } else if(lastFirstButton.attachEvent){
    lastFirstButton.attachEvent("onclick", moveToTop);
    lastLastButton.attachEvent("onclick", moveToBottom);
  }
}
}

function addItem(){ //adds the value to the end of the list array using push method
  var newItem=document.getElementById("newItem");
  list.push(newItem.value);
  newItem.focus();
  newItem.value="";
  generateList();
}

function moveToTop(evt) { //function that moves item on the top when First button clicked
  if(evt===undefined){
    evt=window.event;
  }
  var callerElement=evt.target||evt.srcElement;
  var listItems=document.getElementsByTagName("li");
  var parentItem=callerElement.parentNode;
  for(var i=0;i<list.length;i++){
    if(parentItem.innerHTML.search(list[i])!== -1){
      var itemToMove=list.splice(i,1);
      list.unshift(itemToMove);
    }
  }
  generateList();
}

function moveToBottom(evt){ //function that moves item at the bottom when Last button clicked
  if(evt === undefined){
      evt=window.event;
  } var callerElement=evt.target||evt.srcElement;
  var listItems=document.getElementsByTagName("li");
  var parentItem=callerElement.parentNode;
  for(var i=0;i<list.length;i++){
    if(parentItem.innerHTML.search(list[i])!== -1){
      var itemToMove=list.splice(i,1);
      list.push(itemToMove);
    }
  }
  generateList();
}

function createEventListener(){ //event listener for adding item button
  var addButton=document.getElementById("button");
  if(addButton.addEventListener){
    addButton.addEventListener("click", addItem, false);
  } else if(addButton.attachEvent){
    addButton.attachEvent("onclick", addItem);
  }
}
 if (window.addEventListener){
  window.addEventListener("load", createEventListener, false);
} else if(window.attachEvent){
  window.attachEvent("onload", createEventListener);
}
