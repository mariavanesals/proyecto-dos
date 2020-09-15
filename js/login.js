const form = document.getElementById("form")
const usernameInput = document.getElementById("usuario")
const contrasenaInput = document.getElementById("contrasena")

form.addEventListener("submit", e => {
    e.preventDefault();

    verificarLogin();
})

let dato = JSON.parse(localStorage.getItem("users"))
const valorUsuario = usernameInput.value.trim();
const valorcontrasena = contrasenaInput.value.trim();

let resultado = (dato[i].username == valorUsuario)
      console.log(resultado)

function verificarLogin(dato, username) {
    var dato = JSON.parse(localStorage.getItem("users"))
    let dato2 = dato[4].username
    let dato3 = dato[4].password
    const valorUsuario = usernameInput.value.trim();
    const valorcontrasena = contrasenaInput.value.trim();
    let i;
    let resultado;
    console.log(dato.length)
    console.log(dato[1].username)
    console.log(valorUsuario)
    
    for (i=0;i<dato.length;i++){
      if ("admin" == valorUsuario && "admin" == valorcontrasena){
        window.location.href = "admin.html"    
      } else if (dato[i].username == valorUsuario && dato[i].password == valorcontrasena && dato[i].permission == "no"){
        alert("tu cuenta tiene que ser verificada, aguarda 24hr")
      } else if (dato[i].username == valorUsuario && dato[i].password == valorcontrasena && dato[i].permission == "si"){
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