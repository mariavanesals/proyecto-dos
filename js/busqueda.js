let busqueda = JSON.parse(localStorage.getItem("valorBusqueda"))
let table = document.getElementById("table1");
table.setAttribute("class", "tabla");
let nombreUsuario = JSON.parse(localStorage.getItem("usuarioLogueado"))

document.getElementById("nombreUsuario").innerHTML = nombreUsuario;

document.getElementById("busquedaInput").placeholder = busqueda;

let doctores = JSON.parse(localStorage.getItem("doctors"))
let dentistas = doctores.filter(doctores => doctores.discipline === "dentista");
let neurocirujanos = doctores.filter(doctores => doctores.discipline === "neurocirujano");
let dermatologos = doctores.filter(doctores => doctores.discipline === "dermatologo");


let data = Object.keys(dentistas[0]);
console.log(data)

if(busqueda == "neurocirujano" || busqueda == "neurologia" || busqueda == "cerebro"){
        tablaNeurocirujano()
    } else if (busqueda == "dermatologo" || busqueda == "dermatologia" || busqueda == "piel"){
        tablaDermatologos()
    } else if (busqueda == "dentista" || busqueda == "odontologia" || busqueda == "caries"){
        tablaDentistas()
    }   else {
    alert("no se encontro resultados de su busqueda")
}



function tablaDentistas(){
    let data = Object.keys(dentistas[0]);
    generateTable(table, dentistas);
    generateTableHead(table,data);
}

function tablaDermatologos(){
    let data = Object.keys(dermatologos[0]);
    generateTable(table, dermatologos);
    generateTableHead(table,data);
}
function tablaNeurocirujano(){
    let data = Object.keys(neurocirujanos[0]);
    generateTable(table, neurocirujanos);
    generateTableHead(table,data);
}

function generateTableHead(table) {
    let thead = table.createTHead();
    let row = thead.insertRow();

    for (let key of data) {
        if(key == "fullname" || key == "discipline"){
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
        }
    }
      
}

function generateTable(table, data) {
    for (let element of data) {
      let row = table1.insertRow();
      row.addEventListener("click", () => {nombreFuncion()})

      for (key in element) {
        if(key == "fullname" || key == "discipline"){
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
        }       
      } 
    }
}



function nombreFuncion(){
    alert("hola")
}