const request = new XMLHttpRequest();
const url = 'https://glo3102lab4.herokuapp.com/';
const id = "c6ac7c1d-6eac-4455-abbf-3252f3c29163";
const fullUrl = url + id + "/tasks";
request.open("GET", fullUrl);
request.send();

request.onload = (e) => {
    // alert(request.response);
}

function getTasks(){
    let tasks = request.open("GET", fullUrl + "/tasks");
}

function sendTasks(){
    let textToSend = document.getElementById("input");


    request.open("POST", fullUrl);
    request.send(textToSend);
}

export default function load() {

}