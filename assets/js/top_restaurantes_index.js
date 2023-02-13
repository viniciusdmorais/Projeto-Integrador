function CriaTopRestaurantes() {
  const secRestAntes = document.getElementById("section_restaurantes"); // pegando o elemento que será alterado

  listaRestaurante.sort((a, b) => b.mediaNota - a.mediaNota); // ordenando as receitas pelo valor da média

  listaRestaurante.length = 3; // limitando aos 3 primeiros para ser apresentado no for abaixo

  for (let i = 0; i <= listaRestaurante.length; i++) {
    const elemRankRestorant = document.createElement("article"); // variavel sendo criada com o novo elemento tag article
    // abaixo estou incluindo dentro do article um innerHTML com tags populadas pelo objeto rankReceitas
    elemRankRestorant.innerHTML = `
        <figure id="nome_restaurantes">
            <a href="restaurante_indicado.html?idRestaurante=${listaRestaurante[i].idRestaurante}">
                <img src="${listaRestaurante[i].imagem}" alt="${listaRestaurante[i].nomeRestaurante}">
                <figcaption> ${listaRestaurante[i].nomeRestaurante} </figcaption>
            </a>
         <figure>     
            `;

    secRestAntes.appendChild(elemRankRestorant); // agora estou appendando o novo elemento
  }
}
CriaTopRestaurantes();
