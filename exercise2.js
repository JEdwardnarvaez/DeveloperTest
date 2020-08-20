

function ultima_posicion (pila) {
    return pila[pila.length - 1]
}

function balanceo(cadena) {
    let pila = []
    pila.push()
    pila.pop()

    for (let i=0; i<cadena.length; i++) {
        let caracter = cadena.charAt(i)
        if (caracter === '(') {
            pila.push(caracter)
        } else if (caracter === ')') {
            if(ultima_posicion(pila) === '(') {
                pila.pop()
            } else {
                return false;
            } 
        }
    }
    return pila.length === 0
}

const answer = balanceo("2*(3-a))") == true ? 'correct': 'incorrect';
console.log(answer);


console.log(balanceo("a+(b*c)-2-a"))
console.log(balanceo("(a+b*(2-c)-2+a)*2 "))
console.log(balanceo("(a*b-(2+c) "))
console.log(balanceo("2*(3-a))"))
console.log(balanceo(")3+b*(2-c)("))