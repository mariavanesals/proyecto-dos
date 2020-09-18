let doctors = JSON.parse(localStorage.getItem("doctors"));
let table2 = document.getElementById("table2");
table2.setAttribute("class", "tabla");
let data2 = Object.keys(doctors[0]);


generateTable(table2, doctors);
generateTableHead(table2,data2);

function generateTableHead(table2) {
    let thead = table2.createTHead();
    let row = thead.insertRow();
    for (let key of data2) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }    
}

function generateTable(table2, data2,) {
    for (let element of data2) {
      let row = table2.insertRow();

      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);       
      } 
    }
}

const usuarioSeleccionado2 = document.getElementById("dname")
const valorUsuario2 = usuarioSeleccionado2.value.trim();

function seleccionarUsuario2(){
  doctors = JSON.parse(localStorage.getItem("doctors"));
  const usuarioSeleccionado2 = document.getElementById("dname")
  const valorUsuario2 = usuarioSeleccionado2.value.trim();
  console.log(valorUsuario2)
  for (i=0;i<doctors.length;i++){
    if (doctors[i].username == valorUsuario2){
      doctors[i].permission = "si"
      localStorage.setItem('doctors',JSON.stringify(doctors));
      window.location="admin.html";
      console.log(doctors[i])   
    }
  }
}