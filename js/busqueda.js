let busqueda = JSON.parse(localStorage.getItem("valorBusqueda"))
let table = document.getElementById("table1");
table.setAttribute("class", "tabla");
let nombreUsuario = JSON.parse(localStorage.getItem("usuarioLogueado"))

document.getElementById("nombreUsuario").innerHTML = nombreUsuario;

document.getElementById("busquedaInput").placeholder = busqueda;

let doctores = JSON.parse(localStorage.getItem("doctors"))
let dentistas = doctores.filter(doctores => doctores.discipline === "dentista");
let neurocirujanos = doctores.filter(doctores => doctores.discipline === "neurocirujano");
let dermatologos = doctores.filter(doctores => doctores.discipline === "dermatologo");


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



function mostrarModal(){
    let modal = document.getElementById("modalMedico1")
    let botonCerrar = document.getElementById("cerrarModal")

    modal.style.display = "block"
    botonCerrar.onclick = function(){
        modal.style.display = "none"
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

let botonReservar = document.getElementById("botonReservar")

botonReservar.addEventListener("click", e => {
    e.preventDefault()

    almacenarTurno()
})


function almacenarTurno(){
    const fechaCalendario = document.getElementById("fechaCalendario")
    const hora = document.getElementById("hora")
    const motivoConsulta = document.getElementById("motivoConsulta")
    const doctor = JSON.parse(localStorage.getItem("doctorSeleccionado"))


    const valorFechaCalendario = fechaCalendario.value;
    const valorHora = hora.value;
    const valorMotivoConsulta = motivoConsulta.value;

    console.log(valorFechaCalendario)
    console.log(valorHora)
    console.log(valorMotivoConsulta)
    console.log(nombreUsuario)
    console.log(doctor)
}

highlight_row()

function highlight_row() {
    var table = document.getElementById('table1');
    var cells = table.getElementsByTagName('td');

    for (var i = 0; i < cells.length; i++) {
        // Take each cell
        var cell = cells[i];
        // do something on onclick event for cell
        cell.onclick = function () {
            // Get the row id where the cell exists
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
