//agregar el valor de la pantalla

function agregar(valor){
    document.getElementById("pantalla").value += valor
}
// const borrar1 = valorPantalla.slice(0, -1)
function borrar(){
    const valorPantalla = document.getElementById('pantalla').value 
    const borrar1 = valorPantalla.substring(0, valorPantalla.length-1)
    document.getElementById('pantalla').value = borrar1 
}
function limpiar(){
    document.getElementById("pantalla").value = ''
}

function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado 
}