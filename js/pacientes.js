const form = document.getElementById("form")
const busqueda = document.getElementById("busqueda")
const valorBusqueda = busqueda.value.trim();
console.log(valorBusqueda)
let nombreUsuario = JSON.parse(localStorage.getItem("usuarioLogueado"))
document.getElementById("nombreUsuario").innerHTML = nombreUsuario

form.addEventListener("submit", e =>{
    e.preventDefault();
    buscar();
})


function buscar(){

    if(valorBusqueda == "cardiologo" || valorBusqueda === "cardiologia" || valorBusqueda == "corazon"){
        guardarBusqueda()
        alert("se busco")
    } else if (valorBusqueda == "dermatologo" || valorBusqueda == "dermatologia" || valorBusqueda == "piel"){
        window.location.href = "busqueda.html"
    } else if (valorBusqueda == "dentista" || valorBusqueda == "odontologia" || valorBusqueda == "caries"){
        window.location.href = "busqueda.html"
    } else {
        alert("no se encontro resultados de su busqueda")
    }
}

function guardarBusqueda(){
    if(localStorage.getItem("valorBusqueda")){
        let valorBusqueda1 = busqueda.value
        localStorage.setItem('valorBusqueda',JSON.stringify(valorBusqueda1));
        } else {
            let valorBusqueda2 = busqueda.value
        localStorage.setItem('valorBusqueda',JSON.stringify(valorBusqueda2));
      }
}
