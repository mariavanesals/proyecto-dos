const form = document.getElementById("form")
const busqueda = document.getElementById("busqueda")
let nombreUsuario = JSON.parse(localStorage.getItem("usuarioLogueado"))
document.getElementById("nombreUsuario").innerHTML = nombreUsuario

form.addEventListener("submit", e =>{
    e.preventDefault();
    buscar();
})


function buscar(){
    let valorBusqueda = busqueda.value.trim();
    if(valorBusqueda == "cardiologo" || valorBusqueda == "cardiologia" || valorBusqueda == "corazon"){
        guardarBusqueda()
        window.location.href = "busqueda.html"
    } else if (valorBusqueda == "dermatologo" || valorBusqueda == "dermatologia" || valorBusqueda == "piel"){
        guardarBusqueda()
        window.location.href = "busqueda.html"
    } else if (valorBusqueda == "dentista" || valorBusqueda == "odontologia" || valorBusqueda == "caries"){
        guardarBusqueda()
        window.location.href = "busqueda.html"
    } else {
        alert("no se encontro resultados de su busqueda")
    }
}

function guardarBusqueda(){
    if(localStorage.getItem("valorBusqueda")){
        let valorBusqueda1 = busqueda.value
        console.log(valorBusqueda1)
        localStorage.setItem('valorBusqueda',JSON.stringify(valorBusqueda1));
        } else {
            let valorBusqueda2 = busqueda.value
        localStorage.setItem('valorBusqueda',JSON.stringify(valorBusqueda2));
      }
}
