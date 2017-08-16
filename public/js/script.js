function toogleMenu() {
    var elemMenuDisp=$('.my-header .my-menu ul').css('display');
    if (elemMenuDisp=='none') {
        $('.my-header .my-menu ul').show();
        $('.my-menu-toogle').css('background','url(img/svg/toogleMenuHide.svg)');
    } else {
        $('.my-header .my-menu ul').hide();
        $('.my-menu-toogle').css('background','url(img/svg/toogleMenu.svg)');
    }
    $('.my-menu-toogle').css('background-size','cover');
}

$(window).resize(function() {
    var screenW=document.body.clientWidth;
    //alert(screenW);
    if (screenW>=800) {
        $('.my-header .my-menu ul').show();
    } else {
        $('.my-header .my-menu ul').hide();
    }
});