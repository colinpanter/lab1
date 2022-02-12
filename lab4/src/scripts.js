const request = new XMLHttpRequest();
const url = 'https://glo3102lab4.herokuapp.com/';
const id = "c6ac7c1d-6eac-4455-abbf-3252f3c29163";
const fullUrl = url + id;
request.open("GET", fullUrl + "/tasks");
request.send();

request.onload = (e) => {
    alert(request.response);
}

function getTasks(){
    let tasks = request.open("GET", fullUrl + "/tasks");
}

export default function load() {

}