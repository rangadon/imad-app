//console code

var button=document.getElementById("counter");
button.onclick=function()
{
    //create a request object
    var request=new XMLhttpRequest(l);
    //capture the responece and store it in a variable
    request.onreadystatechange=function()
    {
        if(request.readState === XMLHttpRequest.DONE)
        {
            //Take some action
            if(request.status===200)
            {
            var counter=request.responseText;
            var span=document.getElementById('count');
            span.innerHTML=counter.toString(); 
            }
        }
        //not done yet
    };
   //make the request
   request.open('GET','http://sarangchandak21.imad.hasura-app.io/counter',true);
   request.send(null);
  
    
};