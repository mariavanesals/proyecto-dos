let table = document.getElementById("table1");

let busqueda = JSON.parse(localStorage.getItem("valorBusqueda"))
console.log(table)
console.log("hola")
table.setAttribute("class", "tabla");
let nombreUsuario = JSON.parse(localStorage.getItem("usuarioLogueado"))

document.getElementById("nombreUsuario").innerHTML = nombreUsuario;

document.getElementById("busquedaInput").placeholder = busqueda;

let doctores = JSON.parse(localStorage.getItem("doctors"))
let dentistas = doctores.filter(doctores => doctores.discipline === "dentista" & doctores.permission === "si");
let neurocirujanos = doctores.filter(doctores => doctores.discipline === "neurocirujano" & doctores.permission === "si");
let dermatologos = doctores.filter(doctores => doctores.discipline === "dermatologo" & doctores.permission === "si");
console.log(dentistas)


let data = Object.keys(dentistas[0]);
console.log(data)

if(busqueda == "neurocirujano" || busqueda == "neurologia" || busqueda == "cerebro"){
        tablaNeurocirujano()
    } else if (busqueda == "dermatologo" || busqueda == "dermatologia" || busqueda == "piel"){
        tablaDermatologos()
    } else if (busqueda == "dentista" || busqueda == "odontologia" || busqueda == "caries"){
        tablaDentistas()
    }   else {
    alert("no se encontro resultados de su busqueda")
}



function tablaDentistas(){
    let data = Object.keys(dentistas[0]);
    generateTable(table, dentistas);
    generateTableHead(table,data);
}

function tablaDermatologos(){
    let data = Object.keys(dermatologos[0]);
    generateTable(table, dermatologos);
    generateTableHead(table,data);
}
function tablaNeurocirujano(){
    let data = Object.keys(neurocirujanos[0]);
    generateTable(table, neurocirujanos);
    generateTableHead(table,data);
}

function generateTableHead(table) {
    let thead = table.createTHead();
    let row = thead.insertRow();

    for (let key of data) {
        if(key == "fullname" || key == "discipline"){
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
        }
    }
      
}

function generateTable(table, data) {
    for (let element of data) {
      let row = table1.insertRow();
      row.addEventListener("click", () => {mostrarModal()})

      for (key in element) {
        if(key == "fullname" || key == "discipline"){
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
        }       
      } 
    }
}





const input = document.getElementById('fechaCalendario');
const datepicker = new TheDatepicker.Datepicker(input);
datepicker.render();

let buscarTurno = document.getElementById("abrirModalTurno")

buscarTurno.addEventListener("click", e => {
    e.preventDefault();

    mostrarModalTurno()
})

function mostrarModalTurno(){
    let modal = document.getElementById("modalTurno")
    let cancelar = document.getElementById("cancelar")

    modal.style.display = "block"

    cancelar.onclick = function(){
        modal.style.display = "none"
    }

}

seleccionarFila()

function seleccionarFila() {
    var table = document.getElementById('table1');
    var cells = table.getElementsByTagName('td');

    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        cell.onclick = function () {
            var rowId = this.parentNode.rowIndex;
            var rowsNotSelected = table.getElementsByTagName('tr');
            for (var row = 0; row < rowsNotSelected.length; row++) {
                rowsNotSelected[row].style.backgroundColor = "";
                rowsNotSelected[row].classList.remove('selected');
            }
            var rowSelected = table.getElementsByTagName('tr')[rowId];
            rowSelected.className += " selected";

            doctorSeleccionado = rowSelected.cells[0].innerHTML;
            localStorage.setItem("doctorSeleccionado",JSON.stringify(doctorSeleccionado))
            console.log(doctorSeleccionado)
        }
    }
}

function mostrarModal(){
    let modal = document.getElementById("modalMedico1")
    let botonCerrar = document.getElementById("cerrarModal")

    modal.style.display = "block"
    botonCerrar.onclick = function(){
        modal.style.display = "none"
    }

    let medicoSeleccionado = JSON.parse(localStorage.getItem("doctorSeleccionado"))
    console.log(medicoSeleccionado)

    let infoMedico = doctores.filter(doctores => doctores.fullname === medicoSeleccionado);
    let especialidad = infoMedico[0].discipline
    let turno = infoMedico[0].horario
    let sucursal = infoMedico[0].sucursal
    console.log(especialidad)
    medicoSeleccionado = JSON.parse(localStorage.getItem("doctorSeleccionado"))
    document.getElementById("nombreCompleto").innerHTML = medicoSeleccionado;
    document.getElementById("especialidad").innerHTML = especialidad;
    document.getElementById("sobreMi").innerHTML = "Atiendo a la " + turno + " en la sucursal de " + sucursal;

    botonCerrar.onclick = function(){
        modal.style.display = "none"
    }

    
}