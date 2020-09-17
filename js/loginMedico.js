const form = document.getElementById("form")
const usernameInput = document.getElementById("usuario")
const contrasenaInput = document.getElementById("contrasena")
console.log("envio")

form.addEventListener("submit", e => {
    e.preventDefault();

    verificarLogin();
})

let dato = JSON.parse(localStorage.getItem("users"))
const valorUsuario = usernameInput.value.trim();
const valorContrasena = contrasenaInput.value.trim();

function verificarLogin(dato,valorUsuario) {
    var dato = JSON.parse(localStorage.getItem("users"))
    const valorUsuario = usernameInput.value.trim();
    const valorContrasena = contrasenaInput.value.trim();
    for (i=0;i<dato.length;i++){
      if ("admin" == valorUsuario && "admin" == valorContrasena){
        window.location.href = "../admin.html"    
      } else if (dato[i].username == valorUsuario && dato[i].password == valorContrasena && dato[i].permission == "no"){
        alert("tu cuenta tiene que ser verificada, aguarda 24hr")
      } else if (dato[i].username == valorUsuario && dato[i].password == valorContrasena && dato[i].permission == "si"){
        window.location.href = "medico.html"
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