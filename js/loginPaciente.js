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
    console.log(valorUsuario)
    console.log(valorcontrasena)
    let notUser = false;

    for (let i=0;i<dato.length;i++){
      if ("admin" == valorUsuario && "admin" == valorcontrasena){
        window.location.href = "../html/adminPaciente.html"    
      } else if (dato[i].usuario == valorUsuario && dato[i].contrasena == valorcontrasena && dato[i].permiso == "no"){
        let aviso = "tienes que aguardar a la verificacion de la cuenta"
        mostrarModal(aviso)
        notUser = false
      } else if (dato[i].usuario == valorUsuario && dato[i].contrasena == valorcontrasena && dato[i].permiso == "si"){
        notUser = false
        window.location.href = "../html/busquedaPaciente.html"
        LoginUsuario()
      } else if (dato[i].usuario !== valorUsuario || dato[i].contrasena !== valorcontrasena){
        notUser = true
      }
    }
    console.log(notUser)
    if(notUser ){

      alert("no es el usuario")

    }


  }


function mostrarModal(aviso){
  let modal = document.getElementById("myModal")
  var span = document.getElementsByClassName("close")[0];

  modal.style.display = "block";

  span.onclick = function() {
    modal.style.display = "none";
  }

  document.getElementById("modalText").innerHTML = aviso;

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

const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
