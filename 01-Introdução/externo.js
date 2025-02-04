// Arquivo JS do campo senha
function alterarSenha(){
    let campoSenha = document.getElementById('senha')


    if(campoSenha.type === 'password'){
        campoSenha.type = 'text'
         this.innerText = 'Ocultar'
    }else{
        campoSenha.type = 'password'
          this.innerText ='Mostrar'
    }
}
