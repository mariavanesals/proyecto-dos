let table = document.getElementById("table1");
table.setAttribute("class", "tabla");
let usuarioMedico = JSON.parse(localStorage.getItem("medicoLogueado"))
let doctores = JSON.parse(localStorage.getItem("doctors"))
document.getElementById("nombreMedico").innerHTML = usuarioMedico;

let infoMedico = doctores.filter(doctores => doctores.username === usuarioMedico);
let nombreMedico = infoMedico[0].fullname
console.log(infoMedico[0].fullname)


let turnosArchivados = JSON.parse(localStorage.getItem("turnosConfirmados"))
let TurnosMedicoLogueado = turnosArchivados.filter(turnosConfirmados => turnosConfirmados.doctor === nombreMedico);
console.log(TurnosMedicoLogueado)
let data = Object.keys(TurnosMedicoLogueado[0]);

function tablaTurnos(){
    let data = Object.keys(TurnosMedicoLogueado[0]);
    generateTable(table,TurnosMedicoLogueado);
    generateTableHead(table,data);
}


function generateTableHead(table) {
    let thead = table.createTHead();
    let row = thead.insertRow();

    for (let key of data) {
        if(key == "paciente" || key == "hora" || key == "dia"){
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
        if(key == "paciente" || key == "hora" || key == "dia"){
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
        }       
      } 
    }
}

tablaTurnos()



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

