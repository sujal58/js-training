
document.getElementById("subbutton").onclick=function(){
    let temp;
     
     
     if (document.getElementById("tocelcius").checked) {
         temp=document.getElementById("inputtemp").value;
         temp=Number(temp);
         result=(temp-32)*5/9;
        document.getElementById("initunit").innerHTML="\u00B0F";
         document.getElementById("result").innerHTML="Final temperature:"+result+"\u00B0C";

     }

     else if (document.getElementById("tofahren").checked) {
        temp=document.getElementById("inputtemp").value;
        temp=Number(temp);
        result=(9*temp/5)+32;
        document.getElementById("initunit").innerHTML="\u00B0C";
        document.getElementById("result").innerHTML="Final temperature:"+result+"\u00B0F";

    }

    else
    document.getElementById("result").innerHTML="Please select proper temperature unit!!!!!";



    }
