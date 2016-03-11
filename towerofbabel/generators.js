/* let fibonacci = function *(){
  let pre = 0, cur = 1;
  while (pre < 1000) {
    // Aquí desestructuramos el primer estado:
    [pre, cur] = [cur, pre + cur];
    // y retornamos cada paso meniante yield
    yield pre;
  }
}();

for (var n of fibonacci) {
  console.log(n);
} */
// ma solution
const max = process.argv[2]
let FizzBuzz = function *() {
  let num = 1
  while (num <= max) {
    var isFizz = ((num % 3) === 0)
    var isBuzz = ((num % 5) === 0)
    var isFizzBuzz = (isFizz && isBuzz)

    if (isFizzBuzz) {
      num++
      yield 'FizzBuzz'
    } else if (isFizz) {
      num++
      yield 'Fizz'
    } else if (isBuzz) {
      num++
      yield 'Buzz'
    } else {
      yield num
      num++
    }
  }
}()

for (var n of FizzBuzz) {
  console.log(n)
}
// solution officiel
const max = process.argv[2];
let FizzBuzz = function* (){
  let num = 1;
  while (num <= max) {
    let value = num;
    num++;
    if (value % 15 === 0) {
      value = 'FizzBuzz';
    } else if (value % 3 === 0) {
      value = 'Fizz';
    } else if (value % 5 === 0) {
      value = 'Buzz';
    }
    yield value;
  }
}();

for (var n of FizzBuzz) {
  console.log(n);
}