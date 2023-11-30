function showScreen(screenId) {
    document.getElementById('main-screen').style.display = 'none';
    document.getElementById('admin-screen').style.display = 'none';
    document.getElementById('contact-screen').style.display = 'none';

    document.getElementById(screenId).style.display = 'block';
}

function adminLogin() {
    // Implementar a lógica de login administrativo aqui
    alert('Login administrativo realizado com sucesso!');
}

function sendContact() {
    // Implementar a lógica de envio de contato aqui
    alert('Mensagem de contato enviada com sucesso!');
}
