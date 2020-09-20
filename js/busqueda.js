let busqueda = JSON.parse(localStorage.getItem("valorBusqueda"))
console.log(busqueda)

document.getElementById("busquedaInput").placeholder = busqueda;

if(busqueda == "cardiologo" || busqueda == "cardiologia" || busqueda == "corazon"){
        tablaCardiologos()
    } else if (busqueda == "dermatologo" || busqueda == "dermatologia" || busqueda == "piel"){
        tablaDermatologos()
    } else if (busqueda == "dentista" || busqueda == "odontologia" || busqueda == "caries"){
        tablaDentistas()
    }   else {
    alert("no se encontro resultados de su busqueda")
}

function tablaCardiologos(){
    let doctores = JSON.parse(localStorage.getItem("doctors"))
    console.log(doctores)

    for(i=0;i<doctores.length;i++){
        if(doctores[i].discipline == "cardiologo"){
            console.log(doctores[i].username)
        }
        
    }    
}



/*if(doctores[i].discipline == "cardiologia")
		cardiologos.push(
			{
				username: usuario.value,
				password: password.value,
				mail: email.value,
				fullname: nombreCompleto.value,
				discipline: disciplina.value,
				permission: "no"
				}
        )*/