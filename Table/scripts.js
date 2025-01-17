const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]

class Person{
    constructor(obj){
        this.firstname1 = obj.firstname1
        this.firstname2 = obj.firstname2
        this.lastname = obj.lastname

    }

    render(parentElement){
        const sor = document.createElement('tr')
        parentElement.append(sor)
        const cell = document.createElement('td')
        sor.append(cell)
        cell.innerHTML = this.firstname1

        if(this.firstname2 == undefined){
            cell.colspan = 2
        }
        else{
            const cell2 = document.createElement('td')
            cell2.innerHTML = this.firstname2
            sor.appendChild(cell2)
        }
        cell.innerHTML = this.firstname1
        const lastname_cell = document.createElement('td')
        sor.appendChild(lastname_cell)
        lastname_cell.innerHTML= this.lastname
    }
}
Init()
function Init(){
    const tbody = document.getElementById('tbodyId')
    for (const obj of array){
        const person = new Person(obj)
        person.render(tbody)

    }
}
