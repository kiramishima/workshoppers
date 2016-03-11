// ma solucione c:
var obj = {
    [(()=> process.argv[2] % 2 === 0 ? "even" : "odd" )()]: +process.argv[2],
    [(()=> Number(process.argv[3]) + Number(process.argv[2]) )()]: Number(process.argv[3]) + Number(process.argv[2])
}
console.log(obj)

// solucion oficial 
console.log({
  [+process.argv[2] % 2 === 0 ? "even" : "odd"]: +process.argv[2],
  [+process.argv[2] + +process.argv[3]]: +process.argv[2] + +process.argv[3],
})

