let form = document.getElementById("formularioMedico")
let usuarioMedico = JSON.parse(localStorage.getItem("medicoLogueado"))
if(usuarioMedico === "sinLogin"){
    window.location.href = "permisoDenegado.html"
}

let doctores = JSON.parse(localStorage.getItem("doctors"))
let infoMedico = doctores.filter(doctores => doctores.usuario === usuarioMedico);
let nombreMedico = infoMedico[0].nombreCompleto;
const cerrarSesion = document.getElementById("cerrarSesion");


document.getElementById("nombreMedico").innerHTML = nombreMedico;

let botonActualizar = document.getElementById("actualizarPerfil")

form.addEventListener('submit', e => {
	e.preventDefault();
    actualizarPerfil()
});

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

function actualizarPerfil(){
    nombreMedico = infoMedico[0].nombreCompleto
    infoMedico = doctores.filter(doctores => doctores.usuario === usuarioMedico);

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