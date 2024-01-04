class Monitor {
  static contadorMonitores = 0;
  constructor(marca, tamaño) {
    this._idMonitor = ++Monitor.contadorMonitores;
    this._idMarca = marca;
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
    return ` ${this._idMonitor} ${this.marca} ${this._tamaño}`;
  }
}
