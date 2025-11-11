// public/assets/components/salvar.js
import { adicionarEntrada, excluirEntrada } from '../../../modules/entradasregistradas.js';
import { renderTabela, renderResumo } from './tabela.js';
import { adicionarentrada } from './firebase.js'
const form = document.querySelector('.entradas');

function obterEntrada() {
  return {
    id: '#' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
    nome: document.getElementById("nome-entrada").value,
    valor: Number(document.getElementById("valor-entrada").value),
    vencimento: document.getElementById("vencimento-entrada").value,
    parcelas: Number(document.getElementById("parcelas-entrada").value),
    tipo: document.getElementById("tipo-entrada").value
  };
}

function limparFormulario() {
  form.reset();
}

function atualizarTudo() {
  renderTabela(handleExcluir);
  renderResumo();
}

function handleSalvar(e) {
  e.preventDefault();
  const novaEntrada = obterEntrada();
  adicionarentrada("entradas",novaEntrada)
  adicionarEntrada(novaEntrada);
  limparFormulario();
  atualizarTudo();
}

function handleExcluir(indice) {
  excluirEntrada(indice);
  atualizarTudo();
}

// inicialização
form.addEventListener('submit', handleSalvar);
document.addEventListener('DOMContentLoaded', atualizarTudo);

export { handleSalvar, handleExcluir };