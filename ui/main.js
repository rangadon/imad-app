//console code

var button=document.getElementById("counter");
button.onclick=function()
{
    //create a request object
    var request=new XMLHttpRequest();
    //capture the responece and store it in a variable
    request.onreadystatechange=function()
    {
        if(request.readyState === XMLHttpRequest.DONE)
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
//subit name
var nameInput=document.getElementById('name');
var name= nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function()
{
  //make a request to the server and send the name
  
  
  //capture a name of list and render it in a list
  var names=['name1','name2','name3','name4'];
  var list='';
  for(i=0;i<names.length;i++)
  {
      list+='<li>'+ names[i] + '</li>';
  }
  var ul = document.getElementById('namelist');
  
  ul.innerHTmL=list;
};