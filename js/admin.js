let baseDeDatos = JSON.parse(localStorage.getItem("users"));
let table = document.querySelector("table");
table.setAttribute("class", "tabla");
let data = Object.keys(baseDeDatos[0]);
console.log(data)

generateTable(table, baseDeDatos);
generateTableHead(table,data);

function generateTableHead(table) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }    
}

function generateTable(table, data,) {
    for (let element of data) {
      let row = table.insertRow();

      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);       
      } 
    }
}

const usuarioSeleccionado = document.getElementById("fname")
const valorUsuario = usuarioSeleccionado.value.trim();



function seleccionarUsuario(baseDeDatos){
  if(valorUsuario === dato[i].username){
    window.location.href = "medico.html"

  } else if(valorUsuario === dato[i].username && valorcontrasena === dato[i].password){
    window.location.href = "medico.html"
  }
}



