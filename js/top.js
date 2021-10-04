window.onload = function () {
    var offset = document.getElementById('menu').offsetTop; //Distância/Deslocamento do Menu para o topo
    //alert(offset)
    var menu = document.getElementById('menu'); //Simplificar o código

    document.addEventListener('scroll', function() { //Listener = escuta o site meu filho, acompanhamento do site. Aqui ele acompanha o scroll e chama a function
        if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) { //Se o scroll for maior que o offset
            menu.style.position = 'fixed';
            menu.style.top = '0';
        } else {
            menu.style.position = 'initial'; //Voltando ao padrão
        }
    });
}


