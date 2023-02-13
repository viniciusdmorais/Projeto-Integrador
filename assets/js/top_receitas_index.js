function CriaTopReceitas() {
  const secAntes = document.getElementById("section_main_2"); // pegando o elemento que será alterado

  listaReceita.sort((a, b) => b.mediaNota - a.mediaNota); // ordenando as receitas pelo valor da média

  listaReceita.length = 3; // limitando aos 3 primeiros para ser apresentado no for abaixo

  for (let i = 0; i <= listaReceita.length; i++) {
    const elemRank = document.createElement("article"); // variavel sendo criada com o novo elemento tag article
    // abaixo estou incluindo dentro do article um innerHTML com tags populadas pelo objeto listaReceita
    elemRank.innerHTML = `
        <figure id="nome_receitas">
            <a href="receita_completa.html?receitaID=${listaReceita[i].idReceita}">
                <img src="${listaReceita[i].imagem}" alt="${listaReceita[i].nomeReceita}">
                <figcaption> ${listaReceita[i].nomeReceita} </figcaption>
            </a>
         <figure>     
            `;

    secAntes.appendChild(elemRank); // agora estou appendando o novo elemento
  }
}
CriaTopReceitas();
