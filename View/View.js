class View{
    constructor(szuloelem){
        szuloElem.append("<div class='lampa'></div>");
        this.elem = szuloElem.children("div:last");
    }
}
export default View