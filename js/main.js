import '../sass/styles.scss'
import './lib/lib'

$('button').onClick(function () {
    $('div').eq(2).toggleClass('active')
})

$('div').onClick(function () {
    console.log($(this).index())
})

console.log($('div').eq(2).find('.more'))
