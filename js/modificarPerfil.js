let usuarioMedico = JSON.parse(localStorage.getItem("medicoLogueado"))
let doctores = JSON.parse(localStorage.getItem("doctors"))
let infoMedico = doctores.filter(doctores => doctores.usuario === usuarioMedico);
let nombreMedico = infoMedico[0].nombreCompleto
console.log(nombreMedico)


document.getElementById("nombreMedico").innerHTML = nombreMedico;


