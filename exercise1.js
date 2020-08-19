class calculator {

    constructor() {
        this.N1 = 0;
        this.D1 = 0;
        this.N2 = 0;
        this.D2 = 0;
        
    }
    sum(N1, D1, N2, D2) {
        this.N1 = N1;
        this.D1 = D1;
        this.N2 = N2;
        this.D2 = D2;
        numerador = (this.N1 * this.D2) + (this.N2 * this.D1);
        denominador = (this.D1 * this.D2);
        console.log(numerador + '/' + denominador); // Muestra producto de fracción sin simplificar
        return (((this.N1 * this.D2) + (this.N2 * this.D1)) / (this.D1 * this.D2)) // producto decimal

    }
    rest(N1, D1, N2, D2) {
        this.N1 = N1;
        this.D1 = D1;
        this.N2 = N2;
        this.D2 = D2;
        numerador = (this.N1 * this.D2) - (this.N2 * this.D1);
        denominador = (this.D1 * this.D2);
        console.log(numerador + '/' + denominador); // Muestra producto de fracción sin simplificar
        return (((this.N1 * this.D2) - (this.N2 * this.D1)) / (this.D1 * this.D2)) // producto decimal
        
    }
    mult(N1, D1, N2, D2) {
        this.N1 = N1;
        this.D1 = D1;
        this.N2 = N2;
        this.D2 = D2;
        numerador = (this.N1 * this.N2);
        denominador = (this.D1 * this.D2);
        console.log(numerador + '/' + denominador); // Muestra producto de fracción sin simplificar
        return (((this.N1 * this.N2) / (this.D1 * this.D2))) // producto decimal

    }
    div (N1, D1, N2, D2) {
        this.N1 = N1;
        this.D1 = D1;
        this.N2 = N2;
        this.D2 = D2;
        numerador = (this.N1 * this.D2);
        denominador = (this.N2 * this.D1);
        console.log(numerador + '/' + denominador); // Muestra producto de fracción sin simplificar
        return (((this.N1 * this.D2) / (this.N2 * this.D1))) // producto decimal

    }

}

var mcd = function(a, b) {
    if (b == 0) return a;                
  
    return mcd(b, Math.floor(a % b));          
  };


const calc = new calculator (); 
//console.log(calc.sum(1, 2, 3, 4)); // Muestra el valor decimal de la operación entre fracciones
//console.log(calc.rest(1, 2, 3, 4)); // Muestra el valor decimal de la operación entre fracciones
//console.log(calc.mult(1, 2, 3, 4)); // Muestra el valor decimal de la operación entre fracciones
//console.log(calc.div(1, 2, 3, 4)); // Muestra el valor decimal de la operación entre fracciones
var suma = calc.sum(1, 2, 3, 4);
var resta = calc.rest(1, 2, 3, 4);
var mult = calc.mult(2, 3, 6, 6);
var div = calc.div(1, 2, 3, 4);


var len = suma.toString().length -2; // Calcula la longitud de la cadena después del punto
var denominador = Math.pow(10, len); // denominador tomará la potencia a multiplicar el numerador para volverlo entero
var numerador = suma * denominador; // Decimal transformado a entero

var divisor = mcd(numerador, denominador);
numerador /= divisor;
denominador /= divisor; 
console.log((Math.floor(numerador) + '/' + Math.floor(denominador)));
