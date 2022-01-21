var elements = ["White",
                "Yellow",
                "Blue",
                "Red",
                "Green",
                "Black",
                "Brown",
                "Azure",
                "Ivory",
                "Teal",
                "Silver",
                "Purple",
                "Navy blue",
                "Pea green",
                "Gray",
                "Orange",
                "Maroon",
                "Charcoal",
                "Aquamarine",
                "Coral",
                "Fuchsia",
                "Wheat",
                "Lime",
                "Crimson",
                "Khaki",
                "Hot pink",
                "Magenta",
                "Olden",
                "Plum",
                "Olive",
                "Cyan"]

function search() {
    var foundMatches = false;
    var inputStr = document.getElementById("dropinput").value.toLowerCase()
    document.getElementById("elements").innerHTML = ""

    elements.forEach(function(element) {
        if (element.toLowerCase().includes(inputStr)) {
            foundMatches = true;

            var p = document.createElement('p');
            p.className = "element";
            p.onclick = function() {choose(element)};
            p.innerHTML = element;

            document.getElementById("elements").appendChild(p)
        }
    });

    if (!foundMatches) {
        var p = document.createElement('p');
        p.className = "noresults";
        p.innerHTML = "<i>No results found</i>";

        document.getElementById("elements").appendChild(p)
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