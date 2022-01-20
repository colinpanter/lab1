var elements = "Lorem ipsum dolor sit amet consectetur adipiscing elit Proin quis nibh arcu Donec rhoncus a".split(" ")

function search() {
    var foundMatches = false;
    document.getElementById("elements").innerHTML = ""
    elements.forEach(element => {
        if (element.includes(document.getElementById("dropinput").value)) {
            foundMatches = true;
            document.getElementById("elements").innerHTML += "<p class=\"element\" onclick=\"choose('"+element+"')\">"+element+"</p>";
        }
    });
    if (!foundMatches) {
        document.getElementById("elements").innerHTML += "<p class=\"noresults\"><i>No results found</i></p>";
    }
}

function choose(s) {
    document.getElementById("dropinput").value = s;
    search();
}

function reset() {
    document.getElementById("dropinput").value = "";
    search();
}