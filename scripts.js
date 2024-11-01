document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var nota = parseFloat(document.getElementById('calificacion').value); 
    var resultado = document.getElementById('resultado'); // Obtiene el elemento para mostrar el resultado

    if (nota >= 90) {
        resultado.textContent = "Aprobado con honores";
    } else if (nota >= 70 && nota < 90) {
        resultado.textContent = "Aprobado";
    } else {
        resultado.textContent = "No aprobado";
    }
});
document.getElementById('for').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var numer = parseFloat(document.getElementById('num').value); 
    var result = document.getElementById('numer'); 
    if (numer % 2 === 0) {
        result.textContent = "Es par"; 
        result.textContent = "No es par"; 
    }
});

function calcularDescuento() {
    const montoCompra = parseFloat(document.getElementById("descuento").value) || 0;
    const montoFinal = montoCompra > 100 ? montoCompra * 0.9 : montoCompra;
    document.getElementById("resultado").innerText = 
        `Monto final a pagar: $${montoFinal.toFixed(2)}`;
}

function adivinar (){
    const numerosecreto = Math.floor(math.random()*10)+1
    const adi = parseInt(document.getElementById('adi').innerText = "Adivinaste")
}