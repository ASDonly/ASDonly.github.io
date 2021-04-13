/*write by data.js*/




//Notice
for(var i=0;i<6;i++){
    document.getElementById("N"+(i+1)+"L").innerHTML = data.noticeIn.n[i].title;
    document.getElementById("N"+(i+1)+"D").innerHTML = data.noticeIn.n[i].date;
    document.getElementById("N"+(i+1)+"T").innerHTML = data.noticeIn.n[i].title;
    document.getElementById("N"+(i+1)+"C").innerHTML = data.noticeIn.n[i].content;
}

//