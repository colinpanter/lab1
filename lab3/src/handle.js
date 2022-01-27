const toaster = document.getElementById("controlPanel");
let handle = document.getElementById("handle");

let handleClicked = false;
let offset = 0;
let toasterTop = 0;

export default function loadHandle() {
    toasterTop = 0;

    document.addEventListener('mousemove', moveHandle);
    handle.addEventListener('mousedown', mouseDown);
    document.addEventListener('mouseup', mouseUp);
}

function moveHandle(e) {
    if (handleClicked) {
        let pos = Math.max(Math.min(e.pageY - offset, 170), 60)
        handle.style.top = pos + 'px';
    }
}

function mouseDown(e) {
    handleClicked = true;
    offset = e.pageY - handle.offsetTop + e.offsetY;
}

function mouseUp(e) {
    handleClicked = false;
}