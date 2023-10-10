import Lampak from "../View/Lampak.js"
import Model from "../Model/Model.js"

class Controller{
    constructor(){
        const MODEL = new Model()
        const VIEW  = new Lampak(".jatek")

        MODEL.getAllapotLista()

        $(window).on("kapcs", ()=>{
           VIEW.init()
        })
    }
}
export default Controller