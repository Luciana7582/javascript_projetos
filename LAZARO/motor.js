// Lista de Cartas com mensagens
// Vetor
const cartas = [
    {nome : "O Preguiçoso", mensagem:"Hoje é dia de Netflix. A Mimir"},
    {nome : "O gato malhado", mensagem:"MEAU Bora academia seu frango?"},
    {nome : "O café estragado",mensagem:"Você vai fazer café e vai ficar Amargo"},
    {nome : " O WI-FI Puff",mensagem:"O wifi vai cair quando fizer o PIX"},
    {nome : " O Tatu ",mensagem:"O Tatu faz buraco"},
    {nome : " O Morango",mensagem:"O Morango é uma fruta menos calórica"},
    {nome : " A árvore",mensagem:"A árvore encantada"},
];

function girarCarta(){
    const carta = document.getElementById("carta")
    const verso = document.getElementById("verso")

    // Sorteia uma carta aleatória
    const indice = Math.floor(Math.random() * cartas.length)
    const cartaSorteada = cartas[indice]

    // Atualize o conteudo da Carta
    verso.innerHTML = `<strong>${cartaSorteada.nome}</strong><br>${cartaSorteada.mensagem}`

    // Gira a Carta
    carta.classList.toggle("virada")
}


        

    
