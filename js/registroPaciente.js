const form = document.getElementById('form');
const usuario = document.getElementById('usuario');
const email = document.getElementById('email');
const password = document.getElementById('contrasena');
const password2 = document.getElementById('contrasena2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const valorUsuario = usuario.value.trim();
	const valorEmail = email.value.trim();
	const valorContrasena = password.value.trim();
	const valorContrasena2 = password2.value.trim();

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
		
			let dato = JSON.parse(localStorage.getItem("users"))
			for(i=0;i<dato.length;i++){
				if(valorUsuario === dato[i].usuario){
					mostrarError(usuario, "el usuario ingresado esta en uso")
					return false
				} 
				return true
			}
				
	}

	
    if(valorUsuario !== '' && valorEmail !== '' && valorContrasena !== '' && checkUserName()) {
		almacenar()
		window.location="registroListo.html"
		
	}
     
}
 
function almacenar(){
	if(localStorage.getItem("users")){
		let users1 = JSON.parse(localStorage.getItem("users"));
		users1.push(
			{
				usuario: usuario.value,
				contrasena: password.value,
				mail: email.value,
				permiso: false
			}
		)
		localStorage.setItem("users",JSON.stringify(users1));
	} else {
		let users = Array(
			{
				usuario: usuario.value,
				contrasena: password.value,
				mail: email.value,
				permiso: false
			}
		);
		localStorage.setItem('users',JSON.stringify(users));
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


