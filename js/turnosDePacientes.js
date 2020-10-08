let table = document.getElementById("table1");
table.setAttribute("class", "tabla");
let nombreUsuario = JSON.parse(localStorage.getItem("usuarioLogueado"))

document.getElementById("nombreUsuario").innerHTML = nombreUsuario;

if(nombreUsuario === "sinLogin"){
    window.location.href = "permisoDenegado.html"
}
let turnosArchivados = JSON.parse(localStorage.getItem("turnosConfirmados"))
let turnosUsuarioLogueado = turnosArchivados.filter(turnosConfirmados => turnosConfirmados.paciente === nombreUsuario);
const cerrarSesion = document.getElementById("cerrarSesion");

cerrarSesion.addEventListener("click", e =>{

    e.preventDefault();
    deslogueo();
    window.location.href = "../html/home.html"
})

function deslogueo(){
	if(localStorage.getItem("usuarioLogueado")){
    let usuarioLogueado1 = "sinLogin"
    localStorage.setItem('usuarioLogueado',JSON.stringify(usuarioLogueado1));
	} else {
		let usuarioLogueado = "sinLogin"
    localStorage.setItem('usuarioLogueado',JSON.stringify(usuarioLogueado));
  }
}

function tablaTurnos(){
    let data = Object.keys(turnosUsuarioLogueado[0]);
    console.log(data)
    generateTable(table,turnosUsuarioLogueado);
    generateTableHead(table,data);
}


function generateTableHead(table,data) {
    let thead = table.createTHead();
    let row = thead.insertRow();

    for (let key of data) {
        if(key == "doctor" || key == "hora" || key == "fecha"){
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
        if(key == "doctor" || key == "hora" || key == "fecha"){
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

