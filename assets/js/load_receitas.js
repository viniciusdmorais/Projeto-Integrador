const listaReceita = [
    {
        idReceita: 1,
        nomeReceita: "Bolo de Chocolate",
        tempoPreparo: 40,
        imagem: "https://bakespot.com.br/wp-content/uploads/2018/11/C%C3%B3pia-de-Bolo-Tradicional-de-Chocolate-sem-calda-1.jpg",
        vegano: true,
        glutem: true,
        soja: false,
        amendoim: false,
        ovo: false,
        leite: false,
        crustaceo: false,
        doce: true,
        salgado: false,
        descricao: "Bolo de chocolate usando cacau 100%, vegano e fofinho.",
        mediaNota: 5,

        ingredientes: ['2 xícaras de farinha de trigo;', '1/4 xícaras de amido de milho;', '1/2 xícaras de cacau em pó;', '1+1/2 xícaras de açúcar;', '1 colher de sopa de bicarbonato de sódio;', '1/2 colher de sopa de fermento quimico;', '1 pitada sal;', ' 1+1/2 xícaras de agua;', '1/2 xícara de óleo;', '1/4 xícara de café;', '1 colher de sopa de vinagre.'],
        bolinha: '<img width="11px" height="11px" src="assets/images/img_reh/circuloamarelo1.png"/>',

        preparo: ['Coloque o forno para pré aquecer em 200ºC.', 'Em uma vasilha misture todos os secos peneirados.', 'Em outro recipiente coloque todos os molhados e os despeje sobre os secos.', 'Misture todos os ingredientes até obter uma massa homogênea.', 'Despeje a massa na forma e a coloque no forno.', 'Após 10 minutos reduzir a temperatura para 180ºC.', 'Após assado retirar do forno.', 'Desenformar com o bolo frio ou morno mais para frio.','<div class="dicas"><h3>Dicas:</h3></div>','Dê preferência a óleos neutros, como os de: girassol, canola e milho.', 'Caso não possua amido de milho basta usar a mesma quantidade de farinha de trigo, o amido de milho serve para deixar o bolo mais fofinho ainda.', 'Ao fazer o café faça ele forte, independente se é coado ou expresso, afinal, ele serve para destacar o sabor do cacau.', 'O vinagre de preferência para o de álcool ou de maçã, porém outros não costumam deixar sabor residual, ele serve para auxiliar no crescimento da massa.'],
        setinha: '<img width="15px" height="15px" src="assets/images/img_reh/setaamarela1.png"/>',        
 
        autor: 'Bora Comer',
        rendimento: '20 porções',
        dificuldade: 'Fácil',
        iconeRestricao1: '<img width="50px" height="50px" src="assets/images/icon_gluten.png" alt="glutem" title="Contém Glútem"/>',
        iconeRestricao2: '<img width="50px" height="50px" src="assets/images/icon_vegan-on.png" alt="vegano" title="Vegano"/>',
        iconeRestricao3: '',
        iconeRestricao4: '',

        stars: `
        <ul class="avaliacao">
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
        </ul>
        `,
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
        descricao: "Batatinha ao molho de missô. Receita protéica e saudável.",
        mediaNota: 4,

        autor: 'Bora Comer',
        rendimento: '1 kg',
        dificuldade: 'Fácil',
        iconeRestricao1: '<img width="50px" height="50px" src="assets/images/icon_soy.png" alt="contém_soja" title="Contém Soja"/>',
        iconeRestricao2: '<img width="50px" height="50px" src="assets/images/icon_vegan-on.png" alt="vegano" title="Vegano"/>',
        iconeRestricao3: '',
        iconeRestricao4: '',

        ingredientes: ['1 kg de batatinhas do tipo "bolinha" lavadas;', '2 Colheres (sopa) de água;', '4 Colheres (sopa) de azeite;', '1 + ½ Colheres (sopa) de Missô Shiro;', '2 + ½ Colheres (sopa) de Vinagre de Arroz;', '1 Colher (sopa) de açúcar.', '3 Colheres (sopa) de limão;', '½ Xícara (chá) de salsinha picada.'],
        bolinha: '<img width="11px" height="11px" src="assets/images/img_reh/circuloamarelo1.png"/>',

        preparo: ['Cozinhe as batatas deixando-as firmes, no mesmo ponto de batata para vinagrete e reserve em um recipiente que tenha tampa.', 'Em outro recipiente coloque os todos os outros ingredientes, com exceção  da salsinha e misture até formar um molho homogêneo.', 'Faça furos nas batatas para o molho penetrar melhor.', 'Coloque o molho e a salsinha picada sobre as batatas e misture até envolver as batatas.', 'Deixe descansando na geladeira por pelo menos 20 min, porém o ideal é deixar até 8hrs para o molho entrar melhor na batata.'],
        setinha: '<img width="15px" height="15px" src="assets/images/img_reh/setaamarela1.png"/>',

        stars: `
        <ul class="avaliacao">
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
        </ul>
        `,                
    },

    {
        idReceita: 3,
        nomeReceita: "Batida de Coco",
        tempoPreparo: 5,
        imagem: "https://img.cuisineaz.com/660x660/2013/12/20/i29767-batida-de-coco.webp",
        vegano: false,
        glutem: false,
        soja: false,
        amendoim: false,
        ovo: false,
        leite: true,
        crustaceo: false,
        doce: true,
        salgado: false,
        descricao: "Batida de Coco com base de Pinga.",
        mediaNota: 3,

        autor: 'Bora Comer',
        rendimento: '6 porções',
        dificuldade: 'Fácil',
        iconeRestricao1: '<img width="50px" height="50px" src="assets/images/icon_milk.png" alt="Contém Leite" title="Contém Leite"/>',
        iconeRestricao2: '',
        iconeRestricao3: '',
        iconeRestricao4: '',

        ingredientes: ['200ml de leite de coco;','200ml de pinga;','395g de leite condensado;','100g coco ralado umido.'],
        bolinha: '<img width="11px" height="11px" src="assets/images/img_reh/circuloamarelo1.png"/>',

        preparo: ['No liquidificador, colocar todos os ingredientes, apenas reservando uma pequena quantidade de coco ralado para finalizar o copo, e bata por 3 min.','Após servir no copo basta colocar um pouco do coco ralado por cima da bebida.', 'Servir gelado.'],
        setinha: '<img width="15px" height="15px" src="assets/images/img_reh/setaamarela1.png"/>',
        
        stars: `
        <ul class="avaliacao">
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
        </ul>
        `,
    },

    {
        idReceita: 4,
        nomeReceita: "Lasanha de Carne Moída",
        tempoPreparo: 90,
        imagem: "https://receitascluboficial.com.br/wp-content/uploads/2022/06/lasanha-com-carne-moida.webp",
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
        mediaNota: 4.5,
        
        autor: 'Bora Comer',
        rendimento: '4 porções',
        dificuldade: 'Fácil',
        iconeRestricao1: '<img width="50px" height="50px" src="assets/images/icon_milk.png" alt="contém_leite" title="Contém Leite"/>',
        iconeRestricao2: '<img width="50px" height="50px" src="assets/images/icon_eggs.png" alt="contém_ovo" title="Contém Ovo"/>',
        iconeRestricao3: '',
        iconeRestricao4: '',

        ingredientes: ['12 folhas de lasanha;', '500g de carne moída;','1 cebola picada;','2 dentes de alho picados;','1 lata de tomate pelado;','1 colher de sopa de açúcar;','1 colher de sopa de molho de tomate;','Sal e pimenta a gosto;','200g de ricota;','200ml de creme de leite;','1 xícara de queijo ralado;','1 ovo;','Noz-moscada a gosto.'],
        bolinha: '<img width="11px" height="11px" src="assets/images/img_reh/circuloamarelo1.png"/>',

        preparo: ['Pré-aqueça o forno a 180°C;','Em uma panela, refogue a cebola, o alho e a carne moída até dourar;','Adicione o tomate pelado, o açúcar, o molho de tomate, sal e pimenta e deixe cozinhar por 10 minutos;','Em outra tigela, misture a ricota, o creme de leite, o ovo, o queijo ralado e a noz-moscada;','Em uma forma refratária, monte as camadas da lasanha começando com um pouco de molho de carne, depois as folhas de lasanha, e por fim a mistura de ricota;','Repita as camadas até acabar os ingredientes;','Por último, cubra com o molho de carne restante e o queijo ralado;','Leve ao forno por 35 minutos ou até que esteja dourado e crocante;','Sirva quente.'],
        setinha: '<img width="15px" height="15px" src="assets/images/img_reh/setaamarela1.png"/>',
        
        stars: `
        <ul class="avaliacao">
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
        </ul>
        `,
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
        descricao: "Uma deliciosa pizza de calabresa com queijo e molho de tomate.",
        mediaNota: 4.5,
        
        autor: 'Bora Comer',
        rendimento: '8 Pedaços',
        dificuldade: 'Médio',
        iconeRestricao1: '<img width="50px" height="50px" src="assets/images/icon_milk.png" alt="contém_leite" title="Contém Leite"/>',
        iconeRestricao2: '',
        iconeRestricao3: '',
        iconeRestricao4: '',

        ingredientes: ['Massa de pizza;','calabresa fatiada;','muzzarela;','tomate;','orégano;','azeite;','sal.'],
        bolinha: '<img width="11px" height="11px" src="assets/images/img_reh/circuloamarelo1.png"/>',

        preparo: ['Pré-aqueça o forno em 200°C;','Abra a massa de pizza em uma forma untada e acrescente o molho de tomate;','Adicione a calabresa fatiada, o queijo e o orégano;','Tempere com um pouco de azeite e sal;','Leve ao forno por 15 a 20 minutos ou até o queijo derreter e a massa estar dourada.'],
        setinha: '<img width="15px" height="15px" src="assets/images/img_reh/setaamarela1.png"/>',
        
        stars: `
        <ul class="avaliacao">
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
        </ul>
        `,
    },

    {
        idReceita: 6,
        nomeReceita: "Pão de Queijo Vegano",
        tempoPreparo: 35,
        imagem: "https://www.tempodecozimento.com/wp-content/uploads/2017/06/receita_pao_de_queijo_mandioquinha.jpg",
        vegano: true,
        glutem: false,
        soja: false,
        amendoim: false,
        ovo: false,
        leite: false,
        crustaceo: false,
        doce: false,
        salgado: true,
        descricao: "Pão de queijo vegano fofinho e crocante, sem produtos de origem animal.",
        mediaNota: 4.5,
       
        autor: 'Bora Comer',
        rendimento: '20 bolinhas pequenas',
        dificuldade: 'Fácil',
        iconeRestricao1: '<img width="50px" height="50px" src="assets/images/icon_vegan-on.png" alt="vegano" title="Vegano"/>',
        iconeRestricao2: '',
        iconeRestricao3: '',
        iconeRestricao4: '',

        ingredientes: ['1 xícara de polvilho azedo;','1 xícara de polvilho doce;','3/4 xícara de óleo de coco;','1/2 xícara de leite vegetal;','Sal a gosto'],
        bolinha: '<img width="11px" height="11px" src="assets/images/img_reh/circuloamarelo1.png"/>',

        preparo: ['Em uma tigela grande misture os polvilhos, o sal e o óleo de coco;','Adicione o leite vegetal aos poucos, mexendo sempre até obter uma massa homogênea;','Abra pequenas porções de massa com as mãos, formando os pães de queijo;','Disponha-os em uma assadeira untada;','Leve ao forno pré-aquecido a 200ºC por cerca de 25 minutos ou até dourar;','Sirva quente, como aperitivo ou petisco.'],
        setinha: '<img width="15px" height="15px" src="assets/images/img_reh/setaamarela1.png"/>',
        
        stars: `
        <ul class="avaliacao">
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
        </ul>
        `,
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
        descricao: "Uma salada saudável e completa com quinoa, legumes e ervas frescas.",
        mediaNota: 4.5,
        
        autor: 'Bora Comer',
        rendimento: '2 porções',
        dificuldade: 'Fácil',
        iconeRestricao1: '<img width="50px" height="50px" src="assets/images/icon_vegan-on.png" alt="vegano" title="Vegano"/>',
        iconeRestricao2: '',
        iconeRestricao3: '',
        iconeRestricao4: '',

        ingredientes: ['1 xícara de quinoa;','2 xícaras de água;','1/2 xícaras de cenoura ralada;','1/2 xícaras de vagem cortada em cubinhos;','1/2 xícaras de tomate cortado em cubinhos;','1/2 xícara de azeitona preta picada;','1 colher de sopa de salsinha picada;','1 colher de sopa de coentro picado;','Sal e pimenta a gosto; Suco de 1/2 limão;','1 colher de sopa de azeite de oliva.'],
        bolinha: '<img width="11px" height="11px" src="assets/images/img_reh/circuloamarelo1.png"/>',

        preparo: ['Lave a quinoa e coloque-a numa panela com a água;','Leve ao fogo médio, cubra e deixe cozinhar por cerca de 15 minutos ou até que toda a água seja absorvida;','Enquanto a quinoa cozinha, prepare os legumes e as ervas;','Em um recipiente grande, misture a quinoa cozida, cenoura ralada, vagem, tomate, azeitona, salsinha, coentro, sal, pimenta, suco de limão e azeite de oliva;','Sirva a salada quente ou fria.'],
        setinha: '<img width="15px" height="15px" src="assets/images/img_reh/setaamarela1.png"/>',
        
        stars: `
        <ul class="avaliacao">
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
        </ul>
        `,
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
        descricao: "Tostadas crocantes recheadas com camarão cozido e temperados com ervas e limão.",
        mediaNota: 5,
        
        autor: 'Bora Comer',
        rendimento: '2 porções',
        dificuldade: 'Médio',
        iconeRestricao1: '<img width="50px" height="50px" src="assets/images/icon_seafood.png" alt="contém_camarão" title="Contém Camarão"/>',
        iconeRestricao2: '',
        iconeRestricao3: '',
        iconeRestricao4: '',

        ingredientes: ['1 pacote de tortillas de milho;','400g de camarão cozido e descascado;','1/2 cebola picada;','2 tomates picados; 1/4 xícara de cilantro picado;','Suco de 1/2 limão; Sal e pimenta a gosto;','Óleo de soja para fritar as tostadas.'],
        bolinha: '<img width="11px" height="11px" src="assets/images/img_reh/circuloamarelo1.png"/>',

        preparo: ['Em uma tigela, misture o camarão cozido, a cebola, o tomate, o cilantro e o suco de limão;','Tempere com sal e pimenta a gosto;','Em uma frigideira, aqueça o óleo de soja e frite as tortillas até ficarem crocantes;','Coloque as tortillas fritas em um prato forrado com papel toalha para absorver o excesso de óleo;','Coloque uma porção generosa do recheio de camarão sobre cada tostada e sirva imediatamente.'],
        setinha: '<img width="15px" height="15px" src="assets/images/img_reh/setaamarela1.png"/>',
        
        stars: `
        <ul class="avaliacao">
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
        </ul>
        `,
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
        descricao: "Bolinho de amendoim feito com ovo, fácil e rápido de fazer.",
        mediaNota: 4,
    
        autor: 'Bora Comer',
        rendimento: '15 bolinhos pequenos',
        dificuldade: 'Médio',
        iconeRestricao1: '<img width="50px" height="50px" src="assets/images/icon_peanut.png" alt="contém_amendoim" title="Contém Amendoim"/>',
        iconeRestricao2: '<img width="50px" height="50px" src="assets/images/icon_eggs.png" alt="contém_ovo" title="Contém Ovo"/>',
        iconeRestricao3: '',
        iconeRestricao4: '',

        ingredientes: ['1 xícara de amendoim triturado;','2 ovos;','1/2 xícara de açúcar;','1 colher de sopa de farinha de trigo;','1 pitada de sal;','Óleo para fritar.'],
        bolinha: '<img width="11px" height="11px" src="assets/images/img_reh/circuloamarelo1.png"/>',

        preparo: ['Em uma tigela, misture o amendoim triturado, os ovos, o açúcar, a farinha de trigo e a pitada de sal;','Misture bem até obter uma massa homogênea;','Aqueça o óleo em uma panela;','Com a ajuda de uma colher, faça bolinhos da massa e frite até ficarem dourados;','Escorra os bolinhos em papel toalha;','Sirva quente.'],
        setinha: '<img width="15px" height="15px" src="assets/images/img_reh/setaamarela1.png"/>',
        
        stars: `
        <ul class="avaliacao">
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
        </ul>
        `,
    },

    {
        idReceita: 10,
        nomeReceita: "Torta de Morango Vegana",
        tempoPreparo: 60,
        imagem: "https://www.anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-2439-25d257dbf67b1b7af398b2024a97345a.png",
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
        mediaNota: 5,
        
        autor: 'Bora Comer',
        rendimento: '8 porções',
        dificuldade: 'Médio',
        iconeRestricao1: '<img width="50px" height="50px" src="assets/images/icon_vegan-on.png" alt="vegano" title="Vegano"/>',
        iconeRestricao2: '',
        iconeRestricao3: '',
        iconeRestricao4: '',

        ingredientes: ['<b>Massa:</b>','2 xícaras de farinha de trigo; 1/2 xícara de açúcar;','1/2 xícara de margarina vegana; 1 colher de sopa de fermento;','1 colher de chá de sal;','<b>Recheio:</b>','500g de morangos frescos;','1/2 xícara de açúcar;','1 colher de sopa de amido de milho;','1/2 xícara de água;','1 colher de sopa de suco de limão.'],
        bolinha: '<img width="11px" height="11px" src="assets/images/img_reh/circuloamarelo1.png"/>',

        preparo: ['Pré aqueça o forno em 200°C;','Em uma tigela misture a farinha de trigo, o açúcar, a margarina vegana, o fermento e o sal;','Amasse a mistura até obter uma massa homogênea;','Abra a massa com um rolo e forre uma forma de torta;','Leve a massa ao forno por 15 minutos;','Enquanto a massa cozinha, prepare o recheio cortando os morangos em pedaços pequenos;','Em uma panela misture o açúcar, o amido de milho, a água e o suco de limão;','Adicione os morangos e leve a mistura ao fogo;','Cozinhe até obter uma consistência grossa;','Retire a massa do forno e adicione o recheio;','Leve a torta ao forno por mais 20 minutos;','Sirva quente ou frio.'],
        setinha: '<img width="15px" height="15px" src="assets/images/img_reh/setaamarela1.png"/>',
        
        stars: `
        <ul class="avaliacao">
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
        </ul>
        `,
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
        mediaNota: 4.5,
        
        autor: 'Bora Comer',
        rendimento: '4 porções',
        dificuldade: 'Difícil',
        iconeRestricao1: '<img width="50px" height="50px" src="assets/images/icon_seafood.png" alt="contém camarão" title="Contém Camarão"/>',
        iconeRestricao2: '<img width="50px" height="50px" src="assets/images/icon_gluten.png" alt="contém glútem" title="Contém Glútem"/>',
        iconeRestricao3: '<img width="50px" height="50px" src="assets/images/icon_milk.png" alt="contém leite" title="Contém Leite"/>',
        iconeRestricao4: '',

        ingredientes: ['1 cebola picada;','2 dentes de alho picados;','1 xícara de arroz arbóreo;','2 xícaras de caldo de camarão;','1 xícara de leite;','1/2 xícara de queijo parmesão ralado;','1/2 xícara de queijo provolone ralado','1/2 xícara de requeijão;','Sal e pimenta-do-reino a gosto;','Azeite','1/2 xícara de camarões limpos e descascados.'],
        bolinha: '<img width="11px" height="11px" src="assets/images/img_reh/circuloamarelo1.png"/>',

        preparo: ['Em uma panela, aqueça o azeite e frite a cebola e o alho até dourar;','Adicione o arroz e misture bem;','Adicione o caldo aos poucos, mexendo sempre, até o arroz estar al dente.','Adicione o leite e os queijos, misturando até obter uma consistência cremosa;','Tempere com sal e pimenta a gosto;','Adicione os camarões e misture;','Sirva quente.'],
        setinha: '<img width="15px" height="15px" src="assets/images/img_reh/setaamarela1.png"/>',
        
        stars: `
        <ul class="avaliacao">
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
        </ul>
        `,
    },

    {
        idReceita: 12,
        nomeReceita: "Estrogonofe de Carne",
        tempoPreparo: 40,
        imagem: "https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-estrogonofe-de-carne.jpg?quality=85",
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
        mediaNota: 4.5,
        
        autor: 'Bora Comer',
        rendimento: '4 porções',
        dificuldade: 'Fácil',
        iconeRestricao1: '<img width="50px" height="50px" src="assets/images/icon_gluten.png" alt="contém glútem" title="Contém Glútem"/>',
        iconeRestricao2: '<img width="50px" height="50px" src="assets/images/icon_milk.png" alt="contém leite" title="Contém Leite"/>',
        iconeRestricao3: '',
        iconeRestricao4: '',

        ingredientes: ['600g de carne cortada em cubinhos pequenos (alcatra ou filé mignon);','1 cebola picada;','3 dentes de alho picados;','1 xícara de caldo de carne;','1 xícara de vinho tinto;','2 colheres de sopa de mostarda;','1 colher de sopa de catchup;','1 colher de sopa de farinha de trigo;','1/2 xícara de creme de leite;','sal e pimenta do reino a gosto.'],
        bolinha: '<img width="11px" height="11px" src="assets/images/img_reh/circuloamarelo1.png"/>',

        preparo: ['Em uma panela, aqueça um pouco de óleo e refogue a cebola e o alho até ficarem macios;','Adicione a carne e refogue até dourar;','Adicione o caldo de carne, o vinho tinto, a mostarda e o catchup e misture bem;','Tempere com sal e pimenta a gosto;','Adicione a farinha de trigo e mexa até engrossar;','Adicione o creme de leite e misture bem;','Sirva o estrogonofe com arroz branco ou macarrão.'],
        setinha: '<img width="15px" height="15px" src="assets/images/img_reh/setaamarela1.png"/>',
        
        stars: `
        <ul class="avaliacao">
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
        </ul>
        `,
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
        mediaNota: 4.5,
        
        autor: 'Bora Comer',
        rendimento: '4 porções',
        dificuldade: 'Médio',
        iconeRestricao1: '<img width="50px" height="50px" src="assets/images/icon_soy.png" alt="contém soja" title="Contém Soja"/>',
        iconeRestricao2: '<img width="50px" height="50px" src="assets/images/icon_vegan-on.png" alt="vegano" title="Vegano"/>',
        iconeRestricao3: '',
        iconeRestricao4: '',

        ingredientes: ['1 pacote de soja texturizada;','1 cebola picada;','2 dentes de alho picados;','1 xícara de cenoura ralada;','1 xícara de cogumelos fatiados;','1 xícara de tomate pelado e picado;','2 colheres de sopa de farinha de trigo;','1 xícara de caldo de legumes;','Sal e pimenta a gosto;','1/2 xícara de creme de soja;','1 colher de sopa de molho inglês;','2 colheres de sopa de azeite.'],
        bolinha: '<img width="11px" height="11px" src="assets/images/img_reh/circuloamarelo1.png"/>',

        preparo: ['Em uma panela, aqueça o azeite e refogue a cebola, o alho e a cenoura por 5 minutos;','Adicione os cogumelos e o tomate e refogue por mais 5 minutos;','Adicione a farinha de trigo e misture bem, cozinhando por 1 minuto;','Adicione o caldo de legumes e o creme de soja, mexa bem e cozinhe por 5 minutos ou até que a mistura engrosse;','Adicione a soja texturizada e o molho inglês e misture bem;','Tempere com sal e pimenta a gosto;','Sirva sobre arroz branco ou massa.'],
        setinha: '<img width="15px" height="15px" src="assets/images/img_reh/setaamarela1.png"/>',
        
        stars: `
        <ul class="avaliacao">
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
        </ul>
        `,
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
        descricao: "Moqueca vegana com base de leite de coco, banana da terra e proteína de soja.",
        mediaNota: 4.5,
        
        autor: 'Bora Comer',
        rendimento: '4 porções',
        dificuldade: 'Difícil',
        iconeRestricao1: '<img width="50px" height="50px" src="assets/images/icon_soy.png" alt="contém soja" title="Contém Soja"/>',
        iconeRestricao2: '<img width="50px" height="50px" src="assets/images/icon_vegan-on.png" alt="vegano" title="Vegano"/>',
        iconeRestricao3: '',
        iconeRestricao4: '',

        ingredientes: ['1/2 xícara de óleo de coco;','1 cebola média picada;','2 dentes de alho picados;','1 pimentão vermelho picado;','1 pimentão amarelo picado;','2 tomates picados; 1 banana da terra cortada em cubinhos;','1 xícara de proteína de soja hidratada e cortada em cubos;','1 xícara de leite de coco;','Sal e pimenta-do-reino a gosto;','Coentro e cebolinha picados a gosto.'],
        bolinha: '<img width="11px" height="11px" src="assets/images/img_reh/circuloamarelo1.png"/>',

        preparo: ['Aqueça o óleo de coco em uma panela grande;','Adicione a cebola, alho, pimentões, tomates e refogue por alguns minutos;','Adicione a banana da terra, proteína de soja e misture;','Adicione o leite de coco, tempere com sal e pimenta a gosto e misture;','Deixe cozinhar por cerca de 10 minutos;','Sirva com coentro e cebolinha picados por cima.'],
        setinha: '<img width="15px" height="15px" src="assets/images/img_reh/setaamarela1.png"/>',
        
        stars: `
        <ul class="avaliacao">
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
        </ul>
        `,
    },

    {
        idReceita: 15,
        nomeReceita: "Limonada com Framboesa",
        tempoPreparo: 5,
        imagem: "https://www.allrecipes.com/thmb/xs0t2iB6woUb-P-dFHub0jvmf_A=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/445924-ce4cbb28927b4f15a8682f0548b94896.jpg",
        vegano: true,
        glutem: false,
        soja: false,
        amendoim: false,
        ovo: false,
        leite: false,
        crustaceo: false,
        doce: true,
        salgado: false,
        descricao: "Famosa <b>Pink Lemonade</b>: leve, cítrica, refrescante e colorida, essa bebida é a cara do nosso clima tropical.",
        mediaNota: 5,
            
        autor: 'Bora Comer',
        rendimento: '6 porções (1,3 L)',
        dificuldade: 'Fácil',
        iconeRestricao1: '<img width="50px" height="50px" src="assets/images/icon_vegan-on.png" alt="vegano" title="Vegano"/>',
        iconeRestricao2: '',
        iconeRestricao3: '',
        iconeRestricao4: '',

        ingredientes: ['½ xícara (chá) de caldo de limão (cerca de 5 unidades);','½ xícara (chá) de framboesa congelada;','1 litro de água;','½ xícara (chá) de açúcar;','Cubos de gelo a gosto;','Rodelas de limão a gosto para servir.'],
        bolinha: '<img width="11px" height="11px" src="assets/images/img_reh/circuloamarelo1.png"/>',

        preparo: ['No liquidificador, junte o caldo de limão, a framboesa, a água, o açúcar e gelo — cerca de 2 xícaras (chá) são suficientes para deixar a limonada gelada e refrescante;','Bata bem até triturar todo o gelo e a framboesa;','Sobre uma jarra, passe o suco por uma peneira para tirar as sementes da framboesa.','Sirva a seguir em copos com rodelas de limão e cubos de gelo.'],
        setinha: '<img width="15px" height="15px" src="assets/images/img_reh/setaamarela1.png"/>',
        
        stars: `
        <ul class="avaliacao">
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
            <li class="star-icon"></li>
        </ul>
        `,
    },
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
            <a href="receita_completa.html?receitaID=${listaReceita[i].idReceita}">
                <img src="${listaReceita[i].imagem}" alt="Foto ${listaReceita[i].nomeReceita}" class="photoReceita" />
                <h3>${listaReceita[i].nomeReceita}</h3>
            </a>
            <h6>Tempo médio de preparo: ${listaReceita[i].tempoPreparo}min - 300 views</h6>
            <div class="iconAlerg"> ${alergIcons} </div>
            <p>${listaReceita[i].descricao}</p>
        `;

    document.querySelector("main").appendChild(newArticle);
}

function listReceitas(pg) {
    let busca = document.getElementById("search_receita").value;
    let filter = {
        vegano: document.getElementById("ckb_veg").checked,
        ovo: document.getElementById("ckb_ovo").checked,
        soja: document.getElementById("ckb_soja").checked,
        leite: document.getElementById("ckb_leite").checked,
        glutem: document.getElementById("ckb_glutem").checked,
        amendoim: document.getElementById("ckb_amendoim").checked,
        crustaceo: document.getElementById("ckb_crustaceos").checked,
        minTmp: Number(document.getElementById("tmp_min").value),
        maxTmp: Number(document.getElementById("tmp_max").value),
    };

    let limit = 14 * pg;
    let i = limit - 14;
    (limit >= listaReceita.length && i < listaReceita.length)
        ? (limit = listaReceita.length)
        : (limit = 14);

    
    if (
        Object.values(filter).filter((value) => value == true || value != 0).length == 0
        &&
        busca.length == 0
    ) {
        for (i = 0; i <= limit; i++) {
            creatCardReceitas(listaReceita, i);
        }
    } else {
        let objetoFiltro = new Object();
        let arraylistafiltrada = [];

        for (let [key, val] of Object.entries(filter)) {
            if (val == true) {
                objetoFiltro[key] = true;
            }

            if ((key == "minTmp" && val > 0) || (key == "maxTmp" && val > 0)) {
                objetoFiltro[key] = val;
            }
        }

        if (objetoFiltro.hasOwnProperty("vegano")) {
            for (x = 0; x < listaReceita.length; x++) {
                if (listaReceita[x].vegano == true) {
                    arraylistafiltrada.push(listaReceita[x]);
                }
            }

            delete objetoFiltro.vegano;
            filtroLista(arraylistafiltrada, objetoFiltro);
        } else {
            filtroLista(listaReceita, objetoFiltro);
        }
    }
}

function filtroLista(listaReceita, objetoFiltro) {
    let busca = document.getElementById("search_receita").value;
    let arraylistafiltrada = [];

    for (x = 0; x < listaReceita.length; x++) {
        let validador = true;

        for (let [key, val] of Object.entries(objetoFiltro)) {
            if (listaReceita[x][key] == true) {
                validador = false;
            }
        }

        if (validador) {
            if (objetoFiltro.hasOwnProperty("minTmp") && objetoFiltro.hasOwnProperty("maxTmp")) {
                if (objetoFiltro.minTmp < objetoFiltro.maxTmp) {
                    if (!(objetoFiltro.minTmp >= listaReceita[x].tempoPreparo) && !(listaReceita[x].tempoPreparo <= objetoFiltro.maxTmp)) {
                        validador = false;
                    }
                } else {
                    validador = false;
                }
            } else if (objetoFiltro.hasOwnProperty("minTmp")) {
                if (objetoFiltro.minTmp > listaReceita[x].tempoPreparo) {
                    validador = false;
                }
            } else if (objetoFiltro.hasOwnProperty("maxTmp")) {
                if (listaReceita[x].tempoPreparo > objetoFiltro.maxTmp) {
                    validador = false;
                }
            }
        }

        if (busca) {
            if (listaReceita[x].nomeReceita.toLowerCase().indexOf(busca.toLowerCase()) < 0) {
                validador = false;
            }
        }

        if (validador == true) {
            arraylistafiltrada.push(listaReceita[x]);
        }
    }

    for (pagina = 0; pagina < arraylistafiltrada.length; pagina++) {
        creatCardReceitas(arraylistafiltrada, pagina);
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
                <p>Tempo médio de preparo: ${listaReceita[i].tempoPreparo}min - 300 views</p>
            `;

            const detalhes = document.createElement("div");
            detalhes.className = "dados_receita";
            detalhes.innerHTML = `
                <p><strong>Autor:</strong> Bora Comer</p>
                <p><strong>Tempo de Preparo:</strong> ${listaReceita[i].tempoPreparo} min</p>
                <p><strong>Rendimento:</strong> ${listaReceita[i].rendimento}</p>
            `;

            const baseMain = document.querySelector(".total");
            baseMain.appendChild(dados);
            baseMain.appendChild(detalhes);
        }
    }
}
