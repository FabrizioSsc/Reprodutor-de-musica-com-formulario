const form = document.getElementById("form") // acessa o docuemnto(pagina) 
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation")

form.addEventListener("submit", (event) => {      //adiciona um evento 
 event.preventDefault();

 CheckForm()

})

email.addEventListener("blur",() =>{
    checkInputEmail()
})



username.addEventListener("blur",() =>{
    checkInputUsername()
})

password.addEventListener("blur",() =>{
    checkInputPassword()
})

passwordConfirmation.addEventListener("blur",() =>{
    checkInputPasswordConfirmation()
})


function checkInputUsername () { // validação do usuario
    const usernameValue = username.value;

    if(usernameValue === ""){
        errorInput(username, "Preencha o nome de usuário.")
    }else{
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }



}

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
        errorInput (password,"A senha precisa ter no mínimo 8 caractéres.")
    }else{
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPasswordConfirmation(){
    const passwordValue = password.value
    const confirmationPasswordValue = passwordConfirmation.value
    
    if(confirmationPasswordValue === ""){
        errorInput(passwordConfirmation, " A confirmação de senha é obrigatoria.")
    } else if(confirmationPasswordValue !== passwordValue){
        errorInput(passwordConfirmation, "As senhas não são iguais, tente novamente.")

    }else{
        const formItem = passwordConfirmation.parentElement
        formItem.className = "form-content"
    }
       
        
}

function CheckForm (){
    checkInputUsername()
    checkInputEmail()
    checkInputPassword()
    checkInputPasswordConfirmation()

    const formItems = form.querySelectorAll(".form-content")
    const isValid = [...formItems].every( (item) => {
        return item.className === "form-content"
    })

    if(isValid){
        alert("cadastrado com sucesso!")
    }


}


function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"

}

document.getElementById("entrarSemCadastro").addEventListener('click', function(){

    window.location.href='http://127.0.0.1:5500/TELA_INICIAL/index.html'
})

