function ShowCaption(){
    try{
        var Photo = this;
        var Description; 
        for(var I = 0; I < Figures.length; I++){
            if(Photo == Figures[I].Photo)
                Description = Figures[I].Caption;
        }
        if(F)
            CurrentCaption.removeChild(CurrentCaption.firstChild);
        var Text = document.createTextNode(Description);
        CurrentCaption.appendChild(Text);
        F = true;
    } catch(e){
        alert("ShowCaption " + e);
    }
}

// Variables 
var CurrentCaption;
var Photos;
var Captions;
var Figures = new Array();
var F = false;

function LoadManager(){
    try{
        Photos = document.getElementsByClassName("Photo");
        Captions = document.getElementsByClassName("Caption");
        CurrentCaption = document.getElementById("CurrentCaption");
        
        for(var I = 0; I < Photos.length; I++){
            Photos[I].onclick = ShowCaption;
        }

        for(var I = 0; I < Photos.length; I++){
            Figures[I] = {Photo: Photos[I], Caption: Captions[I].textContent};
        }

    } catch (e){
        alert("LoadManager " + e);
    }
}

window.onload = LoadManager;