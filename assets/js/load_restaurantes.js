const listaRestaurante = [
    {
        idRestaurante: 1,
        nomeRestaurante: 'Zur Alten Mühle',   
        descricao: 'O ambiente germânico, reforçado pela onipresente madeira escura na decoração, são algumas características desta casa aberta há mais de quatro décadas no Brooklin.',
        imagem: 'assets/images/img_reh/imagem_rest1.png',
        
        endereco: 'Rua Princesa Isabel, 102, Brooklin, São Paulo/SP',
        googleFoto: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.449837317175!2d-46.68670868526476!3d-23.62405606979509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef43e61c2087f%3A0xf9be5ab61fbca8e3!2sZur%20Alten%20M%C3%BChle!5e0!3m2!1spt-BR!2sbr!4v1676545723763!5m2!1spt-BR!2sbr" width="350" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',

        descricaoCompleta: 'Inaugurada nos anos 1980, época em que a zona sul era tomada por bares alemães, a Zur Alten Mühle é um dos poucos que resiste com sucesso sob a administração dos filhos de seu fundador, o imigrante Willy Heying. A rústica fachada já entrega o clima de taverna que está por vir, mas é entrar para viajar na decoração rústica, em que o couro se destaca nos assentos das cadeiras assim como a madeira escura, que está por todos os lados, literalmente – do teto ao piso, passando pelas paredes, colunas, mesas e balcão, fazendo deste ambiente germânico um espaço onde se serve chopes bem tirados das torneiras e petiscos clássicos, como o salsichão com salada de batata e a linguiça Blumenau. Se a fome for grande, há pratos mais robustos a disposição, como o Marreco Recheado com Repolho Roxo e o Kassler, à base de carne suína e batatas, que permitem viver essa experiência autêntica ao máximo.',

        horarios: 'Seg - Sex, 12:00h - 23:00h',
        faixaPreco: '$ $ $ $ $',
        telefone: '(11) 97891-6149',

        mediaNota: 4.5,    
    },

    {
        idRestaurante: 2,
        nomeRestaurante: 'Coco Bambu Anália Franco',   
        descricao: 'Restaurante de frutos do mar da rede cearense em São Paulo.',
        imagem: 'assets/images/img_reh/imagem_rest2.png',
                
        endereco: 'Rua Azevedo Soares, 2150, Mooca, São Paulo/SP',
        googleFoto: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5941573956734!2d-46.558136985266536!3d-23.547095066950185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e89b5f05be7%3A0x574d676c4f8d27c!2sCoco%20Bambu%20-%20An%C3%A1lia%20Franco!5e0!3m2!1spt-BR!2sbr!4v1676546667856!5m2!1spt-BR!2sbr" width="350" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        
        descricaoCompleta: 'Iniciamos no ano de 1989 em Fortaleza/CE com o Dom Pastel, primeiro restaurante fundado por Afranio e Daniela Barreira. Esta unidade foi inspiração para o crescimento da rede Coco Bambu, que desde então vem encantando e atraindo clientes nos mais diversos estados do Brasil. Considerado o maior e melhor restaurante do Brasil, com especialidade em frutos do mar, o Coco Bambu possui um amplo e variado cardápio, com comidas e bebidas deliciosamente diferenciadas, feitas com ingredientes frescos da mais alta qualidade. Os pratos são bem servidos e toda essa excelência é apresentada a preços acessíveis. Nossas unidades são amplas, possuem decoração rústica e elegante, oferecendo aos nossos clientes um ambiente sofisticado e aconchegante. Visite-nos e encante-se!',
        
        horarios: 'Todos os dias, 11:00h - 23:00h',
        faixaPreco: '$ $ $ $',
        telefone: '(11) 99701-6827',
        
        mediaNota: 4.5,
    },
        
    {
        idRestaurante: 3,
        nomeRestaurante: 'Picanharia dos Amigos',   
        descricao: 'Steakhouse, Comidas Brasileiras, e Barzinho pros amigos',
        imagem: 'assets/images/img_reh/imagem_rest3.png',
                
        endereco: 'Rua Pedrália, 370, São Paulo/SP',
        googleFoto: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.954998221603!2d-46.62301498135712!3d-23.605946827228145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b70ff722635%3A0xec843063fdf6b9c5!2sPicanharia%20dos%20Amigos%20-%20Ipiranga!5e0!3m2!1spt-BR!2sbr!4v1676548211402!5m2!1spt-BR!2sbr" width="350" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        
        descricaoCompleta: 'Entrega, Para levar, Reservas, Mesas ao ar livre, Lugares para sentar, Estacionamento com manobrista, Acesso para cadeirantes, Serve bebida alcoólica, Bar completo, Wi-fi gratuito, Aceita cartão de crédito, Serviço de mesa, Vinho e cerveja, Familiar.',
        
        horarios: 'Ter - Dom, 11:00h - 00:00h',
        faixaPreco: '$ $ $ $',
        telefone: '(11) 5062-4242',
        
        mediaNota: 5,
    },
        
    {
        idRestaurante: 4,
        nomeRestaurante: 'Altruista Osteria e Enoteca',   
        descricao: 'Comida Italiana, Frutos do mar, Grelhados, Wine Bar, Sul-americana, Restaurante com bar',
        imagem: 'assets/images/img_reh/imagem_rest4.png',
                
        endereco: 'Alameda Campinas, 952, Jardim Paulista, São Paulo/SP',
        googleFoto: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9900964843005!2d-46.65854718526611!3d-23.56879916775152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce591706ecdda7%3A0x41df2c52478dc61e!2sAltru%C3%ADsta%20Osteria%20e%20Enoteca!5e0!3m2!1spt-BR!2sbr!4v1676548254837!5m2!1spt-BR!2sbr" width="350" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        
        descricaoCompleta: 'Altruísta Osteria e Enoteca une a cozinha e a hospitalidade italiana na sofisticação do Jardins. Especialidades como massas, carnes e molhos - que levam ingredientes selecionados da nossa própria Horta Orgânica - são acompanhadas por saborosos vinhos harmonizados pela nossa equipe de cinco sommeliers. Nossa missão é introduzir um novo modelo de negócio, focado no bem comum. <br><b>Seleção de Vinhos & Azeites:</b> Já pensou em escolher uma opção entre as 150 que oferecemos de vinhos em taça? Ou um dos 500 rótulos de vinhos a preço de loja ou com desconto especial para levar para casa. Temos uma excelente seleção de vinhos especiais antigos disponível na loja e uma adega climatizada com 800 garrafas. Além de tudo isso, contamos com uma equipe de 5 sommeliers. Ah, não deixe de experimentar um dos azeites da nossa seleção especial de importados.',
        
        horarios: 'Seg - Sab, 12:00h - 00:00h',
        faixaPreco: '$ $ $ $ ',
        telefone: '(11) 3142-9962',
        
        mediaNota: 5,
    },
        
    {
        idRestaurante: 5,
        nomeRestaurante: 'Peixe Ao Cubo',   
        descricao: 'Culinária de fusão japonesa, Japonesa, Sushi, Asiática',
        imagem: 'assets/images/img_reh/imagem_rest5.png',
                
        endereco: 'Rua Apinajés, 1375, Perdizes, São Paulo/SP',
        googleFoto: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7269747460723!2d-46.68567058526671!3d-23.542320366773914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57b80f585145%3A0x6c2def2d968099d0!2sPeixe%20ao%20Cubo!5e0!3m2!1spt-BR!2sbr!4v1676548305444!5m2!1spt-BR!2sbr" width="350" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        
        descricaoCompleta: 'Criado com o principal propósito de disseminar e desmistificar a culinária japonesa no Brasil, Peixe ao Cubo representa a inédita sintonia entre peixaria, sushi bar e praticidade.Com uma experiência de culinária japonesa surpreendente e inovadora, o restaurante oferece pratos prontos e combinados frescos preparados no mesmo dia para ser retirado na geladeira a qualquer hora.',
        
        horarios: 'Todos os dias, 12:00h - 23:00h',
        faixaPreco: '$ $ $ $ $',
        telefone: '(11) 2365-4369',
        
        mediaNota: 5,
    },
        
    {
        idRestaurante: 6,
        nomeRestaurante: 'Bar BTNK',   
        descricao: 'Americana, Bar',
        imagem: 'assets/images/img_reh/imagem_rest6.png',
                
        endereco: 'Rua Tobias Barreto, 779, São Paulo/SP',
        googleFoto: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d888.3431521585117!2d-46.59006662944984!3d-23.55068796376367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5eca125e5907%3A0x7263d7067ade663d!2sR.%20Tobias%20Barreto%2C%20779%20-%20Mooca%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003176-000!5e0!3m2!1spt-BR!2sbr!4v1676548362671!5m2!1spt-BR!2sbr" width="350" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        
        descricaoCompleta: 'BTNK art BAR é um lugar de experiências: coquetelaria, gastronomia, storytelling e música numa releitura moderna inspirada na Geração Beat, a vanguarda artística dos ícones Kerouac, Cassady, Ginsberg e Burroughs.',
        
        horarios: 'Qua - Sab, 12:00h - 02:00h',
        faixaPreco: '$ $ $',
        telefone: '(11) 2601-4110',
        
        mediaNota: 4,
    },
];

function creatCardLocais(local) {
    
    const newArticle = document.createElement("article");

    newArticle.innerHTML = `
            <a href="restaurante_indicado.html?idRestaurante=${local.idRestaurante}">
                <img src="${local.imagem}" alt="Foto ${local.nomeRestaurante}" class="photoLocal" />
                <h3>${local.nomeRestaurante}</h3>
            </a>
            <h6>Preço: ${local.faixaPreco} - Avaliação: ${local.mediaNota}</h6>
            <p>${local.descricao}</p>
        `;

    document.querySelector("main").appendChild(newArticle);
}

function filtarLocais () {
    let busca = document.getElementById("search_locais").value;
    let listaFiltrada = [];

    if (busca.length == 0) {

        listaFiltrada = listaRestaurante;

    } else {
        
        for (let i=0; i < listaRestaurante.length; i++) {
            let validador = true;

            if (listaRestaurante[i].nomeRestaurante.toLowerCase().indexOf(busca.toLowerCase()) < 0) {
                validador = false;
            }

            if (validador == true) {
                listaFiltrada.push(listaRestaurante[i]);
            }

        }
    }
    

    return listaFiltrada;
}

function listarLocais (pg) {
    let lisaFiltradaLocais;


    lisaFiltradaLocais = filtarLocais();


    for (let i=0; i<lisaFiltradaLocais.length; i++) {
        creatCardLocais(lisaFiltradaLocais[i]);
    }
}