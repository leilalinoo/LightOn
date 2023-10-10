import Lampa from "./LampaElem.js";
class Lampak{
    #allapotLista =  []
    #lampak = []
    constructor(szuloelem){
        this.szuloelem = szuloelem
        this.szuloelem = $(".jatek")
        for (let index = 0; index < 9; index++) {
            const lll = new Lampa(index, this.szuloelem)
            this.#lampak.push(lll)
            this.init()
        }

        

    }

    init(){
        for (let index = 0; index < this.#lampak.length; index++) {
            this.#lampak[index].setSzin()
            
        }
    }

}
export default Lampak