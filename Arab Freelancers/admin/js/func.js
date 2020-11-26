function checkConfirmPass(){
    var pass = document.getElementById("password").value;
    var conPass = document.getElementById("confirmePass").value;

    if (pass == conPass)
    {
        document.getElementById("notConf").innerHTML= " ";
    }
    else{
        alert("not matching");
    }
}

function checkOnUser(){
    var usName = document.getElementById("username").value;
    var usPass = document.getElementById("password").value;
    

        if( usName == "mazen" && usPass == "1234" )
        {
            alert("Welcome Admin Mazen ");
        }
        else
        {
            document.getElementById("notMatching").innerHTML = " Invalid username or password. ";
        }
}