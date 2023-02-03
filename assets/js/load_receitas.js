import  listaReceita  from './receitas.js'

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

 let pagina = Number((new URLSearchParams(window.location.search)).get('pg'));
        (pagina===0)?pagina=1:'';
        
        listReceitas(pagina);

        document.getElementById('filt').addEventListener('change', (e) => {
            document.querySelector('main').innerHTML = '';
            listReceitas(pagina);
        });

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

