// Filter
const idadesFamilia = [62, 39, 37, 14, 2]
const idadesParesFamilia = idadesFamilia.filter(idadeFamilia => idadeFamilia % 2 === 0)
console.log(idadesParesFamilia)

const numerosRifa = [17, 10, 24, 18, 3]
const numerosImparesRifa = numerosRifa.filter(numeroRifa => numeroRifa % 2 === 1)
console.log(numerosImparesRifa)

// Reduce
const numerosSorteados = [174, 2, 61, 84, 187, 333, 223, 190, 700, 600]
const numerosMaioresQue223 = numerosSorteados.reduce((accumulator, numerosSorteados) =>
   numerosSorteados > 223 ? accumulator + 1 : accumulator, 0)
console.log(numerosMaioresQue223)

const numeros = [14, 3, 5, 62, 7, 2]
const numerosMenoresQue10 = numeros.reduce((accumulator, numeros) => {if(numeros < 10){
    return accumulator + 1
}
    return accumulator
}, 0)
    console.log(numerosMenoresQue10)

// Map
const numerosNaturais = [5,7,3, 6, 2]
const QuadradoNumerosNaturais = numerosNaturais.map(numeroNatural => numeroNatural ** 2)
console.log(QuadradoNumerosNaturais)

const precos = [40, 200, 35, 75, 80, 150]
const precosPorcentagem5 = precos.map(preco => (preco * 5) / 100)
console.log(precosPorcentagem5)
