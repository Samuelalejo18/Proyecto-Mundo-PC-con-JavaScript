
class Teclado extends DispositivoEntrada {
  static contadorTeclados = 0;
  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclados;
  }
  get idTeclado() {
    return this._idTeclado;
  }
  toString() {
    return `Teclado: [ idTeclado: ${this._idTeclado}, marca: ${this.marca}, tipoEntrada: ${this.tipoEntrada}]`;
  }
}
let teclado1 = new Teclado("usb tipo c", "RedDragon");
let tecclado2 = new Teclado("usb tipo A", "Asus");
console.log(teclado1.toString());
console.log(tecclado2.toString());