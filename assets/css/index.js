const manhinh = document.getElementById("manhinh");

function appendToDisplay(input){
    manhinh.value += input;
}
function clearDisplay(){
    manhinh.value = "";
}
function caculate(){
    try{
        manhinh.value = eval(manhinh.value);
    } 
    catch(error){
        manhinh.value = "error";
    }
}