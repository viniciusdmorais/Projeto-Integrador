let i = Number(new URLSearchParams(window.location.search).get('idRestaurante'))-1;


// populando o título e sub título

const textoDescricaoRestaurante = document.createElement('div')
 
 textoDescricaoRestaurante.innerHTML = `
 <h1>${listaRestaurante[i].nomeRestaurante}</h1>
 <p>${listaRestaurante[i].descricao}</p>    
 `    

 const divTituloRestaurante = document.querySelector('div[class="titulo_restaurante"]');
 
 divTituloRestaurante.appendChild(textoDescricaoRestaurante);



// populando imagem da restaurante

const imagemRest = Object.assign(document.createElement('div'), {
    classList: ['img_botoes']
 });

    imagemRest.innerHTML = `
    <img class="imagem_restaurante" width="450px" height="350px" src="${listaRestaurante[i].imagem}" alt="foto_restaurante" title="${listaRestaurante[i].nomeRestaurante}">
                                
    <div class="botoes_fotos">
        <img src="assets/images/img_reh/setaamarelaesquerda.png" class="botoes_seta" title="Mais fotos - Voltar">
        <img src="assets/images/img_reh/setaamareladireita.png" class="botoes_seta" title="Mais fotos - Avançar">                            
    </div>
    `

    const divImagemRest = document.querySelector('div[class="imgBotoes"]');
    
    divImagemRest.appendChild(imagemRest);



// populando endereço do Restaurante

const endRestaurante = Object.assign(document.createElement('div'), {
    classList: ['google_maps_restaurante']
});
    
endRestaurante.innerHTML = `
    <h1>Localização</h1>
    <div class="endereco" title="Endereço">
        <img width="30px" height="30px" src="assets/images/img_reh/localizacao1.png" alt="localização" >
        <p>${listaRestaurante[i].endereco}</p>
    </div>

    <div class="google_maps_img">                 
        ${listaRestaurante[i].googleFoto}
    </div>
    `
    
    const divEndRest = document.querySelector('div[class="localizacao"]');
        
    divEndRest.appendChild(endRestaurante);



// populando Descrição completa do Restaurante

const descrCompleta = Object.assign(document.createElement('div'), {
    classList: ['texto_descricao_restaurante']
});
    
descrCompleta.innerHTML = `
<p>${listaRestaurante[i].descricaoCompleta}</p>
    `
    
const divDescRestaurante = document.querySelector('div[class="texto_descricao"]');
        
divDescRestaurante.appendChild(descrCompleta);




// populando Outras Informações do Restaurante

const OutrasInfos = Object.assign(document.createElement('div'), {
    classList: ['outras_informacoes']
});


OutrasInfos.innerHTML = `
<h2>Outras informações:</h2>

<div class="estrelinhas" title="Nota">
    <img width="35px" height="35px" src="assets/images/img_reh/estrela1.png" alt="preço" >
    <p><strong>Nota do Local:</strong> ${listaRestaurante[i].mediaNota}</p>
</div>

<div class="faixa_preco" title="Preço">
    <img width="35px" height="35px" src="assets/images/img_reh/sifrao1.png" alt="preço" >
    <p><strong>Faixa de Preço:</strong> ${listaRestaurante[i].faixaPreco}</p>
</div>

<div class="horario" title="Horário">
    <img width="35px" height="35px" src="assets/images/img_reh/relogio1.png" alt="horário" >
    <p><strong>Horários:</strong> ${listaRestaurante[i].horarios}</p>
</div>

<div class="telefone" title="Telefone">
    <img width="35px" height="35px" src="assets/images/img_reh/telefone1.png" alt="telefone" >
    <p><strong>Telefone:</strong> ${listaRestaurante[i].telefone}</p>
</div>
`
    
const divOutrasInfos = document.querySelector('div[class="informacoes"]');
        
divOutrasInfos.appendChild(OutrasInfos);




// populando Restaurantes da Barra lateral


// restaurante 1
const restauranteBox1 = Object.assign(document.createElement('div'), {
    classList: ['box_barra']
 });

 restauranteBox1.innerHTML = `
 <a title="${listaRestaurante[2].nomeRestaurante}"  href="restaurante_indicado.html?idRestaurante=${listaRestaurante[2].idRestaurante}">
    <img class="imagem_box" width=120px src="${listaRestaurante[2].imagem}" alt="foto_restaurante"/>
    <div class="link_restaurante">
        <p class="nome_restaurante">${listaRestaurante[2].nomeRestaurante}</p>        
    </div>
 </a>
`

const boxBarraRest = document.querySelector('div[class="box_barras"]');

boxBarraRest.appendChild(restauranteBox1);


// restaurante 2
const restauranteBox2 = Object.assign(document.createElement('div'), {
    classList: ['box_barra']
 });

restauranteBox2.innerHTML = `
<a title="${listaRestaurante[3].nomeRestaurante}"  href="restaurante_indicado.html?idRestaurante=${listaRestaurante[3].idRestaurante}">
    <img class="imagem_box" width=120px src="${listaRestaurante[3].imagem}" alt="foto_restaurante"/>
    <div class="link_restaurante">
        <p class="nome_restaurante">${listaRestaurante[3].nomeRestaurante}</p>        
    </div>
 </a>
`

boxBarraRest.appendChild(restauranteBox2);


// restaurante 3
const restauranteBox3 = Object.assign(document.createElement('div'), {
    classList: ['box_barra']
 });

restauranteBox3.innerHTML = `
<a title="${listaRestaurante[4].nomeRestaurante}"   href="restaurante_indicado.html?idRestaurante=${listaRestaurante[4].idRestaurante}">
    <img class="imagem_box" width=120px src="${listaRestaurante[4].imagem}" alt="foto_restaurante"/>
    <div class="link_restaurante">
        <p class="nome_restaurante">${listaRestaurante[4].nomeRestaurante}</p>        
    </div>
 </a>
`

boxBarraRest.appendChild(restauranteBox3);



// restaurante 4
const restauranteBox4 = Object.assign(document.createElement('div'), {
    classList: ['box_barra']
 });

restauranteBox4.innerHTML = `
<a title="${listaRestaurante[5].nomeRestaurante}"  href="restaurante_indicado.html?idRestaurante=${listaRestaurante[5].idRestaurante}">
    <img class="imagem_box" width=120px src="${listaRestaurante[5].imagem}" alt="foto_restaurante"/>
    <div class="link_restaurante">
        <p class="nome_restaurante">${listaRestaurante[5].nomeRestaurante}</p>        
    </div>
 </a>
`

boxBarraRest.appendChild(restauranteBox4);






