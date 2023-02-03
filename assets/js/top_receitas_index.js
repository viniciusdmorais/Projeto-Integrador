import  rankReceitas  from './receitas.js'

function CriaTopReceitas() {
  const secAntes = document.getElementById("section_main_2"); // pegando o elemento que será alterado

  rankReceitas.sort((a, b) => b.mediaNota - a.mediaNota); // ordenando as receitas pelo valor da média

  rankReceitas.length = 3; // limitando aos 3 primeiros para ser apresentado no for abaixo

  for (let i = 0; i <= rankReceitas.length; i++) {
    const elemRank = document.createElement("article"); // variavel sendo criada com o novo elemento tag article
    // abaixo estou incluindo dentro do article um innerHTML com tags populadas pelo objeto rankReceitas
    elemRank.innerHTML = `
        <figure id="nome_receitas">
            <a href="receitas_prontas_tst.html?receitaID=${rankReceitas[i].idReceita}">
                <img src="${rankReceitas[i].imagem}" alt="${rankReceitas[i].nomeReceita}">
                <figcaption> ${rankReceitas[i].nomeReceita} </figcaption>
            </a>
         <figure>     
            `;

    secAntes.appendChild(elemRank); // agora estou appendando o novo elemento
  }
}
CriaTopReceitas();
