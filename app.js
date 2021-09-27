var dob = document.querySelector("#dob");
var luckyNum = document.querySelector("#number");
const checkBtn = document.querySelector("#check");
var output = document.querySelector("#output-msg")

function clickHandler(){
    if(dob.value === "" || luckyNum.value === ""){
        output.innerText="Please enter The data Wisely";
    } else {
        var dateString = dob.value.replaceAll("-","");
        var sum = 0;
        for(let num of dateString){
            sum = sum + Number(num,10);
        } 
        if(sum%luckyNum.value === 0){  
            output.innerText = "Wooow!! Your Birthday is Lucky!!!"
        }
        else{
            output.innerText = "ooops!! Your Birthday is not Lucky :("
        }
    }
    
}