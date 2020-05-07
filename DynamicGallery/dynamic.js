function CreateFigures(PhotoSrc, PhotoCaption, PhotoID) {
    for (var I = 0; I < PhotoSrc.length; I++) {
        var Figure = document.createElement("figure");
        var Picture = document.createElement("img");
        Picture.setAttribute("src", PhotoSrc[I]);
        Picture.setAttribute("id", PhotoID[I]);
        Picture.onclick = ShowCaption;
        Figure.appendChild(Picture);
        Container.appendChild(Figure);
    }
}

function ShowCaption() {
    try {
        var Caption = Figures[this.id];
        if(F)
            CurrentCaption.removeChild(CurrentCaption.firstChild);
        var Text = document.createTextNode(Caption);
        CurrentCaption.appendChild(Text);
        F = true;
    } catch (e) {
        alert("ShowCaption " + e);
    }
}

// Variables 
var CurrentCaption;
var Container;
var Figures = {};
var Pictures;
var F = false; 

function LoadManager() {
    try {
        Container = document.querySelector("div");
        CurrentCaption = document.getElementById("currentcaption");

        var PhotoSrc = ["../img/Photo1.jpg", "../img/Photo2.jpg", "../img/Photo3.jpg", "../img/Photo4.jpg"];
        var PhotoCaption = ["This photo is called Railway", "This photo is called Skyline", "This photo is called Road", "This photo is called Horse"];
        var PhotoID = ["Photo1", "Photo2", "Photo3", "Photo4"];
        CreateFigures(PhotoSrc, PhotoCaption, PhotoID);

        Figures = {
            Photo1: PhotoCaption[0],
            Photo2: PhotoCaption[1], 
            Photo3: PhotoCaption[2], 
            Photo4: PhotoCaption[3], 
        };
    
    } catch (e) {
        alert("LoadManager " + e);
    }
}


window.onload = LoadManager;