//console code
var counter=0;
var button=document.getElementById("counter");
button.onclick=function()
{
    //make a counter request to the counter end point
    
    //capture the responece and store it in a variable
    
    //rendaring a variable in correct spam
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};