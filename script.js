const tbody = document.querySelector('tbody');
const descItem = document.querySelector('#desc');
const amount = document.querySelector('#amount');
const type = document.querySelector('#type');
const btnNew = document.querySelector('#btnNew');

const incomes = document.querySelector('.incomes');
const expenses = document.querySelector('.expenses');
const total = document.querySelector('.total');

let items;

function insertItem(item, index) {
    let tr = document.createElement('tr');

    tr.innerHTML = `
    <td>${item.desc}</td>
    <td>R$ ${item.amount}</td>
    <td class="columnType">${
      item.type === "Entrada"
        ? '<i class="bx bxs-chevron-up-circle"></i>'   // Icon seta p cima
        : '<i class="bx bxs-chevron-down-circle"></i>' // Icon seta p baixo
    }</td>
    <td class="columnAction">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `;

  tbody.appendChild(tr);
};

function loadItems() {
    items = getItemsDB();
    // Limpar tbody para não duplicar itens na tela
    tbody.innerHTML = '';
    items.forEach((item, index) => {
        insertItem(item, index);
    })
};

// Pega os itens no banco - Se não, será um array vazio
const getItemsDB = () => JSON.parse(localStorage.getItem('db_items')) ?? [];
// Inserindo no banco as informações da variável items
const setItemsDB = () => localStorage.setItem('db_items', JSON.stringify(items));