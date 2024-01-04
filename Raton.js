class Raton extends DispositivoEntrada {
  static contadorRatones = 0;
  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton = ++Raton.contadorRatones;
  }
  get idRaton() {
    return this._idRaton;
  }
  toString() {
    return ` Raton: [ idRaton: ${this._idRaton}, marca:  ${this.marca}, tipoEntrada: ${this._tipoEntrada} ]`;
  }
}

let raton1 = new Raton("usb tipo A", "Lenovo");
let raton2 = new Raton("usb tipo C", "Logitech");
console.log(raton1.toString());
console.log(raton2.toString());
