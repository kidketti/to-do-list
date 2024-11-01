const inputList = document.getElementById("list_input");
const itemList = document.getElementById("list_item");

function addList(){
    if(inputList.value === ''){
        ;
    }
    else{    
        var li = document.createElement("li");
        li.innerHTML = inputList.value;
        itemList.appendChild(li);    
        var remove = document.createElement("remove");
        remove.innerHTML = "\u00d7";
        li.appendChild(remove);
        var edit = document.createElement("edit");
        edit.innerHTML = "&#9998";
        li.appendChild(edit);
        /*var cal = document.createElement("cal");
        cal.innerHTML = "&#128197";
        li.appendChild(cal);*/
    }
    
    inputList.value = "";
}

itemList.addEventListener("click", function(ev){
    if(ev.target.tagName === "LI"){
        ev.target.classList.toggle("checked");
    }
    else if(ev.target.tagName === "REMOVE"){
        ev.target.parentElement.remove();
    }
    else if (ev.target.tagName === "EDIT") {
        var parentList = ev.target.parentElement;
        var childText = parentList.firstChild.textContent;
        var newText = prompt("Edit your task:", childText); 
        if (newText) {
            parentList.firstChild.textContent = newText;
        }
    }
    /*else if(ev.target.tagName === "CAL"){
        ev.target.parentElement.remove();
    }*/
}, false);