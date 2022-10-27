let array = ['Iris', 'Isac', 'Jonas']

function ClonaArray (array){
    
    const NovoArray = []

    for(const elm of array){
       NovoArray.push(elm)
    }
    return NovoArray

}

console.log(ClonaArray(array))