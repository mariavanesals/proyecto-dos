const form = document.getElementById("form")
const usernameInput = document.getElementById("usuario")
const contrasenaInput = document.getElementById("contrasena")
let usuarioLogueado1 = usernameInput.value
console.log(usuarioLogueado1)
console.log(usernameInput)


form.addEventListener("submit", e => {
    e.preventDefault();

    verificarLogin();
})

function verificarLogin() {
    let dato = JSON.parse(localStorage.getItem("users"))

    const valorUsuario = usernameInput.value.trim();
    const valorcontrasena = contrasenaInput.value.trim();
    let i;
    for (i=0;i<dato.length;i++){
      if ("admin" == valorUsuario && "admin" == valorcontrasena){
        window.location.href = "../admin.html"    
      } else if (dato[i].username == valorUsuario && dato[i].password == valorcontrasena && dato[i].permission == "no"){
        alert("tu cuenta tiene que ser verificada, aguarda 24hr")
      } else if (dato[i].username == valorUsuario && dato[i].password == valorcontrasena && dato[i].permission == "si"){
        window.location.href = "pacientes.html"
        LoginUsuario()
      } else {
        alert("nombre o usuario incorrecto")
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



function LoginUsuario(){
	if(localStorage.getItem("usuarioLogueado")){
    let usuarioLogueado1 = usernameInput.value
    console.log(usuarioLogueado1)
    localStorage.setItem('usuarioLogueado',JSON.stringify(usuarioLogueado1));
	} else {
		let usuarioLogueado = usernameInput.value
    localStorage.setItem('usuarioLogueado',JSON.stringify(usuarioLogueado));
  }
}