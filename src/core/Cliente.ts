export default class Cliente{
    //mudar o arquivo tsconfig.json para "target": "ES2015"
    //para ter nativamente atributos privados com #
    
    #id: string
    #nome: string
    #idade: number

    constructor(nome:string, idade:number, id: string=null){
        this.#nome = nome
        this.#idade = idade
        this.#id = id


    }
    //método statico para criar um cliente vazio
    static vazio(){
        return new Cliente('', 0)
    }

    get id(){
        return this.#id
    }

    get nome(){
        return this.#nome
    }

    get idade(){
        return this.#idade
    }
}