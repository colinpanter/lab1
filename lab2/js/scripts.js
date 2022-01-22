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
                "Navy",
                "Gray",
                "Orange",
                "Maroon",
                "Aquamarine",
                "Coral",
                "Fuchsia",
                "Wheat",
                "Lime",
                "Crimson",
                "Khaki",
                "Hot pink",
                "Magenta",
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

            var color = element.toLowerCase().replace(' ', '')

            var d = document.createElement('div');
            d.className = "element hoverable";
            d.onclick = function() {
                document.getElementById("dropinput").focus()
                document.getElementById("dropinput").value = element;
                search();
            };

            var p = document.createElement('span');
            p.innerHTML = element;

            var c = document.createElement('div');
            c.className = "color"
            c.style.backgroundColor = color
            
            d.appendChild(c)
            d.appendChild(p)

            document.getElementById("elements").appendChild(d)

            if (element.toLowerCase() === inputStr) {
                document.body.style.backgroundColor = color
            }
        }
    });

    if (!foundMatches) {
        var p = document.createElement('p');
        p.className = "element";
        p.style.color = "gray";
        p.innerHTML = "<i>No results found</i>";

        document.getElementById("elements").appendChild(p)
    }
}