let array = ['a', '1', '2', '3', 'c', 'B', 'A', '2'];


function upper(value){
        if(typeof value == 'string') return value.toUpperCase()
        else return value
}

let arrayNovo = array.map(upper)
console.log(array)
console.log(arrayNovo)


for( let aux = 0; aux < array.length; aux++){

        for( let i = aux+1; i < array.length; i++){

                if(array[aux] == array[i]) array.splice(i, 1)
        }
}

console.log(array)