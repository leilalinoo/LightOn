class Model {
  #allapotLista = [];
  constructor() {
    this.getAllapotLista();
    
  }

  setAllapotLista() {
    for (let index = 0; index < 9; index++) {
      const element = Math.floor(Math.random() * 1);
      if (element === 0) {
        this.#allapotLista[index] = false;
      } else {
        this.#allapotLista[index] = true;
      }
    }
  }

  getAllapotLista() {
    return this.#allapotLista;
  }
}
export default Model;
