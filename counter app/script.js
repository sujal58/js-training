let count=0;
document.getElementById("decbtn").onclick=function(){
    count-=1;
    if (count<0) {
        alert("LESS than zero!!!")
        return;
    }
    document.getElementById("counter").innerHTML=count;
}

document.getElementById("resbtn").onclick=function(){
    count=0;
    document.getElementById("counter").innerHTML=count;
}

document.getElementById("incbtn").onclick=function(){
    count+=1;
    document.getElementById("counter").innerHTML=count;
}

