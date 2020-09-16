let users = JSON.parse(localStorage.getItem("users"));
let table = document.querySelector("table");
table.setAttribute("class", "tabla");
let data = Object.keys(users[0]);
console.log(data)

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
console.log(valorUsuario)

console.log(users)

function seleccionarUsuario(users){
  users = JSON.parse(localStorage.getItem("users"));
  const usuarioSeleccionado = document.getElementById("fname")
  const valorUsuario = usuarioSeleccionado.value.trim();
  console.log(valorUsuario)
  for (i=0;i<users.length;i++){
    if (users[i].username == valorUsuario){
      users[i].permission = "si"
      console.log(users)
      localStorage.setItem('users',JSON.stringify(users));
      window.location="admin.html";
      console.log(users[i])   
    }
  }
}