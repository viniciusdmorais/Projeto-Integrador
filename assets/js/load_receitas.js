const listaReceita = [
    {
        idReceita: 1,
        nomeReceita: "Bolo de Chocolate",
        tempoPreparo: 40,
        imagem: "https://www.vaisefood.com/wp-content/uploads/2012/11/bolocacau.jpg",
        vegano: true,
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
        vegano: true,
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
        nomeReceita: "Batida de Coco",
        tempoPreparo: 5,
        imagem: "https://minhasdelicias.com/wp-content/uploads/2021/12/Batida-De-Coco-Sensacional.jpg",
        vegano: false,
        glutem: false,
        soja: false,
        amendoim: false,
        ovo: false,
        leite: true,
        crustaceo: false,
        doce: true,
        salgado: false,
        descricao: "Batida de Coco com base de Pinga",
        ingredientes: "200ml de leite de coco;200ml de pinga;395g de leite condensado;100g coco ralado umido",
        preparo: "No liquidificador colocar todos os ingredientes, apenas reservando uma pequena quantidade de coco ralado para finalizar o copo, e bata por 3min.;Após servir no copo basta colocar um pouco do coco ralado por cima da bebida. Servir gelado.",
        mediaNota: 0,
    },
    {
        idReceita: 4,
        nomeReceita: "",
        tempoPreparo: 0,
        imagem: "",
        vegano: false,
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
        vegano: false,
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
        vegano: false,
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
        vegano: false,
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
        vegano: false,
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
        vegano: false,
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
        vegano: false,
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
        vegano: false,
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
        vegano: false,
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
        idReceita: 13,
        nomeReceita: "",
        tempoPreparo: 0,
        imagem: "",
        vegano: false,
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
    }
];

function creatCardReceitas(i) {
    let alergIcons = "";
    
    if (listaReceita[i].amendoim) {
        alergIcons += `
            <img src="assets/images/icon_peanut.png" alt="Contem Amendoim" />
            `;
    }
    if (listaReceita[i].crustaceo) {
        alergIcons += `
            <img src="assets/images/icon_seafood.png" alt="Contem Crustáceos" />
            `;
    }
    if (listaReceita[i].glutem) {
        alergIcons += `
            <img src="assets/images/icon_gluten.png" alt="Contem Glutem" />
            `;
    }
    if (listaReceita[i].leite) {
        alergIcons += `
            <img src="assets/images/icon_milk.png" alt="Contem Leite" />
            `;
    }
    if (listaReceita[i].ovo) {
        alergIcons += `
            <img src="assets/images/icon_eggs.png" alt="Contem Ovo" />
            `;
    }
    if (listaReceita[i].soja) {
        alergIcons += `
            <img src="assets/images/icon_soy.png" alt="Contem Soja" />
            `;
    }
    if (listaReceita[i].vegano) {
        alergIcons += `
            <img src="assets/images/icon_vegan-on.png" alt="Contem Vegano" />
            `;
    }

    const newArticle = document.createElement("article");

    newArticle.innerHTML = `
            <a href="receitas_prontas_tst.html?receitaID=${listaReceita[i].idReceita}">
                <img src="${listaReceita[i].imagem}" alt="Foto ${listaReceita[i].nomeReceita}" class="photoReceita" />
                <h3>${listaReceita[i].nomeReceita}</h3>
            </a>
            <h6>Temo medio de preparo: ${listaReceita[i].tempoPreparo}min - 300 views</h6>
            <div class="iconAlerg"> ${alergIcons} </div>
            <p>${listaReceita[i].descricao}</p>
        `;

    document.querySelector("main").appendChild(newArticle);
}

function listReceitas(pg) {
    let filter = {
        veg: document.getElementById('ckb_veg').checked,
        ovo: document.getElementById('ckb_ovo').checked,
        soja: document.getElementById('ckb_soja').checked,
        leite: document.getElementById('ckb_leite').checked,
        glutem: document.getElementById('ckb_glutem').checked,
        amend: document.getElementById('ckb_amendoim').checked,
        crust: document.getElementById('ckb_crustaceos').checked,
        minTmp: Number(document.getElementById('tmp_min').value),
        maxTmp: Number(document.getElementById('tmp_max').value)
    };

    let limit = 12 * pg;
    let i = limit - 12;
    (limit >= listaReceita.length && i < listaReceita.length)?limit=listaReceita.length:limit=12;
    
    if (Object.values(filter).filter((value) => value == true || value != 0).length == 0) {
        for(i; i<=limit; i++) {
            creatCardReceitas(i);
        }
    } else {
        for (i; i < limit; i++) {
            let validate = false
            let tmp = false;

            for(let [key, val] of Object.entries(filter)) {
                if (val==true || val>0) {
                    if (key=='veg') {
                        (listaReceita[i].vegano==true)?validate=true:validate=false;
                        break;
                    }
                    if (key=='ovo') {
                        (listaReceita[i].ovo==false)?validate=true:validate=false;
                        break;
                    }
                    if (key=='soja') {
                        (listaReceita[i].soja==false)?validate=true:validate=false;
                        break;
                    }
                    if (key=='leite') {
                        (listaReceita[i].leite==false)?validate=true:validate=false;
                        break;
                    }
                    if (key=='glutem') {
                        (listaReceita[i].glutem==false)?validate=true:validate=false;
                        break;
                    }
                    if (key=='amend') {
                        (listaReceita[i].amendoim==false)?validate=true:validate=false;
                        break;
                    }
                    if (key=='crust') {
                        (listaReceita[i].crustaceo==false)?validate=true:validate=false;
                        break;
                    }
                    if (key=='minTmp') {
                        (val>0 || listaReceita[i].tempoPreparo>val)?tmp=true:tmp=false;
                        break;
                    }
                    if (key=='maxTmp') {
                        ((val>0 || listaReceita[i].tempoPreparo<=val) && tmp)?validate=true:'';
                        break;
                    }
                }
            }

            (validate)?creatCardReceitas(i):'';
        };
        

    }

    

    
}

function searchReceita(numID) {
    for (let i = 0; i <= listaReceita.length; i++) {
        if (numID == listaReceita[i].idReceita) {
            document.querySelector(".imagem_receita").src =
                listaReceita[i].imagem;

            const dados = document.createElement("div");
            dados.className = "texto_receita";
            dados.innerHTML = `
                <h1>${listaReceita[i].nomeReceita}</h1>
                <p>${listaReceita[i].descricao}</p>
                <p>Temo medio de preparo: ${listaReceita[i].tempoPreparo}min - 300 views</p>
            `;

            const detalhes = document.createElement("div");
            detalhes.className = "dados_receita";
            detalhes.innerHTML = `
                <p><strong>Autor:</strong> Bora Comer</p>
                <p><strong>Tempo de Preparo:</strong> ${listaReceita[i].tempoPreparo} min</p>
                <p><strong>Rendimento:</strong> 6 porções</p>
            `;

            const baseMain = document.querySelector(".total");
            baseMain.appendChild(dados);
            baseMain.appendChild(detalhes);
        }
    }
}

//export default listReceitas;
