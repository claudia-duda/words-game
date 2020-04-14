$("#botao-frase").click(fraseAleatoria);


function fraseAleatoria(){//pegando do servidor q o node roda com ajax
    $('#spinner').toggle();
    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        },1500);
    })
    .always(function(){
        $('#spinner').toggle();
    });
}

function trocaFraseAleatoria(data){
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizarTempoInicial(data[numeroAleatorio].tempo);
}