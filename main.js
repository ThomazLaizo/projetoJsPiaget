const form = document.getElementById('formulario')
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const n1 = Number(document.getElementById('num1').value)
    const n2 = Number(document.getElementById('num2').value)

    const soma = (n1 + n2)

    resultado.textContent = soma
})

const resultado = document.createElement('p')
resultado.id = 'paragrafo-soma' 
