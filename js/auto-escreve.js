const ramon = 'Ramon Coelho'
const velocidade = 150;
const loop = 5000;
let i = 0;

function escrever() {
    const texto = document.querySelector('#ramon')

    function digitar() {
        if (i < ramon.length) {
            texto.innerHTML += ramon[i]
            i++;
            setTimeout(digitar, velocidade);

        } else {
            setTimeout(() => {
                texto.innerHTML =''
            i = 0;
            digitar()
            }, loop);
            
        }
    }
    digitar()
}

escrever();

