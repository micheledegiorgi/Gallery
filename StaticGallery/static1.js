function ShowCaption(){
    try{
        var Caption = document.getElementById(Figures[this.id]);
        if(F)
            CurrentCaption.removeChild(CurrentCaption.firstChild);
        var Text = document.createTextNode(Caption.textContent);
        CurrentCaption.appendChild(Text);
        F = true;
    } catch(e){
        alert("ShowCaption " + e);
    }
}

// Variables 
var CurrentCaption;
var Photo1;
var Photo2;
var Photo3;
var Photo4;
var Caption1;
var Caption2;
var Caption3;
var Caption4;
var Captions;
var Figures = {};
var F = false;

function LoadManager(){
    try{
        Photo1 = document.getElementById("Photo1");
        Photo2 = document.getElementById("Photo2");
        Photo3 = document.getElementById("Photo3");
        Photo4 = document.getElementById("Photo4");

        Caption1 = document.getElementById("Caption1");
        Caption2 = document.getElementById("Caption2");
        Caption3 = document.getElementById("Caption3");
        Caption4 = document.getElementById("Caption4");
       
        CurrentCaption = document.getElementById("CurrentCaption");
        
        Photo1.onclick = ShowCaption;
        Photo2.onclick = ShowCaption;
        Photo3.onclick = ShowCaption;
        Photo4.onclick = ShowCaption;

        Figures = {
            Photo1: "Caption1",
            Photo2: "Caption2",
            Photo3: "Caption3",
            Photo4: "Caption4"
        };

    } catch (e){
        alert("LoadManager " + e);
    }
}

window.onload = LoadManager;


