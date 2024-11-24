function addTask() {

    let inputData = document.getElementById("enterData");
    let inputDataValue = inputData.value.trim()

    let allTasksContainer = document.querySelector("#tasks")

    let liTag = document.createElement("li");

    liTag.innerHTML += `
    ${inputDataValue}
     <button class="edit">Edit</button>
     <button class="delete">Delete</button> `

    liTag.style.listStyleType = "none"

  
    allTasksContainer.appendChild(liTag)

    let editBtn = liTag.querySelector(".edit")
    editBtn.style.backgroundColor = "blue"

    let dlteBtn = liTag.querySelector(".delete")
    dlteBtn.style.backgroundColor = "red"

    inputData.value = "";

    dlteBtn.addEventListener("click", function () {
        DeleteTask(liTag);
    });

    editBtn.addEventListener("click", function() {
        EditTask(liTag)

    });
}



function DeleteTask(taskElement) {
    let confirmation = confirm("Are you sure you want to delete the task?");
    if (confirmation){
        taskElement.remove();
    }
}

function EditTask(item){
    let y=prompt("edit the list", item.firstChild.textContent)

    if (y !== null && y.trim()!=""){
        item.firstChild.textContent=y;
    }

}



