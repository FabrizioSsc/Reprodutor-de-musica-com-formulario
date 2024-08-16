const form = document.getElementById("form") // acessa o docuemnto(pagina) 

const email = document.getElementById("email")
const password = document.getElementById("password")


form.addEventListener("submit", (event) => {      //adiciona um evento 
 event.preventDefault();

 CheckForm()

})

email.addEventListener("blur",() =>{
    checkInputEmail()
})





password.addEventListener("blur",() =>{
    checkInputPassword()
})














function checkInputEmail(){
    const emailValue = email.value
    if(emailValue ===""){
        errorInput(email, "Email obrigatorio.")

    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
       

}

function checkInputPassword(){
    const passwordValue = password.value
    if(passwordValue ===""){
        errorInput(password, " Senha obrigatória.")
    }else if (passwordValue.length <8){
        errorInput (password,"Senha ou email incorretos.")
    }else{
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }
}



function CheckForm (){
   
    checkInputEmail()
    checkInputPassword()
    

    const formItems = form.querySelectorAll(".form-content")
    const isValid = [...formItems].every( (item) => {
        return item.className === "form-content"
    })

    


}


function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"

}

 document.getElementById("criarConta").addEventListener('click', function(){

    window.location.href='http://127.0.0.1:5500/FORMCADASTRO/index.html'
}) 

document.getElementById("logo").addEventListener('click', function(){

    window.location.href='https://onlyfans.com/' 
})

