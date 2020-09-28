let usuarioMedico = JSON.parse(localStorage.getItem("medicoLogueado"))
let doctores = JSON.parse(localStorage.getItem("doctors"))
let infoMedico = doctores.filter(doctores => doctores.username === usuarioMedico);
let nombreMedico = infoMedico[0].fullname
console.log(nombreMedico)


document.getElementById("nombreMedico").innerHTML = nombreMedico;


