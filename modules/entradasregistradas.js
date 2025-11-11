// modules/entradasregistradas.js

let registro_de_entradas = JSON.parse(localStorage.getItem('registro_de_entradas')) || [];

function salvarNoLocalStorage() {
  localStorage.setItem('registro_de_entradas', JSON.stringify(registro_de_entradas));
}

function adicionarEntrada(entrada) {
  registro_de_entradas.push(entrada);
  salvarNoLocalStorage();
}

function excluirEntrada(indice) {
  registro_de_entradas.splice(indice, 1);
  salvarNoLocalStorage();
}

function recuperarEntradas() {
  return [...registro_de_entradas];
}

function dadosAnaliticos() {
  return registro_de_entradas.reduce((acc, item) => {
    const valor = Number(item.valor);
    if (item.tipo === "ganho"){ 
      acc.ganhos += valor; 
    } else if(item.tipo === "gasto"){
    acc.total += valor * item.parcelas;
    acc.gastos += valor;
    }
    acc.saldo = acc.ganhos - acc.gastos;
    return acc;
  }, { ganhos: 0, gastos: 0, saldo: 0 , total: 0});
}

export { adicionarEntrada, excluirEntrada, recuperarEntradas, dadosAnaliticos };