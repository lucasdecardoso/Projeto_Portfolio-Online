//traz os elementos do formulário para variáveis
var botao = document.getElementById('botaoEnvio');
var nome = document.getElementById('nome');
var email =document.getElementById('email');
var mensagem =document.getElementById('mensagem');

//executa o código somente ao clicar no botão
botao.addEventListener('click', function() { 
    if (nome.value == "" || email.value == "" || mensagem.value == ""){ //só envia se os campos estiverem preenchidos
        alert('Todos os campos precisam estar preenchidos!');
    } else if (!email.value.includes('@')){ //vai verificar se é um email válido
        alert('Insira um e-mail válido!'); 
    } else{
        alert('Sua mensagem foi enviada com sucesso!'); 
    }
});


