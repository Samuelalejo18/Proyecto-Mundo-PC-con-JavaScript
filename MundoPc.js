class DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }
  get tipoEntrada() {
    return this._tipoEntrada;
  }
  set tipoEntrada(tipoEntrada) {
    this._tipoEntrada = tipoEntrada;
  }
  get marca() {
    return this._marca;
  }
  set marca(marca) {
    this._marca = marca;
  }
}
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

class Monitor {
  static contadorMonitores = 0;
  constructor(marca, tamaño) {
    this._idMonitor = ++Monitor.contadorMonitores;
    this._marca = marca;
    this._tamaño = tamaño;
  }
  get idMonitor() {
    return this._idMonitor;
  }

  get marca() {
    return this._marca;
  }
  set marca(marca) {
    this._marca = marca;
  }
  get tamaño() {
    return this._tamaño;
  }
  set tamaño(tamaño) {
    this._tamaño = tamaño;
  }
  toString() {
    return `Monitor: [ idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}]`;
  }
}

let monitor1 = new Monitor("Samsung", "24in");
let monitor2 = new Monitor("LG", "32in");
console.log(monitor1.toString());
console.log(monitor2.toString());

class Computadora {
  static contadorComputadoras = 0;
  constructor(nombre, monitor, teclado, raton) {
    this._idComputadora = ++Computadora.contadorComputadoras;
    this._nombre = nombre;
    this._monitor = monitor;
    this._teclado = teclado;
    this._raton = raton;
  }

  get idComputadora() {
    return this._idComputadora;
  }
  toString() {
    return ` Computadora ${this._idComputadora}: \n nombre: ${this._nombre}\n monitor: ${this._monitor} \n teclado: ${this._teclado}\n raton: ${this._raton} `;
  }
}

let computadora1 = new Computadora("Lenovo", monitor1, teclado1, raton1);
let computadora2 = new Computadora("Asus", monitor2, tecclado2, raton2);
console.log(computadora1.toString());
console.log(computadora2.toString());

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
    console.log(` Orden : ${this._idOrden} ,  ${computadorasOrden}`);
  }
}
let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();

let orden2 = new Orden();

orden2.agregarComputadora(computadora2);
orden2.mostrarOrden();
