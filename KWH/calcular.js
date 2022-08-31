function calcular(){
    let potencia = document.getElementById('p').value;                         
    let horas = document.getElementById('h').value;
    let dias = document.getElementById('d').value;              
    let resultado;
    potencia = parseFloat(potencia);                                         
    horas = parseFloat(horas);
    dias = parseInt(dias)

    resultado = potencia * horas * dias
    return resultado
}