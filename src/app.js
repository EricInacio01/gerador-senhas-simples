document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario-generar-senha');
    const listaDeSenhas = document.getElementById('lista-senhas-salvas');
    const inputDeComprimento = document.getElementById('comprimento');
    const checkboxNumeros = document.getElementById('inclui-numeros');
    const checkboxCaracteresEspeciais = document.getElementById('inclui-caracteres-especiais');
    const checkboxMaiusculas = document.getElementById('inclui-maiusc');
    const checkboxMinusculas = document.getElementById('inclui-minusculas');
    const displayComprimento = document.getElementById('display-comprimento');

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        gerarSenha();
    });

    inputDeComprimento.addEventListener('input', function() {
        displayComprimento.textContent = this.value;
    });

    function gerarSenha() {
        const comprimento = inputDeComprimento.value;
        const caracteres = obterCaracteresBaseadoEmOpcoes(checkboxNumeros, checkboxCaracteresEspeciais, checkboxMaiusculas, checkboxMinusculas);
        const senha = gerarStringAleatoria(comprimento, caracteres);
        mostrarSenhaGerada(senha);
        salvarSenha(senha);
    }

    function obterCaracteresBaseadoEmOpcoes(checkboxNumeros, checkboxCaracteresEspeciais, checkboxMaiusculas, checkboxMinusculas) {
        let caracteres = 'abcdefghijklmnopqrstuvwxyz';
        if (checkboxMaiusculas) caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (checkboxNumeros) caracteres += '0123456789';
        if (checkboxCaracteresEspeciais) caracteres += '@#$%^&*()_+~`|}{[]\\:;"\'<>?,./-=';
        return caracteres;
    }

    function gerarStringAleatoria(comprimento, caracteres) {
        let resultado = '';
        for (let i = 0; i < comprimento; i++) {
            resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return resultado;
    }

    function mostrarSenhaGerada(senha) {
        alert(`Sua senha gerada é: ${senha}`);
    }

    function salvarSenha(senha) {
        const senhasSalvas = JSON.parse(localStorage.getItem('senhasSalvas')) || [];
        senhasSalvas.push(senha);
        localStorage.setItem('senhasSalvas', JSON.stringify(senhasSalvas));
        atualizarListaDeSenhas();
    }

    function atualizarListaDeSenhas() {
        const senhas = JSON.parse(localStorage.getItem('senhasSalvas')) || [];
        listaDeSenhas.innerHTML = '';
        senhas.forEach((senha, indice) => {
            const itemLista = document.createElement('li');
            itemLista.textContent = `Senha ${indice + 1}: ${senha}`;
            itemLista.addEventListener('click', function() {
                editarSenha(indice);
            });
            listaDeSenhas.appendChild(itemLista);
        });
    }

        // usei o json.parse para converter os dados no localstorage onde são armazenados as senhas
    function editarSenha(indice) {
        const senhas = JSON.parse(localStorage.getItem('senhasSalvas')) || [];
        const senhaParaEditar = senhas[indice];
        const senhaEditada = prompt(`Editar senha ${indice + 1}`, senhaParaEditar);
        if (senhaEditada) {
            senhas[indice] = senhaEditada;
            localStorage.setItem('senhasSalvas', JSON.stringify(senhas));
            atualizarListaDeSenhas();
        }
    }
    // toda vez que um usuário adicionar uma senha, ele atualiza chamando a função atualizarListaDeSenhas
    atualizarListaDeSenhas(); 
});
