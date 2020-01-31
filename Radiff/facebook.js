function fnameValidation(e,d,c)
{
    var fname=document.getElementById(e);
    var mark=document.getElementById(c);
    var fnamediv=document.getElementById(d);
    
    if(fname.value=="")
    {
        fnamediv.style.borderColor="red";
        mark.hidden=false;
        
    }
}
function fnameFocus(e,d,c)
{
    var mark=document.getElementById(c);
    var fnamediv=document.getElementById(d);
    var fname=document.getElementById(e);
    fnamediv.style.borderColor="initial";
    mark.hidden=true;
}


function checkValidation()
{

}