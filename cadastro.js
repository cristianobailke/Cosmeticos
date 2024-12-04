document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastroForm');
    const senha = document.getElementById('senha');
    const confirmarSenha = document.getElementById('confirmarSenha');
    const telefone = document.getElementById('telefone');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            alert('Cadastro realizado com sucesso!');
            form.reset();
        }
    });

    function validateForm() {
        let isValid = true;

        form.querySelectorAll('[required]').forEach(field => {
            if (!field.value) {
                setInvalid(field, 'Este campo é obrigatório.');
                isValid = false;
            } else {
                setValid(field);
            }
        });

        
        const email = document.getElementById('email');
        if (email.value && !isValidEmail(email.value)) {
            setInvalid(email, 'Por favor, insira um e-mail válido.');
            isValid = false;
        }

        
        if (senha.value.length < 8) {
            setInvalid(senha, 'A senha deve ter pelo menos 8 caracteres.');
            isValid = false;
        }

     
        if (senha.value !== confirmarSenha.value) {
            setInvalid(confirmarSenha, 'As senhas não coincidem.');
            isValid = false;
        }

        
        if (telefone.value && !isValidPhone(telefone.value)) {
            setInvalid(telefone, 'Por favor, insira um número de telefone válido.');
            isValid = false;
        }

        return isValid;
    }

    function setInvalid(field, message) {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
        field.nextElementSibling.textContent = message;
    }

    function setValid(field) {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPhone(phone) {
        return /^(\+55|0)\s?(\d{2})\s?(\d{4,5})-?(\d{4})$/.test(phone);
    }
});

