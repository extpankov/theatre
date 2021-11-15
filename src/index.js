let a = false
$('.header__menu').click(() => {
    if ($('.header__ddm').css('display') == 'block') {
        $('.header__ddm').hide()
    } else {
        $('.header__ddm').show()
    }
})