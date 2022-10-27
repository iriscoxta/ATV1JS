
// console.log(typeof Array, typeof new Array, typeof [])

// let aprovados  = new Array ('Iris', 'Isac',  'Jonas')
// console.log(aprovados) 

// var n = prompt("Digite um Array ou não")

let array = ['Iris', 'Isac', 'Jonas']
VarificaArray(array)


function VarificaArray(n){
    if (Array.isArray(n)){
        console.log("É um Array!")

    }else console.log ("Não é um Array!")
    
}


  
