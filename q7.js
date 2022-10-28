let array = [1, 1, 1, 1, 1, 5, 6, 5];

let MaiorRepeticao = null;
let ocorrenciasMaior = -1;

for ( let i = 0 ; i < array.length ; i++ ) {
  let ocorrencias = 1;
  for ( let t = i+1 ; t < array.length ; t++ )
    if ( array[i] == array[t] )
      ocorrencias++;
  
  if ( ocorrencias > ocorrenciasMaior ) {
        MaiorRepeticao = array[i];
    ocorrenciasMaior = ocorrencias;
  }
}
console.log(MaiorRepeticao)

