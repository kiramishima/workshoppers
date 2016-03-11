// ma solution
var rawArgs = process.argv.slice(2)
var args = []

function avg (...args) {
  rawArgs.forEach(val => {
    let commaSep = val.split(',')
    commaSep.forEach(val => {
        if (val !== '') args.push(+val)
    })
  })
  return args.reduce((prev, curr) => prev += curr) / args.length
}

// A continuación escribe una función llamada `avg` que calcule el promedio.


console.log(avg(...args))

// solution officiel
var rawArgs = process.argv.slice(2)
var args = []

rawArgs.forEach(val => {
  let commaSep = val.split(',')
  commaSep.forEach(val => {
    if(val !== '') args.push(+val)
  })
})

function avg(...args){
  return args.reduce((a, b)=>a+b)/args.length
}

console.log(avg(...args))
