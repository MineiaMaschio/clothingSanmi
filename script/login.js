function validarCampos() {
    let nome = document.getElementById('nomeCadastro');
    let email = document.getElementById('emailCadastro');
    let senha = document.getElementById('senhaCadastro');
    if (nome !== '' || email !== '' || senha !== '') {
        document.getElementById('botaoCancelar').disabled = false;
    }
}

function limparCampos() {
    document.getElementById('nomeCadastro').value = '';
    document.getElementById('emailCadastro').value = '';
    document.getElementById('senhaCadastro').value = '';
    event.preventDefault();
}

function validarLogin(form) {
    if (form.email.value == '') {
        alert('Preencha o campo email');
        form.email.focus();
        return false;
    } else if (form.senha.value == '') {
        alert('Preencha o campo senha');
        form.senha.focus();
        return false;
    }
}

function validarCadastro(form){
    if(form.nome.value === ''){
        alert('Preencha o campo nome');
        form.nome.focus();
        return false;
    }else if(form.email.value === ''){
        alert('Preencha o campo email');
        form.email.focus();
        return false;
    }else if(form.senha.value === ''){
        alert('Preencha o campo senha');
        form.senha.focus();
        return false;
    }
}