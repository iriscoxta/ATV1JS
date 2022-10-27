const array = [1, 2, 3, 4, 5, 4, 6];
var RemoveDuplicados = array.filter(RemoveDuplicados);
console.log(RemoveDuplicados);

function RemoveDuplicados(value, index, self) { 
    return self.indexOf(value) === index;
}
