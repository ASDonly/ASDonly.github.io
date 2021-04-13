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

function noticeClick(){
    var notice=document.getElementById("noticeIn");
    var cover=document.getElementById("cover");
    var N= new Array(7);
    for(var i=1;i<7;i++){
        N[i]=document.getElementById("N"+i+"In");
    }
    notice.style.display="block";
    cover.style.display="block";
    notice.style.animationName="fadeInN";
    cover.style.animationName="fadeinC";
    switch(event.target.id)
    {
        case "N1L":
            N[1].style.display="block";
            console.log("1");
            break;
        case "N2L":
            N[2].style.display="block";
            console.log("2");
            break;
        case "N3L":
            N[3].style.display="block";
            console.log("3");
            break;
        case "N4L":
            N[4].style.display="block";
            console.log("4");
            break;
        case "N5L":
            N[5].style.display="block";
            console.log("5");
            break;
        case "N6L":
            N[6].style.display="block";
            console.log("6");
            break;
    }
}

function coverClick(){
    var notice=document.getElementById("noticeIn");
    var cover=document.getElementById("cover");
    notice.style.animationName="fadeOutN";
    cover.style.animationName="fadeOutC";
    setTimeout(function(){
        notice.style.display="none";
        cover.style.display="none";
        for(var i=1;i<7;i++){
            document.getElementById("N"+i+"In").style.display="none";
        }
    },1000);
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

function aboutlink(){
    location.href="about.html";
}