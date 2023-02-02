/*
const imagemReceita = document.querySelector("imagem_receita") //class
const tituloReceita = document.querySelector("titulo-receita") //id
const subTituloReceita = document.querySelector("sub-titulo-receita") //id
const dadosReceita = document.querySelector("dados_receita") //class (div)
const iconesRestricao = document.querySelector('')
const listaIngredientes = document.querySelector('')
const modoPreparo = document.querySelector('')
const dicasReceita = document.querySelector('')


*/

const receita = [
    {
        imagem: 'assets/images/img_reh/bolocacau.jpg',

        nomeReceita: 'Bolo de Chocolate',
        descricao: 'Bolo de chocolate feito com cacau 100%, vegano, extremamente fofinho e gostoso!',

        autor: 'Rodrigo Tormente',
        tempoPreparo: '40 min',
        rendimento: '12 porções',
        dificuldade: 'Fácil',

        iconeRestricao1: '<img width="50px" height="50px" src="assets/images/icon_gluten.png" alt="glutem" title="Contém Glútem"/>',
        iconeRestricao2: '<img width="50px" height="50px" src="assets/images/icon_vegan-on.png" alt="vegano" title="Vegano"/>',
        iconeRestricao3: '',
        iconeRestricao4: '',

        ingredientes: '',
        preparo: '',
        dicas: '',
       
    },    
    ]

// populando imagem da receita

    const imagemRec = document.createElement('div');

    imagemRec.innerHTML = `
    <img class="imagem_receita" src="${receita[0].imagem}" alt="foto_receita" title="${receita[0].nomeReceita}"/>
    `

    const divImagemRec = document.querySelector('div[class="imagem_rec"]');
    
    divImagemRec.appendChild(imagemRec);



// populando o título e sub título

    const textoDescricaoReceita = Object.assign(document.createElement('div'), {
       classList: ['texto_descricao_receita']
    });
    
    textoDescricaoReceita.innerHTML = `
    <h1>${receita[0].nomeReceita}</h1>
    <p>${receita[0].descricao}</p>    
    `    

    const divTituloReceita = document.querySelector('div[class="titulo_receita"]');
    
    divTituloReceita.appendChild(textoDescricaoReceita);



// populando dados da receita

const dados = document.createElement('div');

dados.innerHTML = `
<p><strong>Autor:</strong> ${receita[0].autor}</p>
<p><strong>Tempo de Preparo:</strong> ${receita[0].tempoPreparo}</p>
<p><strong>Rendimento:</strong> ${receita[0].rendimento}</p>
<p><strong>Dificuldade:</strong> ${receita[0].dificuldade}</p>
`

const dadosReceita = document.querySelector('div[class="dados_receita"]');

dadosReceita.appendChild(dados);



// populando ícones de restrição

//ícone 1
const icone1 = Object.assign(document.createElement('div'), {
    classList: ['icone1']
 });

 icone1.innerHTML = `
 ${receita[0].iconeRestricao1}
 `

 const iconesRestricao = document.querySelector('div[class="icones_restricao"]');

 iconesRestricao.appendChild(icone1);


 //ícone 2
const icone2 = Object.assign(document.createElement('div'), {
    classList: ['icone2']
 });

 icone2.innerHTML = `
 ${receita[0].iconeRestricao2}
 `

 iconesRestricao.appendChild(icone2);


 //ícone 3
const icone3 = Object.assign(document.createElement('div'), {
    classList: ['icone3']
 });

 icone3.innerHTML = `
 ${receita[0].iconeRestricao3}
 `

 iconesRestricao.appendChild(icone3);


 //ícone 4
const icone4 = Object.assign(document.createElement('div'), {
    classList: ['icone4']
 });

 icone4.innerHTML = `
 ${receita[0].iconeRestricao4}
 `

 iconesRestricao.appendChild(icone4);



// populando Ingredientes