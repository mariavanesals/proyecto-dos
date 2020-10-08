const form = document.getElementById("form1")
console.log(form)
const busqueda = document.getElementById("busqueda")
let nombreUsuario = JSON.parse(localStorage.getItem("usuarioLogueado"))
document.getElementById("nombreUsuario").innerHTML = nombreUsuario
const cerrarSesion = document.getElementById("cerrarSesion");
let busquedasPosibles = ["neurocirujano", "neurologo", "cerebro", "dermatologo", "dermatologia", "piel", "dentista", "odontologia", "caries"]
localStorage.setItem('busquedasPosibles',JSON.stringify(busquedasPosibles));

if(nombreUsuario === "sinLogin"){
    window.location.href = "permisoDenegado.html"
}

form.addEventListener("submit", e =>{

    e.preventDefault();
    buscar();
})

cerrarSesion.addEventListener("click", e =>{

    e.preventDefault();
    deslogueo();
    window.location.href = "../html/home.html"
})

function deslogueo(){
	if(localStorage.getItem("usuarioLogueado")){
    let usuarioLogueado1 = "sinLogin"
    localStorage.setItem('usuarioLogueado',JSON.stringify(usuarioLogueado1));
	} else {
		let usuarioLogueado = "sinLogin"
    localStorage.setItem('usuarioLogueado',JSON.stringify(usuarioLogueado));
  }
}

function buscar(){
    let valorBusqueda = busqueda.value;
    let busquedasPosibles = JSON.parse(localStorage.getItem("busquedasPosibles"))
            
    const busquedaUsuario = busquedasPosibles.find(user => {
        if(user === valorBusqueda){
          return user
        }
    })

    if(busquedaUsuario){
        guardarBusqueda()
        window.location.href = "../html/busqueda.html"
    } else{
        alert("no se encontro resultados de su busqueda")
    }

    /*if(valorBusqueda == "neurocirujano" || valorBusqueda == "neurologo" || valorBusqueda == "cerebro"){
        guardarBusqueda()
        window.location.href = "../html/busqueda.html"
    } else if (valorBusqueda == "dermatologo" || valorBusqueda == "dermatologia" || valorBusqueda == "piel"){
        guardarBusqueda()
        window.location.href = "../html/busqueda.html"
    } else if (valorBusqueda == "dentista" || valorBusqueda == "odontologia" || valorBusqueda == "caries"){
        guardarBusqueda()
        window.location.href = "../html/busqueda.html"
    } else {
        alert("no se encontro resultados de su busqueda")
    }*/
}

function guardarBusqueda(){
    valorBusqueda = busqueda.value;
    console.log(valorBusqueda)
    if(localStorage.getItem("valorBusqueda")){
        let valorBusqueda1 = busqueda.value
        console.log(valorBusqueda1)
        localStorage.setItem('valorBusqueda',JSON.stringify(valorBusqueda1));
        } else {
            let valorBusqueda2 = busqueda.value
        localStorage.setItem('valorBusqueda',JSON.stringify(valorBusqueda2));
      }
}
