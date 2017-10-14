function formAlert(allFilled, missing) {
    console.log(missing)
    var resNode = document.getElementById("formResult");
    if (allFilled) {
        resNode.innerHTML = "";
        // resNode.innerHTML = "Your message has been sent!";
    } else {
        var errorMsg = "Error: Please fill in the following fields: ";
        errorMsg = errorMsg.concat(missing.join(", "));
        resNode.innerHTML = errorMsg;
    } 
}

function addClass(className) {
    var resNode = document.getElementById("formResult");
    resNode.classList.add(className);
}


var formDiv = document.getElementById("contactForm");
if (formDiv) {
    formDiv.addEventListener("submit", function(event) {
        var inputs = formDiv.getElementsByTagName('input');
        var missing = [];
        console.log(inputs)
        for (var i = 0; i < inputs.length; i++) {
            console.log(i, inputs[i])
            if (inputs[i].value == "" && inputs[i].type != "submit") {
                missing.push(inputs[i].id);
            }
        }
        var msgRes = document.getElementById("message").value
        if (msgRes == "") {
            missing.push("message")
        }
        console.log(missing)
        if (missing.length > 0) {
            formAlert(false, missing);
            addClass("error")
            event.preventDefault();
        }
        else {
            formAlert(true, missing);
            addClass("success")
        }
    })
}