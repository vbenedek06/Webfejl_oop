
/**
 * manageli es renderekli a formunkat a fieldjeink segirsegevel
 */

class FormController{
    /**
     * @type {Manager}
     */
    #manager;
    /**
     * @type {FormField[]}
     */
    #formFieldArray;
    /**
     * 
     * @param {Manager} manager 
     * @param {label:string, type: string,optional?: boolean} fieldConfiguration 
     */
    constructor(manager, fieldConfiguration){
        this.#formFieldArray = [];
        this.#manager = manager;
        const form = document.createElement('form');
        document.body.appendChild(form);
        for( const field of fieldConfiguration){
            const formField = new FormField(field.id, field.label,field.type, field.optional)
            this.#formFieldArray.push(formField);
            form.appendChild(formField.getDivElement())
        }
        const sendbutton = document.createElement('button')
        sendbutton.textContent = 'elkuld';
        form.appendChild(sendbutton)
        form.addEventListener('submit', (e) =>{
            e.preventDefault();
            if(this.#validateFields()){
                const value =this.#getValueObject();
                const card = new Card(value.cardtext, value.right)
                this.#manager.add(card);
                e.target.reset();
            //elkerjuk a field ertekeit
            // peldanyositunk egy card
            //hozzadjuk a managerhez
            }
        })


    }


    /**
     * validalja a firldeket es megjeleniti a hibauzenetekt ha szukseges
     * @returns {boolean} igazzal ter vissza ha minden field helyesen van kizoltve 
     * 
     */
    #validateFields(){
        let valid = true;
        for(const formField of this.#formFieldArray){
            formField.error = ';'
            if(!formField.optional){
                if(formField.value == ''){
                    formField.error = ' amezo kitoltese kotelezo'
                    valid = false;
                }
            }
        }
        return valid;

    }
    /**
     * 
     * @returns vegigmegy a formfieldeken es id-hoz rendeli az ertekeket amik a
     * az inputokban vannak 
     * @returns {{cardtext: string, right: boolean}}
     */
    #getValueObject(){
        const result = {};
        for(const formField of this.#formFieldArray){
            result[formField.id] = formField.value;
        }
        console.log(result);
        return result;
    }
}
/**
 * ez fogja tartalmazni a a labeleket,inputokat errrospanokat
 * pl.: tetx input alata errrorspan
 */
class FormField{
    /**
     * @type {string}
     * 
     */
    #id;

    /**
     * @type {string}
     */
    #type
    
    /**
     * @type {boolean}
     */
    #optional

    /**
     * @type {HTMlInputElement}
     */
    #inputField

    /**
     * @type {HTMLElement}
     */
    #labelElement

    /**
     * @type {HTMLSpanElement}
     */
    #errorField

    get id(){
        return this.#id;

    }

    get value(){
        if(this.#type === 'checkbox'){
            return this.#inputField.checked
        }
        return this.#inputField.value


    }
    get optional(){
        return this.#optional;
    }

    /**
     * beasllitja az errorfieldtartalmat
     */
    set error(value){
        return this.#errorField.textContent = value;
    }
    /**
     * ha az input tipusa checkbox akkor viszater azzal hogy 
     * be van pipalva vagy sem ha pdig text akkor visszater szoveggel
     *@returns {Boolean | String
     */

    /**
     * 
     * @param {string} id 
     * @param {string} labelContent 
     * @param {string} type 
     * @param {boolean?} optional 
     */
    constructor(id,labelContent, type, optional = false){
        this.#id = id;
        this.#type = type;
        this.#optional =optional;
        this.#labelElement = Gomszab.makeLabel(id,labelContent);
        this.#inputField = Gomszab.makeInput(id,type);
        this.#errorField =Gomszab.makeErrorField()

    }

    /**
     * 
     * lerehiz egy div elemeet aminben benne van
     * az input a label az errrorspan
     * @returns {HTMLElements} a div ami tartalmazza a fieldjeinket
     */
    getDivElement(){
        const fields = [this.#labelElement,this.#inputField,this.#errorField]
        const div = Gomszab.makeDiv(fields)
        return div;
    }
}