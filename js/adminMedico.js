let doctors = JSON.parse(localStorage.getItem("doctors"));
console.log(doctors)
let table2 = document.getElementById("table2");
table2.setAttribute("class", "tabla");
let data2 = Object.keys(doctors[0]);
let adminActivo = "Admin"
document.getElementById("usuarioLogueado").innerHTML = adminActivo
let cerrarSesion = document.getElementById("cerrarSesion")
let adminLogin = JSON.parse(localStorage.getItem("adminLogin"));



if(adminLogin === "sinLogin"){
    window.location.href = "permisoDenegado.html"
}

cerrarSesion.addEventListener("click", e =>{

  e.preventDefault();
  deslogueo();
  window.location.href = "../html/home.html"
})

function deslogueo(){
if(localStorage.getItem("adminLogin")){
  let adminLogin1 = "sinLogin"
  localStorage.setItem('adminLogin',JSON.stringify(adminLogin1));
  } else {
  let adminLogin = "sinLogin"
  localStorage.setItem('adminLogin',JSON.stringify(adminLogin));
  }
}


generateTable(table2, doctors);
generateTableHead(table2,data2);

function generateTableHead(table2) {
    let thead = table2.createTHead();
    let row = thead.insertRow();
    for (let key of data2) {
      if(key == "nombreCompleto" || key == "disciplina" || key == "permiso" || key == "sucursal" ){
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
      }
    }    
}

function generateTable(table2, data2,) {
    for (let element of data2) {
      let row = table2.insertRow();

      for (key in element) {
        if(key == "nombreCompleto" || key == "disciplina" || key == "permiso" || key == "sucursal"){
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
        }       
      } 
    }
}

seleccionarFila()

function seleccionarFila() {
    var table = document.getElementById('table2');
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
            document.getElementById("nombreMedico").innerHTML = usuarioAHabilitar

        }
    }
}


function seleccionarUsuario(){
  doctors = JSON.parse(localStorage.getItem("doctors"));
  const MedicoAHabilitar = document.getElementById("nombreMedico")
  const MedicoAHabilitarValue = MedicoAHabilitar.textContent
  console.log(MedicoAHabilitarValue)
  for (i=0;i<doctors.length;i++){
    if (doctors[i].nombreCompleto == MedicoAHabilitarValue){
      doctors[i].permiso = true
      localStorage.setItem('doctors',JSON.stringify(doctors));
      window.location="adminMedico.html";
      console.log(doctors[i])   
    }
  }
}