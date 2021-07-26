function checkOne() {
    if (document.getElementById("user").value < 3) {
        document.getElementById("div1").innerHTML = "Username must be at least 3 characters"
        document.getElementById("div1").style = " color: red; text-align:left "
        document.getElementById("user").style.border = "2px  solid red "
            //  document.getElementById("user").focus();

    }
}

function checkTwo() {
    if (!(document.getElementById("mail").value == "/\S+@\S+\.\S+/")) {
        document.getElementById("div2").innerHTML = "Email is not valid"
        document.getElementById("div2").style = " color: red; text-align:left "
        document.getElementById("mail").style.border = "2px  solid red ";
        // document.getElementById("mail").focus();
    }
}

function checkThree() {
    if (document.getElementById("password").value < 6) {
        document.getElementById("div3").innerHTML = "Password must be at least 6 characters"
        document.getElementById("div3").style = " color: red; text-align:left "
        document.getElementById("password").style.border = "2px  solid red ";
        // document.getElementById("password").focus();
    }

}

function checkFour() {
    if (document.getElementById("password2").value < 6) {
        document.getElementById("div4").innerHTML = "Password2 is required"
        document.getElementById("div4").style = " color: red; text-align:left "
        document.getElementById("password2").style.border = "2px  solid red ";
        //  document.getElementById("password2").focus();
    }
}