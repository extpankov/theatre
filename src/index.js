// import css from "../src/style.min.css"

$('.header__menu').click(() => {
    if ($('.header__ddm').css('display') == 'block') {
        $('.header__ddm').hide()
    } else {
        $('.header__ddm').show()
    }
})

$('.sn__a').click(() => {
    event.preventDefault()
})