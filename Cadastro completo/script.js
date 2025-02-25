     // Calcula idade
     function calculaIdade(){
        let dataNasc= new Date(document.getElementById('dataNascimento').value)
        if(isNaN(dataNasc.getTime())){
            document.getElementById('idade').textContent = "Valor Inválido!"
            return
        }
        let hoje = new Date()
        let idade = hoje.getFullYear() - dataNasc.getFullYear()
        let mes = hoje.getMonth() - dataNasc.getMonth()
        if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())){
            idade--
        }
        document.getElementById('idade').textContent = `Idade: ${idade} anos`
     }  


     function validarCpf(){
        cpf = document.getElementById('cpf').value.replace(/[^\d]+/g,'')
        if(cpf.length !== 11){
            new bootstrap.Modal(document.getElementById('cpfInvalidoModal')).show()
            return
        }

        // Calculo do primeiro digito
        let soma = 0 
        // Multiplica cada digito por um peso decrescente
        for(let i = 1; i<=9; i++){
            soma += parseInt(cpf.substring(i-1,i))*(11-i)
        }

        // Calcula o resto da divisão por 11
        let resto = (soma*10)%11
        if(resto ===10 || resto === 11) resto = 0

        // Ferifica se o resto é diferente do primeiro digito
        if(resto !== parseInt(cpf.substring(9,10))){
            new bootstrap.Modal(document.getElementById('cpfInvalidoModal')).show()
            return false
        }

        // Calculo do segundo digito por um peso decrescente
        soma = 0 
        for(let i = 1; i <= 10; i++){
            soma += parseInt(cpf.substring(i-1,i)*(12 - i))
        }
        resto = (soma*10) % 11
        if(resto === 10 || resto ===11) resto = 0

        if(resto !== parseInt(cpf.substring(10,11))){
            new bootstrap.Modal(document.getElementById('cpfInvalidoModal')).show()
            return false
        }
     }

       
       // Função Assincrona que será chamada quando o campo CEP perder foco

        async function buscarEndereco() {
            // Remove tudo que não seja número
            let cep = document.getElementById('cep').value.replace(/\D/g,'')

            //Verfica se o cep cpntém exatos 8 Digitos
            if(cep.length !== 8){
                alert("CEP INVÁLIDO")
                return
            }
            try{
            // Faz uma requisição HTTP para o API Via CEP
            // O AWAIT aguarda até que a resposta seja recebida
             let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

             // Verifica se a requisição foi bem sucedida
            if(!resposta.ok){
                alert("ERRO AO CONSULTAR")
                return

            }
            // Convertee a resposta  da API para um objeto
            let endereco = await resposta.json()
             // Preencher os campos
             document.getElementById('endereco').value = `${endereco.logradouro}, ${endereco.bairro}`
           

        }catch(erro){
            alert("ERRO AO BUSCAR")
            
        }

    }  
    
    
    document.addEventListener('DOMContentLoaded',()=>{
        const entradaEmail = document.getElementById('email')
        const caixaSugestao = document.getElementById('emailSuggestions')

        const dominios = ['gmail.com','yahoo.com','outlook.com']

        entradaEmail.addEventListener('input', (e)=>{
            const valorEntrada = e.target.value
            if(valorEntrada.includes ('@')){
                const dominioInserido = valorEntrada.split('@')[1]
                const sugestoes = dominios.filter(dominio =>
                        dominio.startsWith(dominioInserido))
               caixaSugestao.innerHTML = sugestoes.map(dominio =>
                   `<div class="sugestao-item">
                  ${valorEntrada.split('@')[0]}@${dominio}
                </div>`).join('')
               caixaSugestao.style.display = 'block'
           }else{
               caixaSugestao.style.display = 'none'
           }                                             
        })

        caixaSugestao.addEventListener('click', (e) => {
            if(e.target.classList.contains('sugestao-item')) {
                entradaEmail.value = e.target.textContent
                caixaSugestao.style.display = 'none'           
            }
        })
        

    })