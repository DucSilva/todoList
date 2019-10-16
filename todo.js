var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    function crossOut(){
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);

    //Start add delete button
    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);
    //End add delete button

    //Add class delete (display: none)
    function deleteListItem(){
        li.classList.add("delete")
    }
    //End add class delete
}

function addListAfterClick(){
    console.log('clicked')
    if(inputLength() > 0){ // makes sure that an empty input field doesn't create a li 
        createListElement();
    }
}

function addListAfterKeypress(event){
    if(inputLength() > 0 && event.which === 13){ // this now looks to see if you hit "enter"/"return"
        //the 13 is the enter key's keycode, this could also be display by event.keyCode
        createListElement();
    }
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);