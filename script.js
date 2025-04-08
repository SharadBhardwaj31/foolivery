const myForm = document.getElementById("myForm");
const myError =document.getElementById("myError");
console.log(myForm)
myForm.addEventListener("submit",(event)=>{
    event.preventDefault();

    const {firstName, lastName , email, password, confirmPassword,age,contact} = myForm.elements;

    if(firstName.value.length>10){
        showError("do not write more than 10 char in first name")
    } 
    
});
function showError(message){
    myError.style.color="red";
    myError.innerText=message;
}