let table = document.getElementById("table1");
table.setAttribute("class", "tabla");
let usuarioMedico = JSON.parse(localStorage.getItem("medicoLogueado"))

if(usuarioMedico === "sinLogin"){
    window.location.href = "permisoDenegado.html"
}

cerrarSesion.addEventListener("click", e =>{

    e.preventDefault();
    deslogueo();
    window.location.href = "../html/home.html"
})

function deslogueo(){
	if(localStorage.getItem("medicoLogueado")){
    let medicoLogueado1 = "sinLogin"
    localStorage.setItem('medicoLogueado',JSON.stringify(medicoLogueado1));
	} else {
		let medicoLogueado = "sinLogin"
    localStorage.setItem('medicoLogueado',JSON.stringify(medicoLogueado));
  }
}

let doctores = JSON.parse(localStorage.getItem("doctors"))
let infoMedico = doctores.filter(doctores => doctores.usuario === usuarioMedico);
let nombreMedico = infoMedico[0].nombreCompleto
let botonCerrarSesion = document.getElementById("cerrarSesion")



document.getElementById("nombreMedico").innerHTML = nombreMedico;

let turnosArchivados = JSON.parse(localStorage.getItem("turnosConfirmados"))
let TurnosMedicoLogueado = turnosArchivados.filter(turnosConfirmados => turnosConfirmados.doctor === nombreMedico);
console.log(TurnosMedicoLogueado)
let data = Object.keys(TurnosMedicoLogueado[0]);

function tablaTurnos(){
    let data = Object.keys(TurnosMedicoLogueado[0]);
    generateTable(table,TurnosMedicoLogueado);
    generateTableHead(table,data);
}

tablaTurnos()



function generateTableHead(table) {
    let thead = table.createTHead();
    let row = thead.insertRow();

    for (let key of data) {
        if(key == "paciente" || key == "hora" || key == "fecha"){
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
        if(key == "paciente" || key == "hora" || key == "fecha"){
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
        }       
      } 
    }
}

function mostrarModal(){
    let modal = document.getElementById("myModal1")
    var span = document.getElementsByClassName("close1")[0];

    let pacienteSeleccionado = JSON.parse(localStorage.getItem("pacienteSeleccionado"))

    turnosArchivados = JSON.parse(localStorage.getItem("turnosConfirmados"))
    let infoTurno = turnosArchivados.filter(turnos => turnos.paciente === pacienteSeleccionado && turnos.doctor === nombreMedico);
    let motivoConsulta = infoTurno[0].consulta
    modal.style.display = "block";
  
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    document.getElementById("modalText").innerHTML = motivoConsulta;
  
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

            pacienteSeleccionado = rowSelected.cells[0].innerHTML;
            localStorage.setItem("pacienteSeleccionado",JSON.stringify(pacienteSeleccionado))
        }
    }

}


