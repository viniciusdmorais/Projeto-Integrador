const listReceitas = [
    {
        idReceita: 1,
        nomeReceita: "Bolo de Chocolate",
        tempoPreparo: 40,
        imagem: "https://www.vaisefood.com/wp-content/uploads/2012/11/bolocacau.jpg",
        vagano: true,
        glutem: true,
        soja: false,
        amendoim: false,
        ovo: false,
        leite: false,
        crustaceo: false,
        doce: true,
        salgado: false,
        descricao: "Bolo de chocolate usando cacau 100%, vegano e fofinho",
        ingredientes:
            "Secos:;2 xícaras de farinha de trigo; 1/4 xícaras de amido de milho; 1/2 xícaras de cacau em pó; 1+1/2 xícaras de açucar; 1 colher de sopa de bicarbonato de sódio; 1/2 colher de sopa de fermento quimico; pitada sal; Molhados:; 1+1/2 xicaras de agua; 1/2 xicara de óleo; 1/4 xícara de café; 1 colher de sopa de vinagre",
        preparo:
            "Coloque o forno para pré aquecer em 200ºC; Unte uma forma com óleo e polvilhe amido de milho ou farinha; Em uma vasilha misture todos os secos peneirados; Em outro recipiente coloque todos os molhados e os despeje sobre os secos; Misture todos os ingredientes até obter uma massa homogênea; Despeje a massa na forma e a coloque no forno; Após 10 minutos reduzir a temperatura para 180ºC; Após assado retirar do forno; Desenformar com o bolo frio ou morno mais para frio; Dicas:; Dê preferência a óleos neutros, como os de: girassol, canola e milho; Caso não possua amido de milho basta usar a mesma quantidade de farinha de trigo, o amido de milho serve para deixar o bolo mais fofinho ainda; Ao fazer o café faça ele forte, independente se é coado, ou expresso, afinal, ele serve para destacar o sabor do cacau; O vinagre de preferência para o de álcool ou de maçã, porém outros não costumam deixar sabor residual, ele serve para auxiliar no crescimento da massa",
        mediaNota: 5,
    },
    {
        idReceita: 2,
        nomeReceita: "Batata bolinha ao Missô",
        tempoPreparo: 40,
        imagem: "https://img.itdg.com.br/tdg/images/recipes/000/163/173/125970/125970_original.jpg?mode=crop&width=710&height=400",
        vagano: true,
        glutem: false,
        soja: true,
        amendoim: false,
        ovo: false,
        leite: false,
        crustaceo: false,
        doce: false,
        salgado: true,
        descricao: "Batatinha ao molho de misso, receita proteica e saldavel",
        ingredientes:
            "1 kg de batatinhas bolinha/festa lavada; 2 Colheres (sopa) de água; 4 Colheres (sopa) de azeite; 1 + ½ Colheres (sopa) de Missô Shiro; 2 + ½ Colheres (sopa) de Vinagre de Arroz; 1 Colher (sopa) de açúcar; 3 Colheres (sopa) de limão; ½ Xícara (chá) de salsinha picada",
        preparo:
            "Cozinhe as batatas porém ainda firmes, mesmo ponto para batata vinagrete e reserve em um recipiente que tenha tampa; Em outro recipiente coloque os todos os outros ingredientes com exceção  da salsinha e misture até formar um molho homogêneo; Faça furos nas batatas para o molho penetrar melhor; Coloque o molho e a salsinha picada sobre as batatas e misture até envolver as batatas; Deixe descansando na geladeira ao menos 20min, porém o ideal é ao menos 8hrs para o molho entrar melhor na batata",
        mediaNota: 4,
    },
    {
        idReceita: 3,
        nomeReceita: "",
        tempoPreparo: 0,
        imagem: "",
        vagano: false,
        glutem: false,
        soja: false,
        amendoim: false,
        ovo: false,
        leite: false,
        crustaceo: false,
        doce: false,
        salgado: false,
        descricao: "",
        ingredientes: "",
        preparo: "",
        mediaNota: 0,
    },
    {
        idReceita: 4,
        nomeReceita: "",
        tempoPreparo: 0,
        imagem: "",
        vagano: false,
        glutem: false,
        soja: false,
        amendoim: false,
        ovo: false,
        leite: false,
        crustaceo: false,
        doce: false,
        salgado: false,
        descricao: "",
        ingredientes: "",
        preparo: "",
        mediaNota: 0,
    },
    {
        idReceita: 5,
        nomeReceita: "",
        tempoPreparo: 0,
        imagem: "",
        vagano: false,
        glutem: false,
        soja: false,
        amendoim: false,
        ovo: false,
        leite: false,
        crustaceo: false,
        doce: false,
        salgado: false,
        descricao: "",
        ingredientes: "",
        preparo: "",
        mediaNota: 0,
    },
    {
        idReceita: 6,
        nomeReceita: "",
        tempoPreparo: 0,
        imagem: "",
        vagano: false,
        glutem: false,
        soja: false,
        amendoim: false,
        ovo: false,
        leite: false,
        crustaceo: false,
        doce: false,
        salgado: false,
        descricao: "",
        ingredientes: "",
        preparo: "",
        mediaNota: 0,
    },
    {
        idReceita: 7,
        nomeReceita: "",
        tempoPreparo: 0,
        imagem: "",
        vagano: false,
        glutem: false,
        soja: false,
        amendoim: false,
        ovo: false,
        leite: false,
        crustaceo: false,
        doce: false,
        salgado: false,
        descricao: "",
        ingredientes: "",
        preparo: "",
        mediaNota: 0,
    },
    {
        idReceita: 8,
        nomeReceita: "",
        tempoPreparo: 0,
        imagem: "",
        vagano: false,
        glutem: false,
        soja: false,
        amendoim: false,
        ovo: false,
        leite: false,
        crustaceo: false,
        doce: false,
        salgado: false,
        descricao: "",
        ingredientes: "",
        preparo: "",
        mediaNota: 0,
    },
    {
        idReceita: 9,
        nomeReceita: "",
        tempoPreparo: 0,
        imagem: "",
        vagano: false,
        glutem: false,
        soja: false,
        amendoim: false,
        ovo: false,
        leite: false,
        crustaceo: false,
        doce: false,
        salgado: false,
        descricao: "",
        ingredientes: "",
        preparo: "",
        mediaNota: 0,
    },
    {
        idReceita: 10,
        nomeReceita: "",
        tempoPreparo: 0,
        imagem: "",
        vagano: false,
        glutem: false,
        soja: false,
        amendoim: false,
        ovo: false,
        leite: false,
        crustaceo: false,
        doce: false,
        salgado: false,
        descricao: "",
        ingredientes: "",
        preparo: "",
        mediaNota: 0,
    },
    {
        idReceita: 11,
        nomeReceita: "",
        tempoPreparo: 0,
        imagem: "",
        vagano: false,
        glutem: false,
        soja: false,
        amendoim: false,
        ovo: false,
        leite: false,
        crustaceo: false,
        doce: false,
        salgado: false,
        descricao: "",
        ingredientes: "",
        preparo: "",
        mediaNota: 0,
    },
    {
        idReceita: 12,
        nomeReceita: "",
        tempoPreparo: 0,
        imagem: "",
        vagano: false,
        glutem: false,
        soja: false,
        amendoim: false,
        ovo: false,
        leite: false,
        crustaceo: false,
        doce: false,
        salgado: false,
        descricao: "",
        ingredientes: "",
        preparo: "",
        mediaNota: 0,
    },
];

function creatCardReceitas() {
    for (let i = 0; i <= listReceitas.length; i++) {
        const newArticle = document.createElement("article");

        newArticle.innerHTML = `
            <img src="${listReceitas[i].imagem}" alt="Foto ${listReceitas[i].nomeReceita}">
            <h2>${listReceitas[i].nomeReceita}</h2>
            <p>Temo medio de preparo: ${listReceitas[i].tempoPreparo}min - 300 views</p>
            <ul>
                <li><img src="#" alt="Icone sem glutem"></li>
                <li><img src="#" alt="Icone sem soja"></li>
                <li><img src="#" alt="Icone sem amendoin"></li>
                <li><img src="#" alt="Icone vegano"></li>
            </ul>
            <p>${listReceitas[i].descricao}</p>
        `;

        const baseMain = document.querySelector("main");
        baseMain.appendChild(newArticle);
    }
}

function searchReceita(numID) {
    for (let i = 0; i <= listReceitas.length; i++) {

        if (numID == listReceitas[i].idReceita) {
            
            document.querySelector(".imagem_receita").src = listReceitas[i].imagem;


            const dados = document.createElement("div");
            dados.className = "texto_receita"
            dados.innerHTML = `
                <h1>${listReceitas[i].nomeReceita}</h1>
                <p>${listReceitas[i].descricao}</p>
                <p>Temo medio de preparo: ${listReceitas[i].tempoPreparo}min - 300 views</p>
            `;

            const detalhes = document.createElement("div");
            detalhes.className = "dados_receita"
            detalhes.innerHTML = `
                <p><strong>Autor:</strong> Bora Comer</p>
                <p><strong>Tempo de Preparo:</strong> ${listReceitas[i].tempoPreparo} min</p>
                <p><strong>Rendimento:</strong> 6 porções</p>
            `;

            const baseMain = document.querySelector(".total");
            baseMain.appendChild(dados);
            baseMain.appendChild(detalhes);

        }

    }
}
