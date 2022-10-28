const array1 = [25, 50, 200, 1.8]
const array2 = [35, 50, 250, 0.2]

const TAM = array1.length

let res = []

for(let i = 0; i < TAM; i++){
    res.push(array1[i] + array2[i])

}

console.log(res)