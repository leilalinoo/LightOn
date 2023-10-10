class Lampa {
  #id;
  #allapot;
  #divElem;
  constructor(id, szuloElem) {
    this.szuloElem = szuloElem;
    this.#id = id;
    // this.#allapot = allapot;

    this.htmlOsszerak();
    this.#divElem = szuloElem.children(".elem:last-child");
    this.#divElem.on("click", () => {
      this.sajatEsemeny();
       this.valtozas()
    });
  }

  htmlOsszerak() {
    let txt = "";
    txt += `
        <div class = "elem"></div>
    `;
    txt += "";
    this.szuloElem.append(txt);
    this.setSzin()
  }


  valtozas() {
    this.#allapot = !this.#allapot; // Invertáljuk az állapotot
    this.setSzin();
  }

/*  valtozas() {
    if (this.#allapot === true) {
      this.#allapot = false;
      this.setSzin();
    } else {
      this.#allapot = true;
      this.setSzin();
    }
  }*/


  
  setSzin() {
  if (this.#allapot) {
    this.#divElem.css("background-color", "purple");
  } else {
    this.#divElem.css("background-color", "red");
  }
}
  
  getId() {
    return this.#id;
  }

  sajatEsemeny() {
    console.log(this.#id);
    const esemeny = new CustomEvent("kapcs", {
      detail: this,
    });
    window.dispatchEvent(esemeny);
  }
}
export default Lampa;
