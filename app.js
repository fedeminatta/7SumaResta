sumar();
restar();
function sumar() {
	const input1 = document.querySelector('#input');
	const input2 = document.querySelector('#input2');
	const resultado = document.querySelector('#resultado');
	const btn = document.querySelector('#btn');
	const contenido = document.querySelector('.contenido');
	const puntosSuma = document.querySelector('#puntosSuma');

	let puntuacion = 0;
	puntosSuma.textContent = puntuacion;

	input1.value = Math.floor(Math.random() * 500);
	input2.value = Math.floor(Math.random() * 500);

	btn.addEventListener('click', function () {
		let numero1 = parseInt(input1.value);
		let numero2 = parseInt(input2.value);
		let resultadoValue = parseInt(resultado.value);

		if (resultadoValue == numero1 + numero2) {
			const span = document.createElement('span');
			span.innerText = 'Resultado Correcto';
			span.classList = 'mensaje';
			contenido.append(span);
			input1.value = Math.floor(Math.random() * 500);
			input2.value = Math.floor(Math.random() * 500);
			puntosSuma.textContent = ++puntuacion;
			resultado.value = '';
			resultado.focus();
			setTimeout(() => {
				span.remove();
			}, 3000);
		} else {
			const span = document.createElement('span');
			span.innerText = 'Resultado Incorrecto';
			span.classList = 'mensaje';
			contenido.append(span);
			puntuacion = 0;
			puntosSuma.textContent = puntuacion;
			input1.value = Math.floor(Math.random() * 500);
			input2.value = Math.floor(Math.random() * 500);
			resultado.value = '';
			resultado.focus();
			setTimeout(() => {
				span.remove();
			}, 3000);
		}
	});
}
function restar() {
	const input1Resta = document.querySelector('#inputResta');
	const input2Resta = document.querySelector('#input2Resta');
	const resultadoResta = document.querySelector('#resultadoResta');
	const btnResta = document.querySelector('#btnResta');
	const contenido = document.querySelector('.contenido');
	const puntosResta = document.querySelector('#puntosResta');

	let puntuacion = 0;
	puntosResta.textContent = puntuacion;

	input1Resta.value = Math.floor(Math.random() * 500);
	input2Resta.value = Math.floor(Math.random() * 100);

	btnResta.addEventListener('click', function () {
		let numero1 = parseInt(input1Resta.value);
		let numero2 = parseInt(input2Resta.value);
		let resultadoValue = parseInt(resultadoResta.value);

		if (resultadoValue == numero1 - numero2) {
			const span = document.createElement('span');
			span.innerText = 'Resultado Correcto';
			span.classList = 'mensaje';
			contenido.append(span);
			input1Resta.value = Math.floor(Math.random() * 500);
			input2Resta.value = Math.floor(Math.random() * 100);
			puntosResta.textContent = ++puntuacion;
			resultadoResta.value = '';
			resultadoResta.focus();
			setTimeout(() => {
				span.remove();
			}, 3000);
		} else {
			const span = document.createElement('span');
			span.innerText = 'Resultado Incorrecto';
			span.classList = 'mensaje';
			contenido.append(span);
			puntuacion = 0;
			puntosResta.textContent = puntuacion;
			input1Resta.value = Math.floor(Math.random() * 500);
			input2Resta.value = Math.floor(Math.random() * 100);
			resultadoResta.value = '';
			resultadoResta.focus();
			setTimeout(() => {
				span.remove();
			}, 3000);
		}
	});
}
