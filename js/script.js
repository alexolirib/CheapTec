$(document).ready(function () {

    $("#quemSomos, #categoria, #contato").click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 600);
    });
    $("#home").click(function (event) {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    })

    var fecharMascara = () => $(".maskProduct").css("display", "none")
    var abrirMascara = () => $(".maskProduct").css("display", "inherit")
    
    var verificaDiv = 0

    $(".maskProduct").click(function () {
        if (verificaDiv != 1) {
            fecharMascara();
        }
        verificaDiv = 0;
    })
    $(".card-image").click(function () {
        verificaDiv = 1;
    })
    

    $(".produto-comprar").click(function (event){
        fecharMascara();
        verificaDiv = 0;
    })

    $(".menu").click(function () {
        //$(this).attr("id")
        $('#contatoDiv').animate({ scrollTop: $('#contatoDiv')[0].scrollHeight }, 500);
        console.log(this.id)
    })



    let celuar = {
        descricao: "LG G6",
        valor: "1099,99",
        image: "celular.jpg"
    }
    let Televisao = {
        descricao: "TV SMART",
        valor: "1599,99",
        image: "smart.jpg"
    }
    let games = {
        descricao: "PS4",
        valor: "5000,99",
        image: "ps4.jpg"
    }
    let tablets = {
        descricao: "IPAD",
        valor: "1599,99",
        image: "IPAD.jpg"
    }
    let mochila = {
        descricao: "Mochila",
        valor: "450,99",
        image: "mochila.jpg"
    }
    let Relogio = {
        descricao: "iwatch",
        valor: "1690,99",
        image: "relogio.jpg"
    }
    let Notebook = {
        descricao: "MacBook",
        valor: "8999,99",
        image: "notebook.jpg"
    }
    let Peças = {
        descricao: "Mouse Dell",
        valor: "15,99",
        image: "mouse.jpg"
    }

    $(".category").click(function () {
        let nomeCategoria = $(this).attr('id');
        switch (nomeCategoria) {
            case "Celular":
                $(".produto-descricao").text(celuar.descricao);
                $(".produto-valor").text(`R$${celuar.valor}`);
                $(".produto-imagem").attr('src', `./image/${celuar.image}`);
                $(".produto-descricao").css("font-size", "40px")
                break;
            case "Televisão":
                $(".produto-descricao").text(Televisao.descricao);
                $(".produto-valor").text(`R$${Televisao.valor}`);
                $(".produto-imagem").attr('src', `./image/${Televisao.image}`);
                $(".produto-descricao").css("font-size", "27px")
                break;
            case "Games":
                $(".produto-descricao").text(games.descricao);
                $(".produto-valor").text(`R$${games.valor}`);
                $(".produto-imagem").attr('src', `./image/${games.image}`);
                $(".produto-descricao").css("font-size", "40px")
                break;
            case "Tablets":
                $(".produto-descricao").text(tablets.descricao);
                $(".produto-valor").text(`R$${tablets.valor}`);
                $(".produto-imagem").attr('src', `./image/${tablets.image}`);
                $(".produto-descricao").css("font-size", "40px")
                break;
            case "Mochila":
                $(".produto-descricao").text(mochila.descricao);
                $(".produto-valor").text(`R$${mochila.valor}`);
                $(".produto-imagem").attr('src', `./image/${mochila.image}`);
                $(".produto-descricao").css("font-size", "27px")
                break;
            case "Relogio":
                $(".produto-descricao").text(Relogio.descricao);
                $(".produto-valor").text(`R$${Relogio.valor}`);
                $(".produto-imagem").attr('src', `./image/${Relogio.image}`);
                $(".produto-descricao").css("font-size", "40px")
                break;
            case "Notebook":
                $(".produto-descricao").text(Notebook.descricao);
                $(".produto-valor").text(`R$${Notebook.valor}`);
                $(".produto-imagem").attr('src', `./image/${Notebook.image}`);
                $(".produto-descricao").css("font-size", "27px")
                break;
            case "Peças":
                $(".produto-descricao").text(Peças.descricao);
                $(".produto-valor").text(`R$${Peças.valor}`);
                $(".produto-imagem").attr('src', `./image/${Peças.image}`);
                $(".produto-descricao").css("font-size", "27px")
                break;




        }
        abrirMascara();

    })
})


