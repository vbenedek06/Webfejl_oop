class ArrayList {
    /**
     * hosszt tartalmazo tulajdonság
     * @type {number}
     */
    #length
    #status
    get Count() {
        return this.#length

    }
    constructor() {
        this.#length = 0;
        this.#status = {};
    }
    Add(item) {
        const index = this.#length //elkerjuk es taroljuk az aktualis hosszat 
        this.#status[index] = item//beállítjuk a belső statusznak index tulajdonsagnak a bemeneti paramétert
        Object.defineProperty(this, index, {
            get: function () {
                return this.#status[index]
            },
            set: function(value){
                this.#status[index] = value
            },











        })
        this.#length++// a hossz erteket implementaljuk
    }
    Clear() {
        this.#length //hosszt lenullázzuk
        this.#status//objektumot kiuritjuk

    }

}
const csirke = {};
csirke.a = 'def'; // a = def
csirke[0] = 'asd'; // 0 = asd
csirke['nev'] = 'Ferenc'// nev = Ferenc
console.log(csirke) //kilogolas

Object.defineProperty
//objektum --> objektum aminek a tulajdonságát megadjuk
//string --> kulcs
//descriptor

const alma = {}
Object.defineProperty(alma, 'nev', {
    value: 'Ferenc',
    writable: true
})
alma.nev = 'asd';
console.log(alma)