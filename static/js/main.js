// Função para confirmar exclusão
function confirmDelete(event) {
    if (!confirm('Tem certeza que deseja excluir esta ave?')) {
        event.preventDefault();
    }
}

// Função para mostrar/esconder senha
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
}

// Função para validar formulário de login
function validateLoginForm(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        event.preventDefault();
        alert('Por favor, preencha todos os campos');
    }
}

// Função para validar formulário de criação de ave
function validateAveForm(event) {
    const nome = document.getElementById('nome').value;
    const nomeCientifico = document.getElementById('nome_cientifico').value;
    const descricao = document.getElementById('descricao').value;
    const dimorfismo = document.getElementById('dimorfismo').value;
    const ocorrencia = document.getElementById('ocorrencia').value;
    const conservacao = document.getElementById('conservacao').value;

    if (!nome || !nomeCientifico || !descricao || !dimorfismo || !ocorrencia || !conservacao) {
        event.preventDefault();
        alert('Por favor, preencha todos os campos obrigatórios');
    }
}

// Função para preview de imagem
function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('image-preview');
            if (preview) {
                preview.src = e.target.result;
                preview.style.display = 'block';
            }
        }
        reader.readAsDataURL(file);
    }
}

// Adicionar event listeners quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar listener para formulário de login
    const loginForm = document.querySelector('form[action*="login"]');
    if (loginForm) {
        loginForm.addEventListener('submit', validateLoginForm);
    }

    // Adicionar listener para formulário de criação de ave
    const aveForm = document.querySelector('form[action*="create"]');
    if (aveForm) {
        aveForm.addEventListener('submit', validateAveForm);
    }

    // Adicionar listener para input de imagem
    const imageInput = document.querySelector('input[type="file"]');
    if (imageInput) {
        imageInput.addEventListener('change', previewImage);
    }

    // Adicionar listeners para botões de exclusão
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', confirmDelete);
    });
});
