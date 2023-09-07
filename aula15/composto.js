let num = [11, 16, 21, 14]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(11)
if(pos == -1){
    console.log(`Valor não encontrado!!`)
}
else{
    console.log(`O valor solicitado está na posição ${pos}`)
}
