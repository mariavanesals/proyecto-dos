let table = document.getElementById("table1");

let busqueda = JSON.parse(localStorage.getItem("valorBusqueda"))
table.setAttribute("class", "tabla");
let nombreUsuario = JSON.parse(localStorage.getItem("usuarioLogueado"))
const cerrarSesion = document.getElementById("cerrarSesion");

if(nombreUsuario === "sinLogin"){
    window.location.href = "permisoDenegado.html"
}

document.getElementById("nombreUsuario").innerHTML = nombreUsuario;

let doctores = JSON.parse(localStorage.getItem("doctors"))
let dentistas = doctores.filter(doctores => doctores.disciplina === "dentista" & doctores.permiso === true);
let neurocirujanos = doctores.filter(doctores => doctores.disciplina === "neurocirujano" & doctores.permiso === true);
let dermatologos = doctores.filter(doctores => doctores.disciplina === "dermatologo" & doctores.permiso === true);
console.log(neurocirujanos)
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

function generateTableHead(table,data) {
    let thead = table.createTHead();
    let row = thead.insertRow();

    for (let key of data) {
        if(key == "nombreCompleto" || key == "disciplina"){
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
        if(key == "nombreCompleto" || key == "disciplina"){
        let cell = row.insertCell();
        cell.style.cursor = "pointer"
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
    let modal = document.getElementById("modalMedico1")
    modal.style.display = "none"

    mostrarModalTurno()
})

function mostrarModalTurno(){
    let modal = document.getElementById("modalTurno")
    let cancelar = document.getElementById("cancelar")
    let botonHamburguesa = document.getElementById("botonHamburguesa")


    modal.style.display = "block"
    doctores = JSON.parse(localStorage.getItem("doctors"))

    medicoSeleccionado = JSON.parse(localStorage.getItem("doctorSeleccionado"))
    
    let infoMedico = doctores.filter(doctores => doctores.nombreCompleto === medicoSeleccionado);
    let horarioAtencion = infoMedico[0].horario

    if(horarioAtencion == "mañana"){
        document.getElementById("opcion1").innerHTML = 9;
        document.getElementById("opcion2").innerHTML = 10;
        document.getElementById("opcion3").innerHTML = 11;
        document.getElementById("opcion4").innerHTML = 12;
    } else{
        document.getElementById("opcion1").innerHTML = 16;
        document.getElementById("opcion2").innerHTML = 17;
        document.getElementById("opcion3").innerHTML = 18;
        document.getElementById("opcion4").innerHTML = 19;
    }

    botonHamburguesa.onclick = function(){
        modal.style.display = "none"
    }

    cancelar.onclick = function(){
        modal.style.display = "none"
    }

}

let botonReservar = document.getElementById("botonReservar")

botonReservar.addEventListener("click", e => {
    e.preventDefault();

    verificarTurnoLibre()
})

function verificarTurnoLibre(){
    turnosConfirmados = JSON.parse(localStorage.getItem("turnosConfirmados"))
    nombreUsuario = JSON.parse(localStorage.getItem("usuarioLogueado"))
    let medicoSeleccionado = JSON.parse(localStorage.getItem("doctorSeleccionado"))
    const fecha = document.getElementById("fechaCalendario")
    const hora = document.getElementById("hora")
    const fechaValue = fecha.value
    const horaValue = hora.value

    const medicoOcupado = turnosConfirmados.find(turno =>{
        if(turno.paciente === nombreUsuario && turno.doctor === medicoSeleccionado){
            return turno
        }
    })
    if(medicoOcupado){
        let aviso = "Ya tienes un turno con este doctor"
        mostrarModalTurnoConfirmado(aviso)
    } else{
        chequearFecha()
    }
    function chequearFecha(){
        const turnoYaOcupado = turnosConfirmados.find(turno1 => {
        if(turno1.hora === horaValue && turno1.fecha === fechaValue && turno1.doctor === doctorSeleccionado){
            return turno1
            }
        })
        console.log(turnoYaOcupado)   
        if(turnoYaOcupado){
            let aviso = "Este turno ya se encuentra ocupado"
            mostrarModalTurnoConfirmado(aviso)
        } else{
            ReservarTurno()
            window.location="ReservaLista.html"; 
        }
    }
}

function mostrarModalTurnoConfirmado(aviso){
    console.log("hola")
    let modal = document.getElementById("myModal1")
    var span = document.getElementsByClassName("close1")[0];

    modal.style.display = "block";
  
    span.onclick = function() {
      modal.style.display = "none";
    }
    document.getElementById("modalText").innerHTML = aviso;
  }

function ReservarTurno(){
    const fecha = document.getElementById("fechaCalendario")
    const hora = document.getElementById("hora")
    const motivoConsulta = document.getElementById("motivoConsulta")
    const fechaValue = fecha.value
    const horaValue = hora.value
    const motivoConsultaValue = motivoConsulta.value
    let doctorSeleccionado = JSON.parse(localStorage.getItem("doctorSeleccionado"))
    let infoMedico = doctores.filter(doctores => doctores.nombreCompleto === doctorSeleccionado);
    let especialidad = infoMedico[0].disciplina
    let turno = infoMedico[0].horario
    let sucursal = infoMedico[0].sucursal

    if(localStorage.getItem("turnosConfirmados")){
		let TurnosConfirmados1 = JSON.parse(localStorage.getItem("turnosConfirmados"));
		TurnosConfirmados1.push(
			{
				paciente: nombreUsuario,
				fecha: fechaValue,
				hora: horaValue,
                consulta: motivoConsultaValue,
                doctor : doctorSeleccionado,
                especialidad : especialidad,
				}
		)
		localStorage.setItem("turnosConfirmados",JSON.stringify(TurnosConfirmados1));
	} else {
		let TurnosConfirmados = Array(
			{
				paciente: nombreUsuario,
				fecha: fechaValue,
				hora: horaValue,
                consulta: motivoConsultaValue,
                doctor : doctorSeleccionado,
                especialidad : especialidad,
			}
		);
		localStorage.setItem('turnosConfirmados',JSON.stringify(TurnosConfirmados));
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
        }
    }
}

function mostrarModal(){
    let modal = document.getElementById("modalMedico1")
    let botonCerrar = document.getElementById("cerrarModal")
    botonHamburguesa = document.getElementById("botonHamburguesa")



    modal.style.display = "block"
    botonCerrar.onclick = function(){
        modal.style.display = "none"
    }

    let medicoSeleccionado = JSON.parse(localStorage.getItem("doctorSeleccionado"))

    infoMedico = doctores.filter(doctores => doctores.nombreCompleto === medicoSeleccionado);
    let especialidad = infoMedico[0].disciplina
    let turno = infoMedico[0].horario
    let sucursal = infoMedico[0].sucursal

    document.getElementById("nombreCompleto").innerHTML = medicoSeleccionado;
    document.getElementById("especialidad").innerHTML = especialidad;
    document.getElementById("sobreMi").innerHTML = "Atiendo a la " + turno + " en la sucursal de " + sucursal;

    botonCerrar.onclick = function(){
        modal.style.display = "none"
    }

    botonHamburguesa.onclick = function(){
        modal.style.display = "none"
    }

    
}