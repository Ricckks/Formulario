let validation = function () {
    let formName = document.getElementById('formName');
    let formEmail = document.getElementById('formEmail');
    let formConfirmaEmail = document.getElementById('formConfirmaEmail');
    let formSenha = document.getElementById('formSenha');
    let formConfirmaSenha = document.getElementById('formConfirmaSenha');

    let formulario = [formName, formEmail, formConfirmaEmail,formSenha,formConfirmaSenha];

    for(let i = 0; i < formulario.length; i++){
        if (formulario[i].value === ''){
            formulario[i].className = 'error form-control'
        }else{
            formulario[i].className = 'form-control'
        }
    }
};