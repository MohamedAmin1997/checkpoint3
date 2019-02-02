
function bold(){
    if( document.getElementById("txt").style.fontWeight == "bold"){
        document.getElementById("txt").style.fontWeight = "normal";
    }
    else{
    document.getElementById("txt").style.fontWeight = "bold";
    console.log("bold") ;
    }
}

function italic(){
   if( document.getElementById("txt").style.fontStyle == "italic"){
        document.getElementById("txt").style.fontStyle = "normal";
   }
    else{
        document.getElementById("txt").style.fontStyle = "italic";
    }
}

function underligne() {
    if ( document.getElementById("txt").style.textDecoration == "underline"){
        document.getElementById("txt").style.textDecoration = "none";
        
    }
    else{
        document.getElementById("txt").style.textDecoration = "underline";
    }
}
function fontfamily()
{
    var font = document.getElementById("police").value;
  document.getElementById("txt").style.fontFamily = font;
}
function fontsize(){
    var font = document.getElementById("num").value;
    document.getElementById("txt").style.fontSize = font;
}