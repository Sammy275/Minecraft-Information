function display(object) {
    if (document.getElementById("hideButt")) {
        var prevButt = document.getElementById("hideButt")
        var parent = prevButt.parentNode
        parent.removeChild(prevButt)
    }

    document.getElementById(object).style.display = "block";

    var hideButton = document.createElement("button");
    var buttonParent = document.getElementById("content");
    buttonParent.appendChild(hideButton);
    hideButton.appendChild(document.createTextNode("hide"));

    var attr = document.createAttribute("id")
    attr.value = "hideButt"
    hideButton.setAttributeNode(attr)

    var attr2 = document.createAttribute("onclick")
    attr2.value = "hide()"
    hideButton.setAttributeNode(attr2)
}

function hide() {
    var objects = ['zombie', 'creeper', 'skeleton'];
    for(var i = 0; i < objects.length; i++)
    document.getElementById(objects[i]).style.display = "none";

    document.getElementById("hideButt").parentNode.removeChild(hideButt)
}

function newPic(name, id) {
    document.getElementById(id).src = `images/${name}.png`
}

function oldPic(name, id) {
    document.getElementById(id).src = `images/${name}.png`
}


function validateForm() {
    var name = document.getElementById("nameBox")
    var age = document.getElementById("age")

    name.style.border = "2px solid white"
    age.style.border = "2px solid white"

    var flag = check(name, age)

    if(flag == false){
        alert("The name should be 3 letters long and age should not be empty")
        return false
    }

    var confirmCheck = confirm("Are you sure?")
    if (confirmCheck == false) {
        name.value = ""
        age.value = ""
        return false
    }
}

function check(name, age) {
    if (name.value.length <= 3){
        name.focus()
        name.style.border = "2px solid red"
        return false
    }
    if (age.value == "") {
        age.focus()
        age.style.border = "2px solid red"
        return false;
    }
}