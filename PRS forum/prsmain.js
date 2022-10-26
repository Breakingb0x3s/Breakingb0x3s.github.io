
//Navbar

function hideIconBar() {
    let iconBar = document.getElementById("iconBar");
    let navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:none;");
    navigation.classList.remove("hide");
}

function showIconBar() {
    let iconBar = document.getElementById("iconBar");
    let navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:block;");
    navigation.classList.add("hide");
}

function showComment(){
    let commentArea = document.getElementById("comment-area");
    commentArea.classList.remove("hide");
}

function showReply(){
    let replyArea = document.getElementById("reply-area");
    replyArea.classList.remove("hide");
}