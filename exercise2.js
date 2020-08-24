

function ultima_posicion (pila) {
    return pila[pila.length - 1]
}

function balanceo(cadena) { // cadeba que se desea evaluar
    let pila = [] // Pila vacía
    pila.push() // Ingresar en pila
    pila.pop() // Eliminar de la pila

    for (let i=0; i<cadena.length; i++) { //ciclo que recorerá cada símbolo de la cadena
        let caracter = cadena.charAt(i) 
        if (caracter === '(') { // El caracter en x posición es '(' ?
            pila.push(caracter) // Si es así, lo ingresa a la pila
        } else if (caracter === ')') { // Si el caracter no es '(' entonces
            if(ultima_posicion(pila) === '(') { // pregunta si antes estaba '('
                pila.pop() // de ser así, elimina el caracter '(' y ')' nunca ingresa
            } else {
                return false;
            } 
        }
    }
    return pila.length === 0 // Pregunta si la pila ahora está vacía y entrega True
}

const answer = balanceo("a+(b*c)-2-a") == true ? 'correct': 'incorrect';
console.log(answer);

/*
console.log(balanceo("a+(b*c)-2-a"))
console.log(balanceo("(a+b*(2-c)-2+a)*2"))
console.log(balanceo("(a*b-(2+c)"))
console.log(balanceo("2*(3-a))"))
console.log(balanceo(")3+b*(2-c)("))*/