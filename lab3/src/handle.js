import {makeToast} from "./toaster.js"

const handle = document.getElementById("handle");
const placeholderToast = document.getElementById("placeholderToast");

let handleClicked = false;
let start;

export default function loadHandle() {
    document.addEventListener('mousemove', moveHandle);
    handle.addEventListener('mousedown', mouseDown);
    document.addEventListener('mouseup', mouseUp);
}

function moveHandle(e) {
    if (handleClicked) {
        let pos = Math.max(Math.min(e.pageY - start, 100), -10)
        handle.style.transform = "translateY("+pos+"px)";
        placeholderToast.style.transform = "translate(50%, "+pos+"px)";
    }
}

function mouseDown(e) {
    handleClicked = true;
    start = e.pageY;
    handle.classList.remove("animate");
    placeholderToast.classList.remove("animate");
}

function mouseUp(e) {
    if (handleClicked) {
        handleClicked = false;
        if (e.pageY - start > 80) {makeToast();}

        handle.style.transform = "translateY(0px)";
        placeholderToast.style.transform = "translate(50%, 0px)";
        
        handle.classList.add("animate");
        placeholderToast.classList.add("animate");
    }
}