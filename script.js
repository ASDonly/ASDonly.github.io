/*JavaScript*/




function menulistclick(){
    var list=document.getElementById("list");
    if(list.style.display=="none"){
        list.style.display="block";
        list.style.animationName="list-on";
        list.style.animationDuration="0.2s";
        
    }else{
        list.style.animationName="list-off";
        list.style.animationDuration="0.2s";
        setTimeout(function(){
            list.style.display="none";
        },100);
    }
}

function homelink(){
    location.href="index.html";
}

function tasklink(){
    location.href="task.html";
}

function shoplink(){
    location.href="shop.html";
}