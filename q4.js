let array = ['Iris', 'Isac', 'Jonas', 'JP']

let n = 1

function MostraUltimoElemnto(n){

    for(let i = array.length - 1; i >= array.length - n; i--){
        console.log(array[i])
    }
}

MostraUltimoElemnto(n)