/*const receita = [
    {
        imagem: 'assets/images/img_reh/bolocacau.jpg',

        nomeReceita: 'Bolo de Chocolate',
        descricao: 'Bolo de chocolate feito com cacau 100%, vegano, extremamente fofinho e gostoso!',

        autor: 'Rodrigo Tormente',
        tempoPreparo: '40 min',
        rendimento: '12 porções',
        dificuldade: 'Fácil',
        mediaNota: 5,

        iconeRestricao1: '<img width="50px" height="50px" src="assets/images/icon_gluten.png" alt="glutem" title="Contém Glútem"/>',
        iconeRestricao2: '<img width="50px" height="50px" src="assets/images/icon_vegan-on.png" alt="vegano" title="Vegano"/>',
        iconeRestricao3: '',
        iconeRestricao4: '',

        ingredientes: ['2 xícaras de farinha de trigo', '1/4 xícaras de amido de milho', '1/2 xícaras de cacau em pó', '1+1/2 xícaras de açúcar', '1 colher de sopa de bicarbonato de sódio', '1/2 colher de sopa de fermento quimico', '1 pitada sal;', ' 1+1/2 xícaras de agua', '1/2 xícara de óleo', '1/4 xícara de café', '1 colher de sopa de vinagre'],
        bolinha: '<img width="11px" height="11px" src="assets/images/img_reh/circuloamarelo1.png"/>',

        preparo: ['Coloque o forno para pré aquecer em 200ºC.', 'Em uma vasilha misture todos os secos peneirados.', 'Em outro recipiente coloque todos os molhados e os despeje sobre os secos.', 'Misture todos os ingredientes até obter uma massa homogênea.', 'Despeje a massa na forma e a coloque no forno.', 'Após 10 minutos reduzir a temperatura para 180ºC.', 'Após assado retirar do forno.', 'Desenformar com o bolo frio ou morno mais para frio.'],
        setinha: '<img width="15px" height="15px" src="assets/images/img_reh/setaamarela1.png"/>',
        
        dicas: ['Dê preferência a óleos neutros, como os de: girassol, canola e milho.', 'Caso não possua amido de milho basta usar a mesma quantidade de farinha de trigo, o amido de milho serve para deixar o bolo mais fofinho ainda.', 'Ao fazer o café faça ele forte, independente se é coado ou expresso, afinal, ele serve para destacar o sabor do cacau.', 'O vinagre de preferência para o de álcool ou de maçã, porém outros não costumam deixar sabor residual, ele serve para auxiliar no crescimento da massa.'],
       
    },    
    ]*/
let i = 0;

// populando imagem da receita

    const imagemRec = document.createElement('div');

    imagemRec.innerHTML = `
    <img class="imagem_receita" src="${listaReceita[i].imagem}" alt="foto_receita" title="${listaReceita[i].nomeReceita}"/>
    `

    const divImagemRec = document.querySelector('div[class="imagem_rec"]');
    
    divImagemRec.appendChild(imagemRec);



// populando o título e sub título

    const textoDescricaoReceita = Object.assign(document.createElement('div'), {
       classList: ['texto_descricao_receita']
    });
    
    textoDescricaoReceita.innerHTML = `
    <h1>${listaReceita[i].nomeReceita}</h1>
    <p>${listaReceita[i].descricao}</p>    
    `    

    const divTituloReceita = document.querySelector('div[class="titulo_receita"]');
    
    divTituloReceita.appendChild(textoDescricaoReceita);



// populando dados da receita

const dados = document.createElement('div');

dados.innerHTML = `
<p><strong>Autor:</strong> ${listaReceita[i].autor}</p>
<p><strong>Tempo de Preparo:</strong> ${listaReceita[i].tempoPreparo} min</p>
<p><strong>Rendimento:</strong> ${listaReceita[i].rendimento} porções</p>
<p><strong>Dificuldade:</strong> ${listaReceita[i].dificuldade}</p>
`

const dadosReceita = document.querySelector('div[class="dados_receita"]');

dadosReceita.appendChild(dados);



// populando ícones de restrição

//ícone 1
const icone1 = Object.assign(document.createElement('div'), {
    classList: ['icone1']
 });

 icone1.innerHTML = `
 ${listaReceita[i].iconeRestricao1}
 `

 const iconesRestricao = document.querySelector('div[class="icones_restricao"]');

 iconesRestricao.appendChild(icone1);


 //ícone 2
const icone2 = Object.assign(document.createElement('div'), {
    classList: ['icone2']
 });

 icone2.innerHTML = `
 ${listaReceita[i].iconeRestricao2}
 `

 iconesRestricao.appendChild(icone2);


 //ícone 3
const icone3 = Object.assign(document.createElement('div'), {
    classList: ['icone3']
 });

 icone3.innerHTML = `
 ${listaReceita[i].iconeRestricao3}
 `

 iconesRestricao.appendChild(icone3);


 //ícone 4
const icone4 = Object.assign(document.createElement('div'), {
    classList: ['icone4']
 });

 icone4.innerHTML = `
 ${listaReceita[i].iconeRestricao4}
 `

 iconesRestricao.appendChild(icone4);



// populando Ingredientes

const ingredientes = document.createElement('div');


ingredientes.innerHTML = `
<h2>Ingredientes:</h2>
<nav>
    <ul>  
                                    
        <li>${listaReceita[i].bolinha} ${listaReceita[i].ingredientes[0]}</li>
        <li>${listaReceita[i].bolinha} ${listaReceita[i].ingredientes[1]}</li>
        <li>${listaReceita[i].bolinha} ${listaReceita[i].ingredientes[2]}</li>
        <li>${listaReceita[i].bolinha} ${listaReceita[i].ingredientes[3]}</li>
        <li>${listaReceita[i].bolinha} ${listaReceita[i].ingredientes[4]}</li>
        <li>${listaReceita[i].bolinha} ${listaReceita[i].ingredientes[5]}</li>
        <li>${listaReceita[i].bolinha} ${listaReceita[i].ingredientes[6]}</li>
        <li>${listaReceita[i].bolinha} ${listaReceita[i].ingredientes[7]}</li>
        <li>${listaReceita[i].bolinha} ${listaReceita[i].ingredientes[8]}</li>
        <li>${listaReceita[i].bolinha} ${listaReceita[i].ingredientes[9]}</li>
        <li>${listaReceita[i].bolinha} ${listaReceita[i].ingredientes[10]}</li>
        
    </ul>
</nav>
`

const listaIngredientes = document.querySelector('div[class="lista_ingredientes"]');

listaIngredientes.appendChild(ingredientes);



// populando modo de preparo

const preparo = document.createElement('div');

preparo.innerHTML = `
<h2>Modo de preparo:</h2>
<nav>
    <ul>
        <li>${listaReceita[i].setinha} ${listaReceita[i].preparo[0]}</li>
        <li>${listaReceita[i].setinha} ${listaReceita[i].preparo[1]}</li>
        <li>${listaReceita[i].setinha} ${listaReceita[i].preparo[2]}</li>
        <li>${listaReceita[i].setinha} ${listaReceita[i].preparo[3]}</li>
        <li>${listaReceita[i].setinha} ${listaReceita[i].preparo[4]}</li>
        <li>${listaReceita[i].setinha} ${listaReceita[i].preparo[5]}</li>
        <li>${listaReceita[i].setinha} ${listaReceita[i].preparo[6]}</li>
        <li>${listaReceita[i].setinha} ${listaReceita[i].preparo[7]}</li>
    </ul>
</nav>
`

const textoModoPreparo = document.querySelector('div[class="preparo"]');

textoModoPreparo.appendChild(preparo);



// populando dicas

const dicasRec = document.createElement('div');

dicasRec.innerHTML = `
<h3>Dicas:</h3>
<nav>
    <ul>
        <li>${listaReceita[i].dicas[0]}</li>
        <li>${listaReceita[i].dicas[1]}</li>
        <li>${listaReceita[i].dicas[2]}</li>
        <li>${listaReceita[i].dicas[3]}</li>
    </ul>
</nav>
`

const dicas = document.querySelector('div[class="dicas"]');

dicas.appendChild(dicasRec);



// populando Receitas da Barra lateral


// receita 1
const receitaBox1 = Object.assign(document.createElement('div'), {
    classList: ['box_barra']
 });

receitaBox1.innerHTML = `
<a title="${listaReceita[i+1].nomeReceita}" target="_blank" href="#">
    <img class="imagem_box" width=120px src="${listaReceita[i+1].imagem}" alt="foto_receita" />
    <div class="titulo_autor">
        <p class="titulo_rec"> ${listaReceita[i+1].nomeReceita}</p>
        <p class="autor_rec">Por: ${listaReceita[i+1].autor}</p>
    </div>
</a>
`

const boxBarraRec = document.querySelector('div[class="box_barras"]');

boxBarraRec.appendChild(receitaBox1);



// receita 2
const receitaBox2 = Object.assign(document.createElement('div'), {
    classList: ['box_barra']
 });

receitaBox2.innerHTML = `
<a title="${listaReceita[i+2].nomeReceita}" target="_blank" href="#">
    <img class="imagem_box" width=120px src="${listaReceita[i+2].imagem}" alt="foto_receita" />
    <div class="titulo_autor">
        <p class="titulo_rec"> ${listaReceita[i+2].nomeReceita}</p>
        <p class="autor_rec">Por: ${listaReceita[i+2].autor}</p>
    </div>
</a>
`

boxBarraRec.appendChild(receitaBox2);



// receita 3
const receitaBox3 = Object.assign(document.createElement('div'), {
    classList: ['box_barra']
 });

receitaBox3.innerHTML = `
<a title="${listaReceita[i+3].nomeReceita}" target="_blank" href="#">
    <img class="imagem_box" width=120px src="${listaReceita[i+3].imagem}" alt="foto_receita" />
    <div class="titulo_autor">
        <p class="titulo_rec"> ${listaReceita[i+3].nomeReceita}</p>
        <p class="autor_rec">Por: ${listaReceita[i+3].autor}</p>
    </div>
</a>
`

boxBarraRec.appendChild(receitaBox3);



// receita 4
const receitaBox4 = Object.assign(document.createElement('div'), {
    classList: ['box_barra']
 });

receitaBox4.innerHTML = `
<a title="${listaReceita[i+4].nomeReceita}" target="_blank" href="#">
    <img class="imagem_box" width=120px src="${listaReceita[i+4].imagem}" alt="foto_receita" />
    <div class="titulo_autor">
        <p class="titulo_rec"> ${listaReceita[i+4].nomeReceita}</p>
        <p class="autor_rec">Por: ${listaReceita[i+4].autor}</p>
    </div>
</a>
`

boxBarraRec.appendChild(receitaBox4);