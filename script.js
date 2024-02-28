//Media Queries
var AddItem = document.querySelector("#AddItem");
var form = document.querySelector(form);
var todoList = document.querySelector("#todo");
var message = document.getElementById("#message");

var close = document.querySelector(".closingBtn");


AddItem.addEventListener("click", function(event){
    event.preventDefault();
    let newItemValue = document.getElementById('insert').value;
    if (newItemValue == null || newItemValue.length <3 ){
        console.log("null-- or small");
        alert("Please provide an item at least 3 characters long.")
        return;
    }
   
    console.log(message.textContent);
   // message.textContent("v");

    if(todoList.children.length>7){
        alert("The limit of list items is 8. Please remove some items to create a new one.")
        return;
    } else {
        let newItem = document.createElement("div");
        newItem.textContent = newItemValue;
        newItem.setAttribute("class", "listItem");
        newItem.setAttribute("id", "active");
        newItem.addEventListener("click", completeItem);

        let closingBtn = document.createElement("button")
        closingBtn.textContent = "x"
        closingBtn.setAttribute("class", "closingBtn");
        closingBtn.onclick = closing;
        newItem.appendChild(closingBtn);
        
        
        todoList.prepend(newItem);

    }


});

function closing(){
    console.log("closing");
    if (confirm("Are you SURE you want to DELETE this item?")) {
        console.log(this.parentNode);
        this.parentNode.remove();
    } else {
        return;
    }
}



function completeItem(){
    console.log("complete item");
    console.log(this.id);
    if(this.id == "active"){
        this.setAttribute("id", "done");
        this.children[0].setAttribute("style", "display:none;");
    } else {
        this.setAttribute("id", "active");
        this.children[0].setAttribute("style", "display:inline;");
    }
    
}