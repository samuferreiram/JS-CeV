let valores = [11, 1, 5, 7, 9]
/*console.log(valores)
for(pos=0;pos<valores.length;pos++) {
    console.log(`A posição ${pos+1}, recebeu o valor ${valores[pos]}`)
}*/

for(let pos in valores){
    console.log(`A posição ${pos}, recebeu o valor ${valores[pos]}`)
}