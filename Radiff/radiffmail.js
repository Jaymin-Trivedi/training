function checkValidation()
{
    var userName=document.getElementById("uName");
    var password=document.getElementById("pwd");
    var confirmPwd=document.getElementById("cnfrmPwd");
    
    if(userName.value=="")
    {
        
        
        userName.style.borderColor="red";
        userName.innerHTML="abcd";
        alert("please Enter Username");

    }
    else
    {
        userName.style.borderColor="initial";
    }
   
    if(password.value.length<6)
    {
        
        password.style.borderColor="red";
        alert("Invalid Password");

    }
    else
    {
        password.style.borderColor="initial";
    }
    if(password.value!=confirmPwd.value)
    {
        
        confirmPwd.style.borderColor="red";
        alert("Password missmatch");

    }
    else
    {
        confirmPwd.style.borderColor="initial";
    }



}

function noEmail()
{
    var emailRow=document.getElementById("altEmailRow");
    var secQue=document.getElementById("securityQueRow");
    var secAns=document.getElementById("securityAnsRow");
    if(emailRow.hidden==true)
    {
        emailRow.hidden=false;
        secQue.hidden=true;
        secAns.hidden=true;
    }
    else
    {
        emailRow.hidden=true;
        secQue.hidden=false;
        secAns.hidden=false;
    }
    
}
function selectCity()
{
    var country=document.getElementById("country");
    var city=document.getElementById("city");
    var cityarr=[1,2,3];
    // var cityList=new Array();
    // cityList={"Ahmedabad","Mumbai","Banglore"};
    if(country.value=="India")
    {
        for(c in cityarr)
        {
            var opt=document.createElement("option");
            opt.innerHTML=c;

            city.appendChild(opt);
        }
        
    }
    
}

function emptyText()
{
    var field=document.getElementById("uName");
    var checkChar=RegExp('^[a-zA-Z]+$');
    if(!checkChar.test(field.value))
    {
        console.log(checkChar.test(field));
        alert("error");
    }
    
}

function idValidation()
{
    var id=document.getElementById("radiffId");
    var numberOfChars=id.value.length;
    if(id.value[numberOfChars-1]==" ")
    {
        
        alert("No white space allowed");
        id.value.length=id.value.length-1;
    }
    
    
}
function pwdValidation()
{
    var pwd=document.getElementById("pwd");
    var a=0;
    var b=0;
    for(i=0;i<pwd.value.length;i++)
    {
        if(pwd.value.charAt(i) >= 'a' && pwd.value.charAt(i) <= 'z')
        {
            a=1;

        }
        if(pwd.value.charAt(i) >= 'A' && pwd.value.charAt(i) <= 'Z')
        {
            b=1;
        }
    }
    if(pwd.value.length<6 || pwd.value.length>=12)
    {
        a=0;
    }
    if(a==0 || b==0)
    {
        alert("Must contain uppercase and lowercase and size must be between 6-12");
    }
    
}

function mobileValidation()
{
    var mob=document.getElementById("mobileNum");
    var numberCheck=RegExp('^[0-9]+$')
    if(!numberCheck.test(mob.value))
    {
        alert("error1");
    }
    
}




