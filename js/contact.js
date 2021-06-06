function validation(){
    var first = document.getElementById("first").value;

    var last = document.getElementById("last").value;

    var comment_box = document.getElementById("comment_box").value;


    if(first == ""){
        document.getElementById("Name").innerHTML = " ** User name is required";
        return false;
    }
    if((first.length <= 2) || (first.length > 20)){
        document.getElementById("Name").innerHTML =" ** Your name length must be between 2 to 20";
        return false;
    }
    if(!isNaN(first)){
        document.getElementById("Name").innerHTML =" ** Only characters are allowed";
        return false;
    }


    if(last == ""){
        document.getElementById("email").innerHTML = "Valid e mail address is required";
        return false;
    }
    if(last.indexOf('@') <= 0){
        document.getElementById("email").innerHTML =" ** @ Invalid Position";
        return false;
    }
    if((last.charAt(last.length-4)!='.') && (last.charAt(last.length-3)!='.')){
        document.getElementById("email").innerHTML =" ** .Invalid Position";
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
