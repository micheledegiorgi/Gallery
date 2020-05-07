function ShowCaption(){
    try{
        var Caption = Figures[this.id];
        if(F)
            CurrentCaption.removeChild(CurrentCaption.firstChild);
        var Text = document.createTextNode(Caption);
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
var Figures = {};
var F = false;

function LoadManager(){
    try{
        Photo1 = document.getElementById("Photo1");
        Photo2 = document.getElementById("Photo2");
        Photo3 = document.getElementById("Photo3");
        Photo4 = document.getElementById("Photo4");
       
        CurrentCaption = document.getElementById("CurrentCaption");
        
        Photo1.onclick = ShowCaption;
        Photo2.onclick = ShowCaption;
        Photo3.onclick = ShowCaption;
        Photo4.onclick = ShowCaption;

        Figures = {
            Photo1: "This photo is called Railway.",
            Photo2: "This photo is called Skyline.",
            Photo3: "This photo is called Road.",
            Photo4: "This photo is called Horse."
        };

    } catch (e){
        alert("LoadManager " + e);
    }
}

window.onload = LoadManager;


