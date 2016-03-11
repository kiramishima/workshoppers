var rawArgs = process.argv.slice(2)
var args = [];

rawArgs.forEach(val => {
  let commaSep = val.split(',');
  commaSep.forEach(val => {
    if(val !== '') args.push(+val);
  });
});

function avg(...args) {
  let total = args.map((item) => item).reduce((item) => item += item )
}

// A continuación escribe una función llamada `avg` que calcule el promedio.


console.log(avg(...args));