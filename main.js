
const displayPasswordWarning = () => {



    const warningMsg = document.querySelector("#warn-msg");
    warningMsg.style.display = "block";


    setTimeout(() =>{

        warningMsg.style.display = "none";

    },5000)

}


const passwordValidation = () => {
    
    const pw1 = document.querySelector("#password").value
    const pw2 = document.querySelector("#confirm-password").value


    
    if (pw1 != pw2) {

        return false

    }
}


const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener('click',(e) =>{

    if (passwordValidation() == false) {
        e.preventDefault()
        displayPasswordWarning()
    }

})