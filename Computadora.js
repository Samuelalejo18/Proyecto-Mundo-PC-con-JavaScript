class Computadora{
    static contadorComputadoras=0;
    constructor(nombre,monitor,teclado,raton){
        this._idComputadora=++Computadora.contadorComputadoras;
        
    }
}