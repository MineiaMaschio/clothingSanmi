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