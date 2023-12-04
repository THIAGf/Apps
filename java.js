let container = document.querySelector('div');

let input = document.getElementById('password');

let icon = document.querySelector('img');

icon.addEventListener('click', function() {

container.classList.toggle('visible');
 if(container.classList.contains('visible')) {

icon.src = 'img/eye-off.svg';

input.type = 'text';

} else {

icon.src = 'img/eye.svg'

input.type = 'password';

}

});


document.getElementById('emailInput').addEventListener('input', function() {
	var emailInput = this;
	var inputValue = emailInput.value;

	if (inputValue.endsWith("@")) {
		emailInput.value += 'gmail.com';
	}
});


const saida = document.querySelector(".saida");

function digitacao(texto , contador){
	if(contador < texto.length){
			setTimeout(()=>{
				saida.textContent += texto.charAt(contador);
				contador++;
				digitacao(texto , contador);
			}, 90)
	}
}
digitacao("Apps/Jogos",0);






document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('password');

    const emailText = 'Seu Email@example.com';
    const passwordText = 'SuaSenha123';

    let emailIndex = 0;
    let passwordIndex = 0;
    let typing = false;

    function typeEmail() {
        if (!typing && emailIndex < emailText.length) {
            emailInput.value += emailText.charAt(emailIndex);
            emailIndex++;
            setTimeout(typeEmail, 400);
        } else {
            emailIndex = 0;
            emailInput.value = '';
            typePassword();
        }
    }

    function typePassword() {
        if (!typing && passwordIndex < passwordText.length) {
            passwordInput.value += passwordText.charAt(passwordIndex);
            passwordIndex++;
            setTimeout(typePassword, 400);
        } else {
            passwordIndex = 0;
            passwordInput.value = '';
            typeEmail();
        }
    }

    typeEmail();

    setTimeout(function () {
        emailInput.value = '';
        typePassword();
    }, emailText.length * 100 + 1000); // Wait for email to finish typing

    document.addEventListener('input', function () {
        typing = true;
    });

    // Adicione mais animações ou personalizações conforme necessário
});
