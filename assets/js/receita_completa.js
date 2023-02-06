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
<p><strong>Rendimento:</strong> ${listaReceita[i].rendimento}</p>
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

const ulIngredientes = document.getElementById('ingredientes');
const conteudoULingre = ulIngredientes.childNodes;


for (x=0; x < listaReceita[i].ingredientes.length; x++) {
    let li = document.createElement('li');
    li.innerHTML = `${listaReceita[i].bolinha} ${listaReceita[i].ingredientes[x]}`;
    ulIngredientes.appendChild(li);
}



// populando modo de preparo

const ulPreparo = document.getElementById('preparo');
const conteudoULprep = ulPreparo.childNodes;


for (x=0; x < listaReceita[i].preparo.length; x++) {
    let li = document.createElement('li');
    li.innerHTML = `${listaReceita[i].setinha} ${listaReceita[i].preparo[x]}`;
    ulPreparo.appendChild(li);
}



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
<a title="${listaReceita[i+2].nomeReceita}" href="/receita_completa.html?receitaID=${listaReceita[i+2].idReceita}">
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
<a title="${listaReceita[i+3].nomeReceita}" href="/receita_completa.html?receitaID=${listaReceita[i+3].idReceita}">
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
<a title="${listaReceita[i+4].nomeReceita}" href="/receita_completa.html?receitaID=${listaReceita[i+4].idReceita}">
    <img class="imagem_box" width=120px src="${listaReceita[i+4].imagem}" alt="foto_receita" />
    <div class="titulo_autor">
        <p class="titulo_rec"> ${listaReceita[i+4].nomeReceita}</p>
        <p class="autor_rec">Por: ${listaReceita[i+4].autor}</p>
    </div>
</a>
`

boxBarraRec.appendChild(receitaBox4);



