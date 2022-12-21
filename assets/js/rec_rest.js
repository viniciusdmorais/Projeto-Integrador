/********* PARA AVALIAÇÃO COM ESTRELINHAS *********/

var stars = document.querySelectorAll('.star-icon');

document.addEventListener('click',function(e){
    var classStar = e.target.classList;
    if (!classStar.contains('ativo')){
        stars.forEach(function(star){
            star.classList.remove('ativo');
        });
        classStar.add('ativo');
        console.log(e.target.getAttribute('data-avaliacao'));
    }
});

/* O clique nas estrelinhas não está funcionando, e uma vez que clica em uma delas, o 'ativo' não sai mais. :( */