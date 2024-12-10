/**
 * Create a row for the companions table;
 * 
 * @param {Companion} companion 
 */
function createRow(companion){
    const table = document.getElementById('companions');
    const tbody = table.querySelector('tbody');
    const tableRow = document.createElement('tr');
    tbody.appendChild(tableRow);

   // TODO 7
   const cell = createCell(tableRow)
   tableRow.id = companion.id
   cell.innerHTML = companion.getName()

   const arcell = createCell(tableRow)
   tableRow.id = companion.id
   arcell.innerHTML = companion.reszleg



    const action = createCell(tableRow)
    const button = document.createElement('button');
    button.innerHTML = 'Megtekint';
    action.appendChild(button)
    button.addEventListener('click', checkEventListener)
}

/**
 * Create a new td cell
 * 
 * @param {HTMLTableRowElement} parentElement 
 * @returns {HTMLTableCellElement}
 */
function createCell(parentElement){
    const newCell = document.createElement('td');
    parentElement.appendChild(newCell);
    return newCell;
}

/**
 * 
 * Append a new companion to the selector
 * 
 */
function appendToSelector(){
    const productForm = document.getElementById('product')
    const selector = productForm.querySelector('#companionlist');

    const option = document.createElement('option');
    // TODO 11.

    selector.appendChild(option);
}


/**
 * 
 * Refresh the productlist table
 * 
 * @param {Companion} companion 
 */
function refreshProductList(companion){ //TODO

    const companionName = document.getElementById('companion_name');
    // TODO 10
    companionName.style.display = 'block';
    const productTable = document.getElementById('products');
    productTable.style.display = 'table';
    const productTableBody = productTable.querySelector('tbody')
    productTableBody.innerHTML = '';
    // TODO 10
    Factory.prototype.refreshProductList = function(companion) {
        const companionName = document.getElementById('companion_name');
        companionName.style.display = 'block';
        companionName.innerText = companion.getName();
    
        const productTable = document.getElementById('products');
        productTable.style.display = 'table';
    
        const productTableBody = productTable.querySelector('tbody');
        productTableBody.innerHTML = '';
    
        for (const product of companion.productList) {
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.innerText = product;
            row.appendChild(cell);
            productTableBody.appendChild(row);
        }
    };
    
}

/**
 * 
 * Add companion function for the companion formelement
 * 
 * @param {HTMLFormElement} form 
 */
function addCompanion(form, factory) { //TODO10
    const firstName = form.querySelector('#cfirstname').value;
    const lastName = form.querySelector('#clastname').value;
    const area = form.querySelector('#carea').value;

    const id = factory.generateId(); // Új ID generálása
    const companion = new Companion(id, firstName, lastName, area); // Companion létrehozása
    factory.AddMano(companion); // Companion hozzáadása a Factory-hoz
}

    // TODO 6

/**
 * 
 * Add product function for the productformelement
 * 
 * @param {HTMLFormElement} form 
 */

function addProductForm(form, factory){ // TODO
    const selector =form.querySelector('#companionlist')
    const productName = form.querySelector('#productname')
    const companionId = selector.value;
    const product = productName.value;
    // 12
}