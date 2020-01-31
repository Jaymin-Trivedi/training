var clck = 0;
var radioClicked = 0;
var otpVar = 0;
function checkValidation() {
    var uname = document.getElementById("fpUname");
    var printEmail = document.getElementById("getEmail");
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var firstDiv = document.getElementById("enterEmailDiv");
    var secondDiv = document.getElementById("cnfrmYouDiv");
    var thirdDiv = document.getElementById("newPwdDiv");
    var chkboxEmail = document.getElementById("altEmail");
    var pwd = document.getElementById("pwd");
    var cnfrmPwd = document.getElementById("cnfrmPwd");

    if (uname.value == "") {
        alert("Please enter email");
    }
    else {
        printEmail.innerHTML = uname.value + "@radiff.com";
        if (clck == 0) {
            two.classList.add("colStyle");
            one.classList.remove("colStyle");
            clck = clck + 1;
            firstDiv.hidden = true;
            secondDiv.hidden = false;
            thirdDiv.hidden = true;
        }
        else if (clck == 1) {
            if (radioClicked == 1) {
                three.classList.add("colStyle");
                two.classList.remove("colStyle");
                clck = clck + 1;
                firstDiv.hidden = true;
                secondDiv.hidden = true;
                thirdDiv.hidden = false;
            }
            else {
                alert("select Email address to get OTP");
            }
        }
        else if (clck == 2) {
            if (otpVar == 1) {



                if (pwd.value != cnfrmPwd.value) {

                    cnfrmPwd.style.borderColor = "red";
                    alert("Password missmatch");

                }
                else {
                    one.classList.add("colStyle");
                    three.classList.remove("colStyle");
                    clck = 0;
                    firstDiv.hidden = false;
                    secondDiv.hidden = true;
                    thirdDiv.hidden = true;
                    cnfrmPwd.style.borderColor = "initial";
                }
            }
            else {
                alert("first varify your otp");

            }

        }
    }

}

function varifyOtp() {
    var otp = document.getElementById("otp");
    var otpSpace = document.getElementById("otpSpace");
    var newPwd = document.getElementById("newPwd");
    if (otp.value == 123) {
        otpVar = 1;
        alert("otp varified");
        otpSpace.hidden = true;
        newPwd.hidden = false;
    }
    else {
        alert("Incorrect OTP");
    }
}

function radioClick() {
    radioClicked = 1;
}


function pwdValidation() {
    var pwd = document.getElementById("pwd");
    var a = 0;
    var b = 0;
    for (i = 0; i < pwd.value.length; i++) {
        if (pwd.value.charAt(i) >= 'a' && pwd.value.charAt(i) <= 'z') {
            a = 1;

        }
        if (pwd.value.charAt(i) >= 'A' && pwd.value.charAt(i) <= 'Z') {
            b = 1;
        }
    }
    if (pwd.value.length < 6 || pwd.value.length >= 12) {
        a = 0;
    }
    if (a == 0 || b == 0) {
        alert("Must contain uppercase and lowercase and size must be between 6-12");
    }

}
