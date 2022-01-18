var elements = "Lorem ipsum dolor sit amet consectetur adipiscing elit Proin quis nibh arcu Donec rhoncus a".split(" ")

function search() {
    document.getElementById("elements").innerHTML = ""
    elements.forEach(element => {
        if (element.includes(document.getElementById("dropinput").value)) {
            document.getElementById("elements").innerHTML += "<p onclick=\"choose('"+element+"')\">"+element+"</p>";
        }
    });
}

function choose(s) {
    document.getElementById("dropinput").value = s;
    search();
}

function reset() {
    document.getElementById("dropinput").value = "";
    search();
}