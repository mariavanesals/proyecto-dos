let nombreUsuario = JSON.parse(localStorage.getItem("usuarioLogueado"))
let table = document.getElementById("table1");
table.setAttribute("class", "tabla");

let turnosArchivados = JSON.parse(localStorage.getItem("turnosConfirmados"))
let TurnosUsuarioLogueado = turnosArchivados.filter(turnosConfirmados => turnosConfirmados.paciente === nombreUsuario);
console.log(TurnosUsuarioLogueado)
let data = Object.keys(TurnosUsuarioLogueado[0]);
console.log(data)

document.getElementById("nombreUsuario").innerHTML = nombreUsuario;

tablaTurnos()


function tablaTurnos(){
    let data = Object.keys(TurnosUsuarioLogueado[0]);
    generateTable(table,TurnosUsuarioLogueado);
    generateTableHead(table,data);
}



function generateTableHead(table) {
    table = document.getElementById("table1");
    data = Object.keys(TurnosUsuarioLogueado[0])
    let thead = table.createTHead();
    let row = thead.insertRow();

    for (let key of data) {
        if(key == "paciente" || key == "hora" || key == "dia"){
            let th = document.createElement("th");
            let text = document.createTextNode(key);
            th.appendChild(text);
            row.appendChild(th);
            }
    }
      
}

function generateTable(data) {
    data = Object.keys(TurnosUsuarioLogueado[0])

    for (let element of data) {
      let row = table1.insertRow();

      for (key in element) {
        if(key == "paciente" || key == "hora" || key == "dia"){
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
        }       
      } 
    }
}