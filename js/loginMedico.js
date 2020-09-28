const form = document.getElementById("form")
const usernameInput = document.getElementById("usuario")
const contrasenaInput = document.getElementById("contrasena")
console.log("envio")

form.addEventListener("submit", e => {
    e.preventDefault();

    verificarLogin();
})

let dato = JSON.parse(localStorage.getItem("doctors"))
const valorUsuario = usernameInput.value.trim();
const valorContrasena = contrasenaInput.value.trim();

function verificarLogin() {
    let dato = JSON.parse(localStorage.getItem("doctors"))
    const valorUsuario = usernameInput.value.trim();
    const valorContrasena = contrasenaInput.value.trim();
    for (i=0;i<dato.length;i++){
      if ("admin" == valorUsuario && "admin" == valorContrasena){
        window.location.href = "../html/adminMedico.html"    
      } else if (dato[i].usuario == valorUsuario && dato[i].contrasena == valorContrasena && dato[i].permiso == "no"){
        alert("tu cuenta tiene que ser verificada, aguarda 24hr")
      } else if (dato[i].usuario == valorUsuario && dato[i].contrasena == valorContrasena && dato[i].permiso == "si"){
        LoginMedico()
        window.location.href = "../html/medico.html"
      }     
    }
  }



function mostrarError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}
  
function mostrarExito(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}  

function LoginMedico(){
	if(localStorage.getItem("medicoLogueado")){
    let medicoLogueado1 = usernameInput.value
    localStorage.setItem('medicoLogueado',JSON.stringify(medicoLogueado1));
	} else {
		let usuarioLogueado = usernameInput.value
    localStorage.setItem('medicoLogueado',JSON.stringify(usuarioLogueado));
  }
}