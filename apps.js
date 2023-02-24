/*
 * objetivo: trabalhando com array
 * Data: 24/02/2022
 * Uutor:Guilherme
 * Versão: 1.0
 */
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */
//array
/*
 *composto por indices
 *indices começam por 0,1,2...
 *Em um elemento só conseguimos guardar várias coisas
 *no javascript cria posiçoes conforme a necessidade, ou seja, não precisamos delimitar um tamanho
 *aqui não prescisamos nos preocupar com o tipo de dados que sera guardados, faz aautomaticamente o processo de conversão de dados
 */

//  [] -> signifca que estamos manipulando array de dados
// {} significa que estamos manipulndo o JSON de dados

const listaNomes = ['Jose', 'Maria', 'Luis', 'Carlos', 'Guilherme'];
const Listarodutos = ['Teclado', 'Mouse', 'Monitor', 'Computador', 'Fone', 'Impressora', 'Scaner', 'WebCan']
    // Forma errada de  manipular um conjunto de dados
const nome1 = 'jose'
const nome2 = 'Maria'
const nome3 = 'Luis'
const nome4 = 'Carlos'


const manipulandoElementos = function() {



        /*------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */
        //verificsndo o tipo de dados do elemento listaNome
        //console.log(typeof(listaNomes)) //com typeof sempre retona uma objeto
        //todos os elementos do array
        //console.log(listaNomes)
        /*------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */
        //mostrando console individualmente, conforme o indice
        //console.log(listaNomes[2])

        /*------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */
        //Mostrando o tipo de dado que guarda e o indice individualmente
        //console.log(typeof(listaNomes[2]))
        /*------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */
        // const listaNomes = ['Jose', 30, true, 'Maria', 'Luis', 'Carlos'];
        // console.log(listaNomes)
        /*------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

        // concatenação
        // console.log('o nome do usuario é ' + listaNomes[1])
        // console.log(`o nome do usuario é ${listaNomes[3]}`)


        // vendo a quantidade de um array
        //console.log("a quantidade de elementos do array é " + listaNomes.length)
        /*------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */
        //                                      Percorrendo o array com estrutura de repetição

        /*------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */
        //                                                                                 WHILE
        // let count = 0; // start
        // let quantidadeItem = listaNomes.length //stop
        // console.log('exibindao daos do aray com wile')
        // while (count <= quantidadeItem) {  // com <= o ultimo elemento da underfined
        //     console.log('nome:' + listaNomes[count])
        //     count++
        // }

        // let count = 0; // start
        // let quantidadeItem = listaNomes.length //stop
        // console.log('exibindao daos do aray com wile')
        // while (count < quantidadeItem) { // com <= o ultimo elemento da underfined
        //     console.log('nome:' + listaNomes[count])
        //     count++
        // }

        /*------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

        //                                                                                    usando o for
        // let qtdNomes = listaNomes.length
        // for (let cont = 0; cont < qtdNomes; cont++) {
        //     console.log('nome' + listaNomes[cont])
        // }
        /*------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */
        //                                                                               usando forEath
        /*metodo do objeto array*/
        // objeto de array que retorna uma funçao de callbek
        //so serve para array, tome cuidados quando for usar em um {} -> porque da underfined
        //pega todos o elemento do array listaNome e transforma no argumento nome
        //forEach extrai indice por indice
        // console.log("Exibindo dados com for Each")
        // listaNomes.forEach(function(nome) {
        //     console.log('Nome' + nome)

        // })
        /*------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */


        // adicionando elementod  novos no nosso array na ultima posiçãos
        //push
        // let nomeArray = 'Marcela'
        // listaNomes.push('Alexandre', 'Aline', nomeArray)
        //console.log(listaNomes)

        // removendo elementos do array
        //listaNomes.pop() // pop remove o ultimo elemento do array
        //console.log(listaNomes)

        // adicionando elementod  novos no nosso array no começo
        //empurra os elementos para frente exemplo que era 0 sera 1
        // listaNomes.unshift('leonardo', 'Lara')
        //console.log(listaNomes)


        //removendo elementos do inicio oprimeiro elemento do array
        //reorganiza os proximos elementos exemplo quem era um vira 0
        // listaNomes.shift()
        // console.log(listaNomes)
    }
    /*------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */
    //                                                                              FILTROS

const filterIndeox = function() {

        //                                                                                 inexof
        // retorna o indice referente a alguma palavra
        console.log(Listarodutos)
            //console.log(Listarodutos.indexOf('Fone'))

        console.log(Listarodutos.indexOf('Fone de ouvido')) // -> como não existe "fone de ouvido" ele retorna -1, teoricamente ele retornaria 0 mas 0 é indice de array
            //  >= 0 elemento existe
            // < 0 elemento não existe

        if (Listarodutos.indexOf('Fone de ouvido') >= 0)
            console.log("O item pesquisado foi encontrado")
        else
            console.log("item não encontrado")
    }
    //slice
const filterSlice = function() {
    //slice 
    //copia elementos de um array
    //replica em um novo elemento em um novo objeto
    //podendo selecionar os items

    const novosProdutos = Listarodutos.slice();
    const novosProdutosSelecionados = Listarodutos.slice(0, 3); // quero que copie somente quem está na posicao 0 ate posucao 2
    //console.log(Listarodutos, novosProdutos)
    //console.log("ListaProdutos" + "\n" + listaNomes + "\n" + "NovosProdutos" + "\n" + novosProdutos)
    console.log(novosProdutosSelecionados)

}


const manipuladonElementos = function() {}
const FiltrandoElementos = function() {}

//console.log(Listarodutos)

// const removendoElementos = function(nomeDoProduto) { // essa função recebe um parametro, esse parametro é a palavra de pesquisa que ira no array e removera a palavraigual
//     let nome = nomeDoProduto
//     let status
//     let indice = Listarodutos.indexOf(nome)

//     if (indice >= 0) {
//         //                                                                                  SPLICE
//         // permite remover elementos do array pelo indice
//         Listarodutos.splice(indice, 1); // passa indice e quantos quer que remova, não esquecer a quantidades de itens a ser removido 
//         status = true
//     } else {
//         status = false
//     }
//     return status
// }

const removendoElementos = function(array, nomeItem) { // essa função recebe um parametro, esse parametro é a palavra de pesquisa que ira no array e removera a palavraigual
    let novaLsita = Array.slice(); // copia

    let nome = nomeItem
    let status
    let indice = novaLsita.indexOf(nome)

    if (indice >= 0) {
        //                                                                                  SPLICE
        // permite remover elementos do array pelo indice
        novaLsita.splice(indice, 1); // passa indice e quantos quer que remova, não esquecer a quantidades de itens a ser removido 
        status = true
    } else {
        status = false
    }

    if (status)
        return novaLsita
    else
        return status
}


console.log(removendoElementos(Listarodutos, 'Monitor'))

console.log(Listarodutos)