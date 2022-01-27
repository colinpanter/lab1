const inputField = document.getElementById("input");
const buttons = document.getElementById("buttonPanel")

let currentType = "";

export default function loadToaster() {
    chooseType("Warning");

    var children = buttons.children;
    for (let i = 0; i < children.length; i++) {
        let element = children[i];
        element.addEventListener("click", function() {chooseType(element.value)});
    };
}

function chooseType(type) {
    var children = buttons.children;
    for (let i = 0; i < children.length; i++) {
        let element = children[i];
        element.className = (element.value===type) ? "unselectable active button" : "unselectable button";
    };

    currentType = type;
}

export function makeToast() {
    const type = currentType;
    const message = inputField.value;
    
    let toast = document.createElement("div");
    let title = document.createElement("h1");
    let text = document.createElement("p");
    let img = document.createElement("img");
    
    if(type === "Warning"){
        img.src = ""
    } else if(type === "Success"){
        img.src = ""
    } else if(type === "Info"){
        img.src = ""
    }

    toast.className = "toast";
    title.innerHTML = type;
    title.className = "unselectable"
    text.innerHTML = message;
    text.className = "unselectable"

    // toast.appendChild(img);
    toast.appendChild(title);
    toast.appendChild(text);

    toast.onclick = function(){toast.remove();};

    document.getElementById("plate").appendChild(toast);
}