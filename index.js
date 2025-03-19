const spanNav = document.getElementById('span_nav')
const nav = document.querySelector('.nav_container')
const content = document.querySelector('.content')

spanNav.addEventListener('click', (e) => {
    spanNav.classList.toggle('spanClass')
    content.classList.toggle('contOpacity')
})

spanNav.addEventListener('mousedown', (e) => {
    nav.classList.toggle('mouse')

})

// ________________________

sound = () => {

    let audio = new Audio();
    audio.src = "./sound/sound1.mp3";
    audio.play()
    audio.volume = .020
}


let videoAdd = document.querySelector('.video_add')

window.addEventListener('scroll', (e) => {

    // console.log((window.scrollY + window.innerHeight) / document.body.offsetHeight)
    let windowHeight = (window.scrollY + window.innerHeight) / document.body.offsetHeight
    if (windowHeight > 0.85) {
        console.log('yes')
        videoAdd.style.opacity = 1
        videoAdd.style.transform = 'none'

    } else {
        videoAdd.style.transform = 'translate(-150%)'
        videoAdd.style.opacity = 0

    }
})