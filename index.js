let enterButton = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.getElementById("items");
let item = document.getElementsByTagName("li");

function createListElement() {
    //make list
	let li = document.createElement("li"); //create element 
	li.appendChild(document.createTextNode(input.value)); //append child to add last child of input, and text node for create text type
	ul.appendChild(li); 
    input.value = "";
    
    //make Xbutton
    let button= document.createElement("button");
	button.appendChild(document.createTextNode("X"));
    li.appendChild(button);
    
    //delete
	button.addEventListener("click", deleteList);
	function deleteList(){
		li.classList.add("delete")
	}

    //ubah warna done
    li.addEventListener("click",crossOut);
    function crossOut() {
	    li.classList.toggle("done");
	}
}

function listLength(){
	return item.length;
}

function inputLength(){
	return input.value.length;
} 

enterButton.addEventListener("click",clicked);
function clicked(){
	if (inputLength() > 0) { 
		createListElement();
	}
}

input.addEventListener("keypress", entered);
function entered() {
	if (inputLength() > 0 && event.which ===13) {
		createListElement();
	} 
}
