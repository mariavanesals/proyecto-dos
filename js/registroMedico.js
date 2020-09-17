const form = document.getElementById('form');
const nombreCompleto = document.getElementById('nombreCompleto')
const usuario = document.getElementById('usuario');
const disciplina = document.getElementById('disciplina')
const email = document.getElementById('email');
const password = document.getElementById('contrasena');
const password2 = document.getElementById('contrasena2');
const valorNombreCompleto = nombreCompleto.value.trim();
const valorDisciplina = disciplina.value.trim();
const valorUsuario = usuario.value.trim();
const valorEmail = email.value.trim();
const valorContrasena = password.value.trim();
const valorContrasena2 = password2.value.trim();

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {


    let dato = JSON.parse(localStorage.getItem("doctors"))
    if(valorNombreCompleto === '') {
		mostrarError(nombreCompleto, 'El campo no puede quedar vacio');
	} else {
		mostrarExito(nombreCompleto);
    }
    
    if(valorDisciplina === '') {
		mostrarError(disciplina, 'El campo no puede quedar vacio');
	} else {
		mostrarExito(disciplina);
	}

	if(valorUsuario === '') {
		mostrarError(usuario, 'El campo no puede quedar vacio');
	} else {
		mostrarExito(usuario);
	}
	
	if(valorEmail === '') {
		mostrarError(email, 'El campo no puede quedar vacio');
	} else if (!isEmail(valorEmail)) {
		mostrarError(email, 'No es un email valido');
	} else {
		mostrarExito(email);
	}
	
	if(valorContrasena === '') {
		mostrarError(password, 'El campo no puede quedar vacio');
	} else {
		mostrarExito(password);
	}
	
	if(valorContrasena2 === '') {
		mostrarError(password2, 'El campo no puede quedar vacio');
	} else if(valorContrasena !== valorContrasena2) {
		mostrarError(password2, 'Las contrasenas no coinciden');
	} else{
		mostrarExito(password2);
	}
	
	function checkUserName(){
		for(i=0;i<dato.length-1;i++){
			if(valorUsuario == dato[i].username){
				mostrarError(usuario, "el usuario ingresado esta en uso")
				return false
			} 
			return true
		}
		
	}

	
    if(valorUsuario !== '' && valorEmail !== '' && valorContrasena !== '' && valorDisciplina !== '' && valorNombreCompleto !== '' && valorContrasena2 !== '' && checkUserName()) {
		alert("almacenado")
		almacenar()
		window.location="registroListo.html"
		
	}  
}

function almacenar(){
	if(localStorage.getItem("doctors")){
		let doctors1 = JSON.parse(localStorage.getItem("doctors"));
		doctors1.push(
			{
				username: usuario.value,
				password: password.value,
				mail: email.value,
				fullname: valorNombreCompleto.value,
				discipline: valorDisciplina.value,
				permission: "no"
				}
		)
		localStorage.setItem("doctors",JSON.stringify(doctors));
	} else {
		let doctors = Array(
			{
			username: usuario.value,
			password: password.value,
			mail: email.value,
			fullname: valorNombreCompleto.value,
			discipline: valorDisciplina.value,
			permission: "no"
			}
		);
		localStorage.setItem('doctors',JSON.stringify(doctors));
	}	
}




function mostrarError(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function mostrarExito(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

