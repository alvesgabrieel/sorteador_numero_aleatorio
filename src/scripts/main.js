document.addEventListener('DOMContentLoaded', function() {

    //função para sortear o numero
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        //para inputar o valor na div com id = resultado-valor
        document.getElementById('resultado-valor').innerText = numeroAleatorio; 

        //para remover o display none e colocar block na div
        document.querySelector('.resultado').style.display = 'block';
    })
})