var doacoes = new Array();
 
function cadastrarDoacao(){
    var doacao = new Array();
    var iNome = document.getElementById('nome')
    var iTel = document.getElementById('tel')
    var iCr = document.getElementById('cr')
    doacao.nome = iNome.value;
    doacao.tel = iTel.value;
    doacao.cr = iCr.value;
    doacoes.push(doacao);
    console.log(doacoes);
    iTel.value="";
    iCr.value="";
    iNome.value="";
    atualizarTabela();
    atualizador();

} 
function excluirDoacao(e) {
    console.log("Excluindo"+e.value);
    doacoes.splice(e.value,1);
    atualizarTabela();

}
function atualizarTabela() {

    var corpoTabela = document.getElementById("corpoTabela");
   corpoTabela.innerHTML="";
   var tdoacoes=0;
   var tdoadores=0;
   var indece = 0;
    doacoes.forEach(function (doacao) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");

        td1.innerText=doacao.nome;
        tr.appendChild(td1);

        td3.innerText=doacao.cr;
        tr.appendChild(td3);
        var btn = document.createElement('button');
        btn.innerText="X";
        btn.value=indece;
        btn.setAttribute("onclick","excluirDoacao(this)")
        td4.appendChild(btn);
        tr.appendChild(td4);

        corpoTabela.appendChild(tr);
        tdoadores++;
        tdoacoes += parseFloat(doacao.cr);
        indece ++ ;
    });
}
var listaprodutos = new Array();
var qtdPessoas = 0;
var qtdCriancas = 0;
 
function cadastrarvalorproduto(){
    var valorproduto = new Array();
    var ingrediente = document.getElementById('ingrediente')
    var unidade = document.getElementById('unidade')
    var qntadulto = document.getElementById('qntadulto')
    var quantcr = document.getElementById('quantcr')
    var valor = document.getElementById('valor')
    valorproduto.ingrediente = ingrediente.value;
    valorproduto.unidade = unidade.value;
    valorproduto.qntadulto = qntadulto.value;
    valorproduto.quantcr = quantcr.value;
    valorproduto.valor = valor.value;
    listaprodutos.push(valorproduto);
    console.log(listaprodutos);
    atualizador();
    unidade.value="";
    qntadulto.value="";
    ingrediente.value="";
    quantcr.value="";
    valor.value="";

} 
function excluirvalorproduto(e) {
    console.log("Excluindo"+e.value);
    listaprodutos.splice(e.value,1);
    atualizador();

}
function atualizador() {

    //var corpoTabelapr = document.getElementById("corpoTabelapr");
    var tabelaCorpo = document.getElementById("tabelaCorpo");
    corpoTabelapr.innerHTML="";
    tabelaCorpo.innerHTML="";
   var ltistaprodutos=0;
   var tdoadores=0;
   var tcriancas=0;

   doacoes.forEach(function(doador){
    tdoadores += 1;
    tcriancas += parseInt(doador.cr);
   });

    var index = 0; 

    listaprodutos.forEach(function(prod) { 
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
        var valorproduto = prod;
        
        console.log(valorproduto)

        td1.innerText=valorproduto.ingrediente;
        tr.appendChild(td1);

        td3.innerText= ((parseFloat(valorproduto.qntadulto) * tdoadores) + (parseFloat(valorproduto.quantcr) * tcriancas)) + valorproduto.unidade;
        tr.appendChild(td3);

        var btn = document.createElement('button');
        btn.innerText="X";
        btn.value=index;
        btn.setAttribute("onclick","excluirvalorproduto(this)")
        td4.appendChild(btn);
        tr.appendChild(td4);

        corpoTabelapr.appendChild(tr);
        index++;
    } );
    
doacoes.forEach(function(conviado){
    var trp = document.createElement("tr");
    var tdt1 = document.createElement("td");
    var tdt2 = document.createElement("td");
    var tdt3 = document.createElement("td");

    tdt1.innerText=conviado.nome;
    trp.appendChild(tdt1);

    var vtpessoa=0;
    listaprodutos.forEach(function(produto){
        valoruniad = 0;
        valorunicr = 0;
        var unidaddeconviados = parseFloat(produto.qntadulto) + parseFloat(produto.quantcr);
        var valorunicr = ((((produto.quantcr * 100) / unidaddeconviados) / 100 ) * produto.valor ) * parseInt(conviado.cr); 
        var valoruniad = ((((produto.qntadulto * 100) / unidaddeconviados) / 100 ) * produto.valor); 
        vtpessoa += (valorunicr + valoruniad);
    });

    tdt2.innerText=vtpessoa.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    trp.appendChild(tdt2);

    var  btn1 = document.createElement('button');
        btn1.innerText="X";
        btn1.value=index;
        btn1.setAttribute("onclick","excluirvalorproduto(this)")
        tdt3.appendChild(btn1);
        trp.appendChild(tdt3);

        tabelaCorpo.appendChild(trp);
        
   });

}