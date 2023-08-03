const tbody = document.querySelector('tbody');
const descItem = document.querySelector('#desc');
const amount = document.querySelector('#amount');
const type = document.querySelector('#type');
const btnNew = document.querySelector('#btnNew');

const incomes = document.querySelector('.incomes');
const expenses = document.querySelector('.expenses');
const total = document.querySelector('.total');

let items;
// Pega os itens no banco - Se não, será um array vazio
const getItemDB = () => JSON.parse(localStorage.getItem('db_items')) ?? [];
// Inserindo no banco as informações da variável items
const setItemDB = () => localStorage.setItem('db_items', JSON.stringify(items));