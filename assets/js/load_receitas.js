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
        nomeReceita: "Lasanha",
        tempoPreparo: 90,
        imagem: "https://img.itdg.com.br/tdg/images/recipes/000/138/558/352650/352650_original.jpg?mode=crop&width=710&height=400",
        vegano: false,
        glutem: false,
        soja: false,
        amendoim: false,
        ovo: true,
        leite: true,
        crustaceo: false,
        doce: false,
        salgado: true,
        descricao: "Lasanha clássica com camadas de molho de carne, macarrão e molho branco cremoso.",
        ingredientes: "12 folhas de lasanha; 500g de carne moída; 1 cebola picada; 2 dentes de alho picados; 1 lata de tomate pelado; 1 colher de sopa de açúcar; 1 colher de sopa de molho de tomate; Sal e pimenta a gosto; 200g de ricota; 200ml de creme de leite; 1 xícara de queijo ralado; 1 ovo; Noz-moscada a gosto",
        preparo: "Pré-aqueça o forno a 180°C; Em uma panela, refogue a cebola, o alho e a carne moída até dourar; Adicione o tomate pelado, o açúcar, o molho de tomate, sal e pimenta e deixe cozinhar por 10 minutos; Em outra tigela, misture a ricota, o creme de leite, o ovo, o queijo ralado e a noz-moscada; Em uma forma refratária, monte as camadas da lasanha começando com um pouco de molho de carne, depois as folhas de lasanha, e por fim a mistura de ricota; Repita as camadas até acabar os ingredientes; Por último, cubra com o molho de carne restante e o queijo ralado; Leve ao forno por 35 minutos ou até que esteja dourado e crocante; Sirva quente.",
        mediaNota: 4.5
    },
    {
        idReceita: 5,
        nomeReceita: "Pizza de Calabresa",
        tempoPreparo: 80,
        imagem: "https://www.receiteria.com.br/wp-content/uploads/pizza-de-calabresa-facil-08-730x548.jpeg",
        vegano: false,
        glutem: false,
        soja: false,
        amendoim: false,
        ovo: false,
        leite: true,
        crustaceo: false,
        doce: false,
        salgado: true,
        descricao: "Uma deliciosa pizza de calabresa com queijo e molho de tomate",
        ingredientes: "Massa de pizza, calabresa fatiada, muzzarela, tomate, orégano, azeite, sal",
        preparo: "Pré-aqueça o forno em 200°C. Abra a massa de pizza em uma forma untada e acrescente o molho de tomate. Adicione a calabresa fatiada, o queijo e o orégano. Tempere com um pouco de azeite e sal. Leve ao forno por 15 a 20 minutos ou até o queijo derreter e a massa estar dourada.",
        mediaNota: 4.5
    },
    {
        nomeReceita: "Pão de Queijo Vegano",
        tempoPreparo: 35,
        imagem: "https://img.itdg.com.br/tdg/images/recipes/000/175/624/198508/198508_original.jpg",
        vegano: true,
        glutem: false,
        soja: false,
        amendoim: false,
        ovo: false,
        leite: false,
        crustaceo: false,
        doce: false,
        salgado: true,
        descricao: "Pão de queijo vegano fofinho e crocante, sem produtos de origem animal",
        ingredientes:
        "1 xícara de polvilho azedo; 1 xícara de polvilho doce; 3/4 xícara de óleo de coco; 1/2 xícara de leite vegetal; Sal a gosto",
        preparo:
        "Em uma tigela grande misture os polvilhos, o sal e o óleo de coco; Adicione o leite vegetal aos poucos, mexendo sempre até obter uma massa homogênea; Abra pequenas porções de massa com as mãos, formando os pães de queijo; Disponha-os em uma assadeira untada; Leve ao forno pré-aquecido a 200ºC por cerca de 25 minutos ou até dourar; Sirva quente como aperitivo ou petisco.",
        mediaNota: 4.5,
    },
    {
        idReceita: 7,
        nomeReceita: "Salada de Quinoa Vegana",
        tempoPreparo: 20,
        imagem: "https://s2.glbimg.com/R6YaIL5OegGYyGGqp28zvrKfsAM=/620x455/e.glbimg.com/og/ed/f/original/2020/02/28/mundo_verde_salada_quinoa_crocante.jpeg",
        vegano: true,
        glutem: false,
        soja: false,
        amendoim: false,
        ovo: false,
        leite: false,
        crustaceo: false,
        doce: false,
        salgado: true,
        descricao: "Uma salada saudável e completa com quinoa, legumes e ervas frescas",
        ingredientes:
        "1 xícara de quinoa; 2 xícaras de água; 1/2 xícaras de cenoura ralada; 1/2 xícaras de vagem cortada em cubinhos; 1/2 xícaras de tomate cortado em cubinhos; 1/2 xícara de azeitona preta picada; 1 colher de sopa de salsinha picada; 1 colher de sopa de coentro picado; Sal e pimenta a gosto; Suco de 1/2 limão; 1 colher de sopa de azeite de oliva",
        preparo:
        "Lave a quinoa e coloque-a numa panela com a água. Leve ao fogo médio, cubra e deixe cozinhar por cerca de 15 minutos ou até que toda a água seja absorvida; Enquanto a quinoa cozinha, prepare os legumes e as ervas; Em um recipiente grande, misture a quinoa cozida, cenoura ralada, vagem, tomate, azeitona, salsinha, coentro, sal, pimenta, suco de limão e azeite de oliva; Sirva a salada quente ou fria.",
        mediaNota: 4.5,
    },
    {
        idReceita: 8,
        nomeReceita: "Tostadas de Camarão",
        tempoPreparo: 30,
        imagem: "https://www.viagenspossiveis.com.br/wp-content/uploads/2013/12/Las-Palmas-Praia-San-Pancho-16.jpg",
        vegano: false,
        glutem: false,
        soja: false,
        amendoim: false,
        ovo: false,
        leite: false,
        crustaceo: true,
        doce: false,
        salgado: true,
        descricao: "Tostadas crocantes recheadas com camarão cozido e temperados com ervas e limão",
        ingredientes:
        "1 pacote de tortillas de milho; 400g de camarão cozido e descascado; 1/2 cebola picada; 2 tomates picados; 1/4 xícara de cilantro picado; Suco de 1/2 limão; Sal e pimenta a gosto; Óleo de soja para fritar as tostadas",
        preparo:
        "Em uma tigela, misture o camarão cozido, a cebola, o tomate, o cilantro e o suco de limão; Tempere com sal e pimenta a gosto; Em uma frigideira, aqueça o óleo de soja e frite as tortillas até ficarem crocantes; Coloque as tortillas fritas em um prato forrado com papel toalha para absorver o excesso de óleo; Coloque uma porção generosa do recheio de camarão sobre cada tostada e sirva imediatamente",
        mediaNota: 4.5,
    },
    {
        idReceita: 9,
        nomeReceita: "Bolinho de amendoim com ovo",
        tempoPreparo: 25,
        imagem: "https://www.acasaencantada.com.br/wp-content/uploads/2011/05/casaencantada_capablog_bolinho-amendoim.png",
        vegano: false,
        glutem: false,
        soja: false,
        amendoim: true,
        ovo: true,
        leite: false,
        crustaceo: false,
        doce: true,
        salgado: false,
        descricao: "Bolinho de amendoim feito com ovo, fácil e rápido de fazer",
        ingredientes:
        "1 xícara de amendoim triturado; 2 ovos; 1/2 xícara de açúcar; 1 colher de sopa de farinha de trigo; 1 pitada de sal; Óleo para fritar",
        preparo:
        "Em uma tigela, misture o amendoim triturado, os ovos, o açúcar, a farinha de trigo e a pitada de sal; Misture bem até obter uma massa homogênea; Aqueça o óleo em uma panela; Com a ajuda de uma colher, faça bolinhos da massa e frite até ficarem dourados; Escorra os bolinhos em papel toalha; Sirva quente",
        mediaNota: 4,
    },
    {
        idReceita: 10,
        nomeReceita: "Torta de Morango Vegana",
        tempoPreparo: 60,
        imagem: "http://paveg.com.br/wp-content/uploads/2018/12/Torta-de-Morango-Vegana-sem-glu%CC%81ten-e-sem-corantes-artificiais-1414x2000.png",
        vegano: true,
        glutem: false,
        soja: false,
        amendoim: false,
        ovo: false,
        leite: false,
        crustaceo: false,
        doce: true,
        salgado: false,
        descricao: "Torta de morango feita com massa vegana e recheio cremoso de morangos",
        ingredientes: "Massa: 2 xícaras de farinha de trigo; 1/2 xícara de açúcar; 1/2 xícara de margarina vegana; 1 colher de sopa de fermento; 1 colher de chá de sal; Recheio:; 500g de morangos frescos; 1/2 xícara de açúcar; 1 colher de sopa de amido de milho; 1/2 xícara de água; 1 colher de sopa de suco de limão",
        preparo:
        "Pré aqueça o forno em 200°C; Em uma tigela misture a farinha de trigo, o açúcar, a margarina vegana, o fermento e o sal; Amasse a mistura até obter uma massa homogênea; Abra a massa com um rolo e forre uma forma de torta; Leve a massa ao forno por 15 minutos; Enquanto a massa cozinha, prepare o recheio cortando os morangos em pedaços pequenos; Em uma panela misture o açúcar, o amido de milho, a água e o suco de limão; Adicione os morangos e leve a mistura ao fogo; Cozinhe até obter uma consistência grossa; Retire a massa do forno e adicione o recheio; Leve a torta ao forno por mais 20 minutos; Sirva quente ou frio",
        mediaNota: 4.5,
    },
    {
        idReceita: 11,
        nomeReceita: "Risoto de Camarão",
        tempoPreparo: 30,
        imagem: "https://www.receiteria.com.br/wp-content/uploads/risoto-de-camarao-14-730x548.jpg",
        vegano: false,
        glutem: true,
        soja: false,
        amendoim: false,
        ovo: false,
        leite: true,
        crustaceo: true,
        doce: false,
        salgado: true,
        descricao: "Risoto de camarão com sabor e textura cremosa. Uma mistura perfeita de arroz arbóreo, caldo de camarão e camarões frescos.",
        ingredientes: "1 cebola picada, 2 dentes de alho picados, 1 xícara de arroz arbóreo, 2 xícaras de caldo de camarão, 1 xícara de leite, 1/2 xícara de queijo parmesão ralado, 1/2 xícara de queijo provolone ralado, 1/2 xícara de requeijão, Sal e pimenta-do-reino a gosto, Azeite, 1/2 xícara de camarões limpos e descascados",
        preparo: "Em uma panela, aqueça o azeite e frite a cebola e o alho até dourar. Adicione o arroz e misture bem. Adicione o caldo aos poucos, mexendo sempre, até o arroz estar al dente. Adicione o leite e os queijos, misturando até obter uma consistência cremosa. Tempere com sal e pimenta a gosto. Adicione os camarões e misture. Sirva quente.",
        mediaNota: 4.5,
    },
    {
        idReceita: 12,
        nomeReceita: "Estrogonofe de Carne",
        tempoPreparo: 40,
        imagem: "https://img.itdg.com.br/tdg/images/recipes/000/053/915/88625/88625_original.jpg",
        vegano: false,
        glutem: true,
        soja: false,
        amendoim: false,
        ovo: false,
        leite: true,
        crustaceo: false,
        doce: false,
        salgado: true,
        descricao: "Clássico e saboroso estrogonofe de carne, com cubinhos de carne suculentos e molho cremoso.",
        ingredientes: "600g de carne cortada em cubinhos pequenos (alcatra ou filé mignon); 1 cebola picada; 3 dentes de alho picados; 1 xícara de caldo de carne; 1 xícara de vinho tinto; 2 colheres de sopa de mostarda; 1 colher de sopa de catchup; 1 colher de sopa de farinha de trigo; 1/2 xícara de creme de leite; sal e pimenta do reino a gosto",
        preparo: "Em uma panela, aqueça um pouco de óleo e refogue a cebola e o alho até ficarem macios. Adicione a carne e refogue até dourar. Adicione o caldo de carne, o vinho tinto, a mostarda e o catchup e misture bem. Tempere com sal e pimenta a gosto. Adicione a farinha de trigo e mexa até engrossar. Adicione o creme de leite e misture bem. Sirva o estrogonofe com arroz branco ou macarrão.",
        mediaNota: 5,
    },
    {
        idReceita: 13,
        nomeReceita: "Strogonoff de Soja",
        tempoPreparo: 30,
        imagem: "https://amorpelacomida.com.br/wp-content/uploads/2020/06/receita-de-strogonoff-vegetariano-sem-gluten-sem-lactose-825x550.jpg.webp",
        vegano: true,
        glutem: false,
        soja: true,
        amendoim: false,
        ovo: false,
        leite: false,
        crustaceo: false,
        doce: false,
        salgado: true,
        descricao: "Strogonoff de soja é uma opção vegana para o tradicional strogonoff de carne. É uma refeição fácil e rápida, perfeita para os dias de semana.",
        ingredientes:
        "1 pacote de soja texturizada; 1 cebola picada; 2 dentes de alho picados; 1 xícara de cenoura ralada; 1 xícara de cogumelos fatiados; 1 xícara de tomate pelado e picado; 2 colheres de sopa de farinha de trigo; 1 xícara de caldo de legumes; Sal e pimenta a gosto; 1/2 xícara de creme de soja; 1 colher de sopa de molho inglês; 2 colheres de sopa de azeite",
        preparo:
        "Em uma panela, aqueça o azeite e refogue a cebola, o alho e a cenoura por 5 minutos; Adicione os cogumelos e o tomate e refogue por mais 5 minutos; Adicione a farinha de trigo e misture bem, cozinhando por 1 minuto; Adicione o caldo de legumes e o creme de soja, mexa bem e cozinhe por 5 minutos ou até que a mistura engrosse; Adicione a soja texturizada e o molho inglês e misture bem; Tempere com sal e pimenta a gosto; Sirva sobre arroz branco ou massa",
        mediaNota: 4.5,
    },
    {
        idReceita: 14,
        nomeReceita: "Moqueca Vegana de Soja e Banana da Terra",
        tempoPreparo: 60,
        imagem: "https://cdn.panelinha.com.br/receita/1631538744646-moqueca-banana_empratada.jpg",
        vegano: true,
        glutem: false,
        soja: true,
        amendoim: false,
        ovo: false,
        leite: false,
        crustaceo: false,
        doce: false,
        salgado: true,
        descricao: "Moqueca vegana com base de leite de coco, banana da terra e proteína de soja",
        ingredientes:
        "1/2 xícara de óleo de coco; 1 cebola média picada; 2 dentes de alho picados; 1 pimentão vermelho picado; 1 pimentão amarelo picado; 2 tomates picados; 1 banana da terra cortada em cubinhos; 1 xícara de proteína de soja hidratada e cortada em cubos; 1 xícara de leite de coco; sal e pimenta-do-reino a gosto; coentro e cebolinha picados a gosto",
        preparo:
        "Aqueça o óleo de coco em uma panela grande; Adicione a cebola, alho, pimentões, tomates e refogue por alguns minutos; Adicione a banana da terra, proteína de soja e misture; Adicione o leite de coco, tempere com sal e pimenta a gosto e misture; Deixe cozinhar por cerca de 10 minutos; Sirva com coentro e cebolinha picados por cima",
        mediaNota: 5,
    }
];

function creatCardReceitas(listaReceita, i) {
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
            <h6>Tempo medio de preparo: ${listaReceita[i].tempoPreparo}min - 300 views</h6>
            <div class="iconAlerg"> ${alergIcons} </div>
            <p>${listaReceita[i].descricao}</p>
        `;

    document.querySelector("main").appendChild(newArticle);
}

function listReceitas(pg) {
    let filter = {
        vegano: document.getElementById('ckb_veg').checked,
        ovo: document.getElementById('ckb_ovo').checked,
        soja: document.getElementById('ckb_soja').checked,
        leite: document.getElementById('ckb_leite').checked,
        glutem: document.getElementById('ckb_glutem').checked,
        amendoim: document.getElementById('ckb_amendoim').checked,
        crustaceo: document.getElementById('ckb_crustaceos').checked,
        minTmp: Number(document.getElementById('tmp_min').value),
        maxTmp: Number(document.getElementById('tmp_max').value)
    };

    let limit = 12 * pg;
    let i = limit - 12;
    (limit >= listaReceita.length && i < listaReceita.length)?limit=listaReceita.length:limit=12;
    
    if (Object.values(filter).filter((value) => value == true || value != 0).length == 0) {
        for(i=0; i<=limit; i++) {
            creatCardReceitas(listaReceita, i);
        }
    } else {

    let objetoFiltro = new Object()
    let arraylistafiltrada = []
    
    for(let [key, val] of Object.entries(filter)){
        if(val == true){
            objetoFiltro[key] = true
        }
    }

    if(objetoFiltro.hasOwnProperty("vegano")){
        for(x = 0; x < listaReceita.length; x++){
            if(listaReceita[x].vegano == true){
                arraylistafiltrada.push(listaReceita[x])
            }
        }
        
        delete objetoFiltro.vegano
        filtroLista(arraylistafiltrada, objetoFiltro)
    }else{
        filtroLista(listaReceita, objetoFiltro)
    }

    }
}

function filtroLista(listaReceita, objetoFiltro){
    let arraylistafiltrada = []

    for(x = 0; x < listaReceita.length; x++){
        let validador = true
        
        
        for(let [key, val] of Object.entries(objetoFiltro)){

                if (listaReceita[x][key] == true){
                    validador = false
                    break
                }
    }

    if(validador == true){
        arraylistafiltrada.push(listaReceita[x])
    }
}

for (pagina = 0; pagina < arraylistafiltrada.length; pagina++){
        creatCardReceitas(arraylistafiltrada, pagina)
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