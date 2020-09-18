let users = JSON.parse(localStorage.getItem("users"));
let table = document.getElementById("table1");
table.setAttribute("class", "tabla");
let data = Object.keys(users[0]);

generateTable(table, users);
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


function seleccionarUsuario(users){
  users = JSON.parse(localStorage.getItem("users"));
  const usuarioSeleccionado = document.getElementById("fname")
  const valorUsuario = usuarioSeleccionado.value.trim();
  for (i=0;i<users.length;i++){
    if (users[i].username == valorUsuario){
      users[i].permission = "si"
      localStorage.setItem('users',JSON.stringify(users));
      window.location="admin.html";
    }
  }
}