function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Douglas"
    var numPalavras = $("#contador-palavras").text();

    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.append(linha);

    $(".placar").slideDown(500);//da um scroll pro placar
    scrollPlacar() // animação do scroll
}

function novaLinha(usuario, palavras) {
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").addClass("botao-remover").attr("href", "#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);

    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha() {
    event.preventDefault();
    var linha = $(this).parent().parent().fadeOut(1000); //aplicar efeito jquery de esvanecer

    setTimeout(() => linha.remove(),1000);//remover a linha depois de um segundo
}

$("#botao-placar").click(mostrarPlacar);

function mostrarPlacar() {
   $('.placar').stop().slideToggle(600); //seta a exibição do display

}

function scrollPlacar(){
   var posicaoPlacar = $(".placar").offset().top;//localização do placar em relação ao topo da pagina

    $('body').animate({
        scrollTop: posicaoPlacar + "px" // move para a posição do placar em px
    },1000);
}

