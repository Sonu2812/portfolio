function validation(){
    var first = document.getElementById("first").value;

    var last = document.getElementById("last").value;

    var comment_box = document.getElementById("comment_box").value;

    if(first == ""){
        document.getElementById("Name").innerHTML = "User name is required";
        return false;
    }

    if(last == ""){
        document.getElementById("email").innerHTML = "Valid e mail address is required";
        return false;
    }

    if(comment_box == ""){
        document.getElementById("comment").innerHTML = "Please Enter Some text's";
        return false;
    }

    else{
        document.write("<h1> Congulation Registration your is complete </h1>");
    }
}
