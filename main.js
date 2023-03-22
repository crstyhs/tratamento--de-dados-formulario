
async function busca_endereco(cep){
    var msg_erro = document.getElementById('erro');
    msg_erro.innerHTML = "";
    try{
    var consulta_cep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consulta_cep_convertida = await consulta_cep.json();
    if(consulta_cep_convertida.erro){
        throw Error('CEP não existente')
    }
    var cidade = document.getElementById('cidade');
    var logradouro = document.getElementById('endereco');
    var estado = document.getElementById('estado');

    cidade.value = consulta_cep_convertida.localidade;
    logradouro.value = consulta_cep_convertida.logradouro;
    estado.value = consulta_cep_convertida.uf;
    console.log(consulta_cep_convertida);
    return consulta_cep_convertida;
    }catch(erro){
        msg_erro.innerHTML = `<p>Mensagem inválida. Tente novamente</p>`;
        console.log(erro)
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout" , () => busca_endereco(cep.value))
// let ceps = ['01001000', '01001001'];
// let conjunto_ceps = ceps.map(valores => busca_endereco(valores))
// Promise.all(conjunto_ceps).then(resposta => console.log(resposta))

