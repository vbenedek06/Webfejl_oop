class ArrayList {
    #state;
    #count;
    #html;
 
    get Count() {
        return this.#count;
    }
 
    constructor(array = undefined) {
        this.#count = 0;
        this.#state = {};
    }
 
    Add(param) {
        const index = this.Count;
        this.#state[index] = param;
        Object.defineProperty(this, index, {
            get: () => { return this.#state[index]; },
            enumerable: true,
            configurable: true,
            set: (value) => { this.#state[index] = value; }
        });
 
        this.#count++;
    }
 
    Clear() {
        console.log('Clear kezdete');
        for (const key in this) {
            delete this[key]
        }
        this.#count = 0;
        this.#state = {};
        console.log('Clear vége');
    }
}
 
class ArrayHTMLTable extends HTMLElement {
    #tbody; // Privát mező a <tbody> elem tárolására
 
    connectedCallback() {
        const table = document.createElement('table');
        this.appendChild(table);
 
        const thead = document.createElement('thead');
        table.appendChild(thead);
 
        const tbody = document.createElement('tbody');
        table.appendChild(tbody);
 
        // A privát #tbody mezőt inicializáljuk
        this.#tbody = tbody;
    }
 
    /**
     *
     * @param {{nev: String, kor: Number}} item
    */
    addPersonRow(item) {
        const tr = document.createElement('tr');
        this.#tbody.appendChild(tr); // A sor hozzáadása a táblázat törzséhez
 
        const td1 = document.createElement('td');
        td1.textContent = item.kor; // Életkor beállítása
        tr.appendChild(td1);
 
        const td2 = document.createElement('td');
        td2.textContent = item.nev; // Név beállítása
        tr.appendChild(td2);
    }
}
 
customElements.define('array-t', ArrayHTMLTable);
 
const a = new ArrayList();
a.Add({ nev: "Laci", eletkor: 18 });
a.Add({ nev: "Sanyi", eletkor: 21 });
a.Clear();
console.log(a);
 
const htmltable = new ArrayHTMLTable();
document.body.appendChild(htmltable);
htmltable.addPersonRow({ nev: "Laci", kor: 18 });
 
const b = new ArrayList();
 
function add(a, b, c, d) {
}
 
// Példa használat
const csirke = {};
csirke.a = 'def';
console.log(csirke);
 
const alma = {};
Object.defineProperty(alma, 'nev', {
    value: 'Ferenc', writable: true
});
alma.nev = "asd";
console.log(alma);