const form = document.getElementById("form")
const usernameInput = document.getElementById("usuario")
const contrasenaInput = document.getElementById("contrasena")
let usuarioLogueado1 = usernameInput.value

form.addEventListener("submit", e => {
    e.preventDefault();

    verificarLogin();
})

function verificarLogin() {
    let dato = JSON.parse(localStorage.getItem("users"))
    console.log(dato)

    const valorUsuario = usernameInput.value.trim();
    const valorcontrasena = contrasenaInput.value.trim();
    if ("admin" == valorUsuario && "admin" == valorcontrasena){
      window.location.href = "../html/adminPaciente.html"
      let adminLogin = "adminLogueado"
      localStorage.setItem('adminLogin',JSON.stringify(adminLogin));
    }
    const busquedaUsuario = dato.find(user => {
      if(user.usuario === valorUsuario && user.contrasena === valorcontrasena){
        return user
      }
    })
    if(busquedaUsuario){
      if (busquedaUsuario.permiso){
        window.location.href = "../html/busquedaPaciente.html"
        LoginUsuario()
      } else {
        let aviso = "tienes que aguardar a la verificacion de la cuenta"
        mostrarModal(aviso)
      }
    } else{
      let aviso = "las credenciales enviadas no son correctas"
      mostrarModal(aviso)
    }
  }


function mostrarModal(aviso){
  let modal = document.getElementById("myModal")
  var span = document.getElementsByClassName("close")[0];
  const valorUsuario = usernameInput.value.trim();
  const valorcontrasena = contrasenaInput.value.trim();

  if ("admin" == valorUsuario && "admin" == valorcontrasena){
    modal.style.display = "none";
  } else{
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  document.getElementById("modalText").innerHTML = aviso;

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

