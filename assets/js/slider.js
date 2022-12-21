let sliders  = document.querySelectorAll('#sliders li');  /*Pega todos os elementos li da lista não ordenada	retornando um objeto NodeList, 	de acordo com posicionamento encontrado
no documento*/
let current  = 0;                                       /* Define o indice, que será responsavel  por informar os slider atual */
let total    = sliders.length - 1;                      /* Retorna o total de itens do slide. Diminui menos 1, devido o primeiro item começa com zero.  Se temos 2 items, sua posição:
0,1,2*/

window.setInterval(function() {                         /*  Executaremos uma função num intervalo de tempo.  E defiremos que executará em 2000 milesegundos*/
	let index =  current ? current - 1 : total;         /*	 a variavel index será responsável pela	 posição do elemento que iremos remover a classe	*/
	sliders[index].className  = '';                     /*Pega o elemento pra remover a classe*/	
	sliders[current].className  = 'slider-active';      /*Adiciona a classe no elemento atual*/
	current = current >= total ? 0 : current+1; 	    /*Calcular a posição do próximo elemento que será exibido*/
}, 4000);