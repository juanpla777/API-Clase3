const resultados = [];

// Función flecha para mostrar resultado en el DOM
const mostrarResultado = (res) => {
  document.getElementById("resultado").textContent = res;
  resultados.push(res);
  actualizarHistorial();
};

// Función para mostrar los resultados en pantalla
const actualizarHistorial = () => {
  const lista = document.getElementById("historial");
  lista.innerHTML = "";
  resultados.forEach(r => {
    const item = document.createElement("li");
    item.textContent = r;
    lista.appendChild(item);
  });
};

// Suma
function sumar() {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  const resultado = isNaN(a) || isNaN(b) ? "Por favor, ingrese números válidos" : a + b;
  mostrarResultado(resultado);
}

// Resta
function restar() {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  const resultado = isNaN(a) || isNaN(b) ? "Por favor, ingrese números válidos" : a - b;
  mostrarResultado(resultado);
}