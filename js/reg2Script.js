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
	// trim to remove the whitespaces
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
    
    if(valorUsuario !== '' && valorEmail !== '') {
        window.location.href = '../pacientes.html';
        let user = Array{{
            username: valorUsuario.value,
            email: valorEmail.value,
            password: valorContrasena.value
        } 
    };

    
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















