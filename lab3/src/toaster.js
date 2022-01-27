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
    let text = document.createElement("p");
    
    if(type === "Warning"){
        toast.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/5/53/Eo_circle_red_letter-x.svg")'
    } else if(type === "Success"){
        toast.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/3/3b/Eo_circle_green_checkmark.svg")'
    } else if(type === "Info"){
        toast.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/3/37/Eo_circle_blue_info.svg")'
    }

    toast.className = "toast";
    text.innerHTML = message;
    text.className = "unselectable"

    toast.appendChild(text);

    toast.onclick = function(){toast.remove();};

    document.getElementById("plate").appendChild(toast);
}