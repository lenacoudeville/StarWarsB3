
function toggle(elementId){
    console.log("avant :", document.getElementById(elementId).style.display)
    if(document.getElementById(elementId).style.display === "none"){
        document.getElementById(elementId).style.display = "block";
    }else{
        document.getElementById(elementId).style.display = "none";
    }
    console.log("apres : ", document.getElementById(elementId).style.display)
}