let n = 204586

let nString = n.toString().split("").map(Number)

 function isEven(n){
    if(n%2== 0) return true
    else return false
 }

 for (let aux = 0; aux < nString.length-1; aux++){
        if(isEven(nString[aux]) && isEven(nString[aux+1])){
            nString.splice(aux+1, 0, "-")
        }
 }

    nString = nString.join("")

console.log(nString)

