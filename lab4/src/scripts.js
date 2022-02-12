const url = 'https://glo3102lab4.herokuapp.com/';
const id = "c38f5712-c21a-47a7-8669-e6ebd7471ba4";
const fullUrl = url + id + "/tasks";

export const sendTasks = async function(){
    const sendRequest = await fetch(fullUrl, {
        method:"post",
        body:JSON.stringify({name:document.getElementById("input").value}),
        headers:new Headers({"Content-Type": "application/json"})
    });
    const jsonResponse = await sendRequest.json();
    getTasks();
}

export const load = async function(){
    const response = await fetch(fullUrl);
    const jsonResponse = await response.json();
}

export const getTasks = async function(){
    const response = await fetch(fullUrl);
    const jsonResponse = await response.json();
    const fuckYouColin = document.getElementById("tasksPlate");
    fuckYouColin.innerHTML = "";

    for(let i=0; i < jsonResponse.tasks.length ; i++){
        let task = jsonResponse.tasks[i];

        let divTask = document.createElement("div");
        let text = document.createElement("p");
        let newInput = document.createElement("input");
        let buttonBox = document.createElement("div")
        let buttonDelete = document.createElement("button");
        let buttonEdit = document.createElement("button");

        newInput.className = "newInput"
        divTask.className = "divTask";

        buttonBox.className = "buttonBox";
        buttonDelete.className = "button";
        buttonEdit.className = "button";

        text.innerHTML = task.name;
        buttonDelete.innerHTML = "DELETE";
        buttonEdit.innerHTML = "EDIT";

        buttonDelete.onclick = function(){deleteTask(task.id)};
        buttonEdit.onclick = function(){
            newInput.placeholder = task.name;
            newInput.onkeydown = function(){clickPress(event, task.id, newInput.value)};
            text.innerHTML = "";
            divTask.appendChild(newInput);
        }

        buttonBox.appendChild(buttonEdit);
        buttonBox.appendChild(buttonDelete);

        divTask.appendChild(text);
        divTask.appendChild(buttonBox);

        fuckYouColin.appendChild(divTask);
    }
}

const deleteTask = async function(taskID){
    const deleteRequest = await fetch(fullUrl + "/" + taskID, {method:"delete"});
    getTasks();
}

const clickPress = async function(event, taskID, test) {
    if (event.keyCode == 13) {
        const putRequest = await fetch(fullUrl + "/" + taskID, {
            method:"put",
            body:JSON.stringify({name:test}),
            headers:new Headers({"Content-Type": "application/json"})
        });
        getTasks();
    }
}