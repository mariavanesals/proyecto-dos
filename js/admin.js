let users = JSON.parse(localStorage.getItem("users"));

let table = document.getElementById("table1");
table.setAttribute("class", "tabla");
let usuarioLogueado = "Admin"
document.getElementById("usuarioLogueado").innerHTML = usuarioLogueado
let data = Object.keys(users[0]);

const btncerrarSesion = document.getElementById("cerrarSesion");

btncerrarSesion.addEventListener("click", e => {
  e.preventDefault();
  cerrarSesion();
})
  function cerrarSesion(){
    const deslogueo = "sinLogin"
  };

  if (usuarioLogueado === "sinLogin"){
      window.location="permisoDenegado.html";
  };





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

seleccionarFila()

function seleccionarFila() {
    var table = document.getElementById('table1');
    var cells = table.getElementsByTagName('td');

    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        cell.onclick = function () {
            var rowId = this.parentNode.rowIndex;
            var rowsNotSelected = table.getElementsByTagName('tr');
            for (var row = 0; row < rowsNotSelected.length; row++) {
                rowsNotSelected[row].style.backgroundColor = "";
                rowsNotSelected[row].classList.remove('selected');
            }
            var rowSelected = table.getElementsByTagName('tr')[rowId];
            rowSelected.className += " selected";

            usuarioAHabilitar = rowSelected.cells[0].innerHTML;
            document.getElementById("nombreUsuario").innerHTML = usuarioAHabilitar

        }
    }
}


function seleccionarUsuario(users){
  users = JSON.parse(localStorage.getItem("users"));
  const usuarioAHabilitar = document.getElementById("nombreUsuario")
  const usuarioAHabilitarValue = usuarioAHabilitar.textContent
  console.log(usuarioAHabilitar)
  for (i=0;i<users.length;i++){
    if (users[i].usuario == usuarioAHabilitarValue){
      users[i].permiso = "si"
      localStorage.setItem('users',JSON.stringify(users));
      window.location="adminPaciente.html";
    }
  }
}