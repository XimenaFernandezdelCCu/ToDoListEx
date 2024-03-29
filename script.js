    //Media Queries
    var AddItem = document.querySelector("#AddItem");
    var form = document.querySelector(form);
    var todoList = document.querySelector("#todo");
    var message = document.getElementById('message');
    var close = document.querySelector(".closingBtn");

    // Load saved items from localStorage--
    document.addEventListener('DOMContentLoaded', function () {
        var savedItems = localStorage.getItem('todoItems');
        if (savedItems) {
            todoList.innerHTML = savedItems;
            applyEventListeners();
        }
    });

    AddItem.addEventListener("click", function(event){
        event.preventDefault();
        let newItemValue = document.getElementById('insert').value;
        if (newItemValue == null || newItemValue.length <3 ){
            alert("Please provide an item at least 3 characters long.")
            return;
        }
    
        message.textContent="";

        if(todoList.children.length>8){
            alert("The limit of list items is 8. Please remove some items to create a new one.")
            return;
        } else {
            let newItem = document.createElement("div");
            newItem.textContent = newItemValue;
            newItem.setAttribute("class", "listItem");
            newItem.setAttribute("id", "active");

            //newItem.addEventListener("click", completeItem);

            let closingBtn = document.createElement("button")
            closingBtn.textContent = "x"
            closingBtn.setAttribute("class", "closingBtn");
            closingBtn.onclick = closing;
            newItem.appendChild(closingBtn);
            
            
            todoList.prepend(newItem);

            //---
            saveItems();
            applyEventListeners();
        }


    });

    function closing(event){
        event.stopPropagation();
        if (confirm("Are you SURE you want to DELETE this item?")) {
            this.parentNode.remove();
            if(todoList.children.length==1){
                message.textContent="Your list items will be displayed here:";
            }
            saveItems();
        } else {
            return;
        }
    }

    function completeItem(){
        console.log("complete item");
        if(this.id == "active"){
            this.setAttribute("id", "done");
            this.children[0].setAttribute("style", "display:none;");
        } else {
            this.setAttribute("id", "active");
            this.children[0].setAttribute("style", "display:inline;");
        }
        saveItems();
        
    }

    function saveItems() {
        localStorage.setItem('todoItems', todoList.innerHTML);
    }

    function applyEventListeners() {
        var items = document.querySelectorAll(".listItem");
        items.forEach(function (item) {
            item.addEventListener("click", completeItem);
            var closingBtn = item.querySelector(".closingBtn");
            closingBtn.onclick = closing;
        });
    }