// public/assets/components/tabela.js

import { collection, getDocs, onSnapshot, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";
import { db } from "./firebase.js";

const corpoDaTabela = document.getElementById("corpo-tabela");
const parcelasDevedoras = document.querySelector('#parcelas-devedoras');
const parcelasRecebiveis = document.querySelector('#parcelas-recebiveis');
const saldoParcelas = document.querySelector('#saldo_parcelas');
const totalDevedor = document.querySelector('#total-devedor');

async function renderTabela(onExcluir) {
  corpoDaTabela.innerHTML = "";
  
  // 🔥 onSnapshot() ou getDocs() — escolhemos onSnapshot para tempo real
  const entradasRef = collection(db, "entradas");
  
  onSnapshot(entradasRef, (snapshot) => {
    corpoDaTabela.innerHTML = ""; // limpa tabela antes de renderizar
    
    snapshot.forEach((doc) => {
      const entrada = doc.data();
      const id = doc.id; // importante para exclusão
      
      const linha = document.createElement("tr");
      linha.innerHTML = `
        <td>${entrada.nome}</td>
        <td>R$: ${new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(entrada.valor)}</td>
        <td>x${entrada.parcelas}</td>
        <td>${entrada.tipo}</td>
        <td>Dia ${entrada.vencimento}</td>
        <td><button class="excluir-entrada"><i class="fa-solid fa-trash"></i></button></td>
        <td></td>
        <td>R$: ${new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(entrada.valor * entrada.parcelas)}</td>
      `;
      
      // adiciona o evento de exclusão
      linha.querySelector(".excluir-entrada").addEventListener("click", () => excluirEntrada(id));
      
      corpoDaTabela.appendChild(linha);
    });
  });
}

async function excluirEntrada(id) {
  try {
    await deleteDoc(doc(db, "entradas", id));
    console.log("Entrada excluída com sucesso!");
  } catch (e) {
    console.error("Erro ao excluir:", e);
  }
}



export { renderTabela };
