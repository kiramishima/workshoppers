/*
var res = [];
// La siguiente línea contiene la sintaxis de `for of`
for (let element of [1, 2, 3]) {
  res.push(element * element);
}
console.log(res); // [1, 4, 9]



// Calculamos la secuencia de fibonacci para los primeros 1.000 números
var fibonacci = {
    // Creamos un método con una función que contenga Symbol.iterator.
    [Symbol.iterator] () {
    let pre = 0, cur = 1
    // El Objeto iterador resultante ha de tener un método `next`:
    return {
        next() {
        // El resultado de `next` ha de ser otro Objeto con la propiedad `done` que indica si el iterador ha acabado o no.
        [pre, cur] = [cur, pre + cur]
        if (pre < 1000)  return { done: false, value: pre }
        return { done: true }
        }
    }
    }
}

// El valor de la propiedad resultado será `n`.
for (var n of fibonacci) {
    console.log(n)
}
*/
// ma solution
const max = process.argv[2]
let FizzBuzz = {
    [Symbol.iterator] () {
        let pre = 1, cur = 1
        return {
            next() {
                [pre, cur] = [cur, pre + cur]
                if (pre <= max) { 
                    var isFizz = ((pre % 3) == 0)
                    var isBuzz = ((pre % 5) == 0)
                    var isFizzBuzz = (isFizz && isBuzz)
                    
                    if (isFizzBuzz) return {done: false, value: 'fizzbuzz'}

                    if (isFizz) return {done: false, value: 'fizz'}
                    if (isBuzz) return { done: false, value: 'buzz'}
                   
                    return { done: false, value: pre }
                    
                    // var f = pre % 3 == 0, b = pre % 5 == 0
                    // return { done: false, value: f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : pre }
                }
                return {done: true}
            }
        }
    }
}

for (var n of FizzBuzz) {
    console.log(n)
}

// solution officiel
const max = +process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    let num = 1;
    return {
      next() {
        if (num > max) {
          return { done: true };
        }
        let value = num;
        if (value % 15 === 0) {
          value = 'FizzBuzz';
        } else if (value % 3 === 0) {
          value = 'Fizz';
        } else if (value % 5 === 0) {
          value = 'Buzz';
        }
        num++;
        return { done: false, value: value };
      }
    }
  }
}

for (var n of FizzBuzz) {
  console.log(n);
}