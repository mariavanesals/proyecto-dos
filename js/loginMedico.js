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
    const valorcontrasena = contrasenaInput.value.trim();
    if ("admin" == valorUsuario && "admin" == valorcontrasena){
      window.location.href = "../html/adminMedico.html"
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
        window.location.href = "../html/medico.html"
        LoginMedico()
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

function LoginMedico(){
	if(localStorage.getItem("medicoLogueado")){
    let medicoLogueado1 = usernameInput.value
    localStorage.setItem('medicoLogueado',JSON.stringify(medicoLogueado1));
	} else {
		let usuarioLogueado = usernameInput.value
    localStorage.setItem('medicoLogueado',JSON.stringify(usuarioLogueado));
  }
}