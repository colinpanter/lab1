const url = 'https://glo3102lab4.herokuapp.com/';
let id;
let fullUrl;

export const load = async function(){
    const response = await fetch(url + "users", {method:"post"});
    const jsonResponse = await response.json();
    id = jsonResponse.id
    fullUrl = url + id + "/tasks";
    getTasks();
}

export const sendTasks = async function(){
    const sendRequest = await fetch(fullUrl, {
        method:"post",
        body:JSON.stringify({name:document.getElementById("input").value}),
        headers:new Headers({"Content-Type": "application/json"})
    });
    const jsonResponse = await sendRequest.json();
    getTasks();
}

export const getTasks = async function(){
    const response = await fetch(fullUrl);
    const jsonResponse = await response.json();

    const page = document.getElementById("page");
    const ctrlPanel = document.getElementById("controlPanel");

    page.innerHTML = "";
    page.appendChild(ctrlPanel);

    for(let i=0; i < jsonResponse.tasks.length ; i++){
        const task = jsonResponse.tasks[i];

        const divTask = document.createElement("div");
        divTask.className = "divTask";
        
        const text = document.createElement("textarea");
        text.className = "text";
        text.value = task.name;
        text.rows = 3;

        const buttonBox = document.createElement("div")
        const buttonDelete = document.createElement("button");
        const buttonEdit = document.createElement("button");

        buttonBox.className = "buttonBox";
        buttonDelete.className = "button";
        buttonEdit.className = "button";
        buttonDelete.innerHTML = "DELETE";
        buttonEdit.innerHTML = "UPDATE";

        buttonDelete.onclick = function(){deleteTask(task.id)};
        buttonEdit.onclick = function(){updateTask(task.id, text.value)}

        buttonBox.appendChild(buttonEdit);
        buttonBox.appendChild(buttonDelete);

        divTask.appendChild(text);
        divTask.appendChild(buttonBox);

        page.appendChild(divTask);
    }
}

const deleteTask = async function(taskID){
    const deleteRequest = await fetch(fullUrl + "/" + taskID, {method:"delete"});
    getTasks();
}

const updateTask = async function(taskID, newName) {
    const putRequest = await fetch(fullUrl + "/" + taskID, {
        method:"put",
        body:JSON.stringify({name:newName}),
        headers:new Headers({"Content-Type": "application/json"})
    });
    getTasks();
}
