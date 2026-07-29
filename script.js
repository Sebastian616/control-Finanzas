// codigo para subir los datos al local storage

const formulario = document.getElementById("formulario-gasto")

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const descripcion = document.getElementById("descripcion").value
    const valor = document.getElementById("valor").value
    const categoria = document.getElementById("categoria").value

    const nuevoGasto = {
        descripcion: descripcion,
        valor: valor,
        categoria: categoria
    };

    let gastos = JSON.parse(localStorage.getItem("gastos")) || [];

    gastos.push(nuevoGasto);

    localStorage.setItem("gastos", JSON.stringify(gastos))

    mostrarGastos();

    alert("gasto guardado", descripcion, valor, categoria)
    formulario.reset()

}
)
//mostrar los datos almacenados en el localestorage

function mostrarGastos() {
    const lista = document.getElementById("listaGastos")
    lista.innerHTML = ""

    const gastos = JSON.parse(localStorage.getItem("gastos")) || []
    gastos.forEach(function(gasto, indice) {
        lista.innerHTML += `
            <div class="item-gasto d-flex justify-content-between align-items-center p-3 rounded mt-4">
                <span>${gasto.descripcion} - $${gasto.valor} - ${gasto.categoria}</span>

                <button class="btn btn-custom-dark btn-sm"
                onclick="eliminarGasto(${indice})">
                    Eliminar
                </button>
            </div>
        `;
    })
}

mostrarGastos();

//da funcionalidad al boton 
function eliminarGasto(indice) {
    let gastos = JSON.parse(localStorage.getItem("gastos")) || [];
    gastos.splice(indice, 1);
    localStorage.setItem("gastos", JSON.stringify(gastos))

    mostrarGastos()
}