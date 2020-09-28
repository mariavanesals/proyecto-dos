let table = document.getElementById("table1");
table.setAttribute("class", "tabla");
let nombreUsuario = JSON.parse(localStorage.getItem("usuarioLogueado"))

document.getElementById("nombreUsuario").innerHTML = nombreUsuario;

let turnosArchivados = JSON.parse(localStorage.getItem("turnosConfirmados"))
let TurnosUsuarioLogueado = turnosArchivados.filter(turnosConfirmados => turnosConfirmados.paciente === nombreUsuario);
console.log(TurnosUsuarioLogueado)
let data = Object.keys(TurnosUsuarioLogueado[0]);





function tablaTurnos(){
    let data = Object.keys(TurnosUsuarioLogueado[0]);
    generateTable(table,TurnosUsuarioLogueado);
    generateTableHead(table,data);
}


function generateTableHead(table) {
    let thead = table.createTHead();
    let row = thead.insertRow();

    for (let key of data) {
        if(key == "doctor" || key == "hora" || key == "dia"){
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

      for (key in element) {
        if(key == "doctor" || key == "hora" || key == "dia"){
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
        }       
      } 
    }
}

tablaTurnos()


function mostrarModal(){
    let modal = document.getElementById("modalMedico1")
    let botonCerrar = document.getElementById("cerrarModal")

    modal.style.display = "block"
    botonCerrar.onclick = function(){
        modal.style.display = "none"
    }

    
}

function mostrarModalTurno(){
    let modal = document.getElementById("modalTurno")
    let cancelar = document.getElementById("cancelar")

    modal.style.display = "block"
    cancelar.onclick = function(){
        modal.style.display = "none"
    }

}

//seleccionarFila()

/*function seleccionarFila() {
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

}*/

