const url = 'https://glo3102lab4.herokuapp.com/';
let id;
let fullUrl;

export const load = async function(){
    const response = await fetch(url + "users", {method:"post"});
    const jsonResponse = await response.json();
    id = jsonResponse.id
    fullUrl = url + id + "/tasks";
}

export const getTasks = async function(){
    const response = await fetch(fullUrl);
    let jsonResponse = await response.json();
    console.log(jsonResponse.tasks)

    return jsonResponse.tasks
}

export const sendTasks = async function(){
    const sendRequest = await fetch(fullUrl, {
        method:"post",
        body:JSON.stringify({name:document.getElementById("input").value}),
        headers:new Headers({"Content-Type": "application/json"})
    });
    const jsonResponse = await sendRequest.json();
    return getTasks();
}

export const deleteTask = async function(taskID){
    const deleteRequest = await fetch(fullUrl + "/" + taskID, {method:"delete"});
    return getTasks();
}

export const updateTask = async function(taskID, newName) {
    const putRequest = await fetch(fullUrl + "/" + taskID, {
        method:"put",
        body:JSON.stringify({name:newName}),
        headers:new Headers({"Content-Type": "application/json"})
    });
    return getTasks();
}
