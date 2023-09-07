function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
        res.innerHTML = 'Impossível contar!'    
    }
    else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <=0 ){
            window.alert ('O passo não pode ser igual ou menor à zero.')
            //p=1. Se quisesse definir se o passo fosse valer 1, após o erro.//
        }
        if (i < f){
            for(let c = i; c<=f; c+=p){
                res.innerHTML += `${c} \u{1F449}  `
            }
            res.innerHTML += `\u{1F3C1}  `
        }
        else {
            for (let c = i; c>=f; c-=p){
                res.innerHTML += `${c} \u{1F449}  `
            }
            res.innerHTML += `\u{1F3C1}  `
        }
    }
    
}