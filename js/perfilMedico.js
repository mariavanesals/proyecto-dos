let form = document.getElementById("formularioMedico")

let usuarioMedico = JSON.parse(localStorage.getItem("medicoLogueado"))
let doctores = JSON.parse(localStorage.getItem("doctors"))
let infoMedico = doctores.filter(doctores => doctores.usuario === usuarioMedico);
let nombreMedico = infoMedico[0].nombreCompleto

document.getElementById("nombreMedico").innerHTML = nombreMedico;

let botonActualizar = document.getElementById("actualizarPerfil")

form.addEventListener('submit', e => {
	e.preventDefault();
    actualizarPerfil()
});

function actualizarPerfil(){
    nombreMedico = infoMedico[0].nombreCompleto
    doctores = JSON.parse(localStorage.getItem("doctors"))
    let cambioSucursal = document.getElementById("cambioSucursal")
    let cambioHorario = document.getElementById("cambioHorario")
    let cambioSucursalValue = cambioSucursal.value;
    let cambioHorarioValue = cambioHorario.value;

    for (i=0;i<doctores.length;i++){
        if (doctores[i].nombreCompleto === nombreMedico){
            doctores[i].horario = cambioHorarioValue
            doctores[i].sucursal = cambioSucursalValue
          localStorage.setItem('doctors',JSON.stringify(doctores));
          window.location="perfilMedico.html";
        }
      }



}