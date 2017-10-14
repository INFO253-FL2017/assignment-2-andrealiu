function formAlert(allFilled, missing) {
    console.log(missing)
    var resNode = document.getElementById("formResult");
    if (allFilled) {
        resNode.innerHTML = "Your comment has been added!";
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

function addComment(name, msg) {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    var cmtListRes = localStorage.getItem(page)
    if (cmtListRes == null) {
        var cmtList = []
    } else {
        var cmtList = JSON.parse(cmtListRes)
    }
    cmtList.push([name, msg]);
    localStorage.setItem(page, JSON.stringify(cmtList))
    updateComments(page)
}

function updateComments(page) {
    var cmtListRes = localStorage.getItem(page)
    if (cmtListRes == null) {
        var cmtList = []
    } else {
        var cmtList = JSON.parse(cmtListRes)
    }
    var commentsDiv = document.getElementById("commentlist");
    commentsDiv.innerHTML = "";
    for (var i = 0; i < cmtList.length; i++) {
        var data = '<p id="comment"><span><strong>'+ cmtList[i][0] +': </strong></span>'+ cmtList[i][1] +'</p>'
        commentsDiv.innerHTML += data;
    }
}
var path = window.location.pathname;
var page = path.split("/").pop();
updateComments(page)
var commentDiv = document.getElementById("commentForm");
if (commentDiv) {
    commentDiv.addEventListener("submit", function(event) {
        event.preventDefault();
        var nameRes = document.getElementById("name").value;
        var missing = [];
        if (nameRes == "") {
            missing.push("name");
        }
        var msgRes = document.getElementById("message").value;
        if (msgRes == "") {
            missing.push("message");
        }
        console.log(missing)
        if (missing.length > 0) {
            formAlert(false, missing);
            addClass("error");
        }
        else {
            formAlert(true, missing);
            addClass("success");
            addComment(nameRes, msgRes)
        }
    })
}