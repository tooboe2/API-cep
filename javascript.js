function PesquisarEnderecoGet(url){
    let request = new XMLHttpRequest();
    request.open("GET",url,false);
    request.send();
    return request.responseText;     
}

function PrencherResultadoPesquisa(){
   let cep = document.getElementById("idcep").value;
   let resultado = PesquisarEnderecoGet('https://viacep.com.br/ws/' + cep  + '/json/'); 
   let dadosCep = JSON.parse(resultado);
   document.getElementById("idlogradouro").value = dadosCep['logradouro'];
   document.getElementById("idlocalidade").value = dadosCep['localidade'];
   document.getElementById("iduf").value = dadosCep['uf'];
   document.getElementById("idddd").value = dadosCep['ddd'];
   document.getElementById("idbairro").value = dadosCep['bairro'];
   document.getElementById("idcomplemento").value = dadosCep['complemento'];
}
