class Orden {
  static contadorOrdenes = 0;
  constructor() {
    this._computadoras = [];
    this._idOrden = ++Orden.contadorOrdenes;
  }
  agregarComputadora(computadora) {
    this._computadoras.push(computadora);
  }

  mostrarOrden() {
    let computadorasOrden = "";
    for (let computadora of this._computadoras) {
      computadorasOrden += "\n{" + computadora.toString() + "}";
    }
    console.log(
      ` Orden : ${this._idOrden} , Computadoras: ${computadorasOrden}`
    );
  }
}
