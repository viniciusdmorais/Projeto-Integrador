let i = Number(new URLSearchParams(window.location.search).get('receitaID'))-1;

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
<a title="${listaReceita[i+1].nomeReceita}" href="/receita_completa.html?receitaID=${listaReceita[i+1].idReceita}">
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
<a title="${listaReceita[i+2].nomeReceita}" href="/receita_completa.html?receitaID=${listaReceita[i+1].idReceita}">
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
<a title="${listaReceita[i+3].nomeReceita}" href="/receita_completa.html?receitaID=${listaReceita[i+1].idReceita}">
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
<a title="${listaReceita[i+4].nomeReceita}" href="/receita_completa.html?receitaID=${listaReceita[i+1].idReceita}">
    <img class="imagem_box" width=120px src="${listaReceita[i+4].imagem}" alt="foto_receita" />
    <div class="titulo_autor">
        <p class="titulo_rec"> ${listaReceita[i+4].nomeReceita}</p>
        <p class="autor_rec">Por: ${listaReceita[i+4].autor}</p>
    </div>
</a>
`

boxBarraRec.appendChild(receitaBox4);