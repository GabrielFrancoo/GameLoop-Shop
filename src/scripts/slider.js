let i = 0;
const classGame = document.querySelectorAll("#ps4_games");
const classGameps5 = document.querySelectorAll("#ps5_games");

const right_first = document.getElementById("rightFirst")
const left_first = document.getElementById("backFirst")
const right_second = document.getElementById("right_second")
const left_second = document.getElementById("back_second")



function changeSliderFirst (Style) {
    classGame.forEach((e) => {
        e.style.transform = Style
    })
}

function changeSliderSecond (Style) {
    classGameps5.forEach((e) => {
        e.style.transform = Style
    })
}



right_first.addEventListener("click",  (event) => {
    i += 10
    changeSliderFirst(`translate3d(${i}rem, 0px, 0px)`)
    i = 20 ?  changeSliderFirst(`translate3d(${20}rem, 0px, 0px)`) : changeSliderFirst(`translate3d(${i}rem, 0px, 0px)`) // Ternario, valida se está igual a vinte

}, false)


left_first.addEventListener("click",  (event) => {
    i -= 10

    i = -20 ?  changeSliderFirst(`translate3d(${-20}rem, 0px, 0px)`) : changeSliderFirst(`translate3d(${i}rem, 0px, 0px)`) // Ternario, valida se está igual a vinte

}, false)

right_second.addEventListener("click",  (event) => {
    i += 10
    changeSliderSecond(`translate3d(${i}rem, 0px, 0px)`)
    i = 20 ?  changeSliderSecond(`translate3d(${20}rem, 0px, 0px)`) : changeSliderSecond(`translate3d(${i}rem, 0px, 0px)`) // Ternario, valida se está igual a vinte

}, false)

left_second.addEventListener("click",  (event) => {
    i -= 10
    console.log(i == -20)
    i = -20 ?  changeSliderSecond(`translate3d(${-20}rem, 0px, 0px)`) : changeSliderSecond(`translate3d(${i}rem, 0px, 0px)`) // Ternario, valida se está igual a vinte

}, false)


