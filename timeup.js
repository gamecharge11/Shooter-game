var isFirstTime = true
localStorage.setItem('firsttime', true)
if (localStorage.getItem('firsttime') == true) {
    localStorage.setItem('highscore', score)
    localStorage.setItem('firsttime', false)
}
var urlsearchparam = new URLSearchParams(window.location.search)
var score = urlsearchparam.get('score')
if (score > localStorage.getItem('highscore')) {
    localStorage.setItem('highscore', score)
}
document.getElementById('score').innerHTML=" " + score
document.getElementById('highscore').innerHTML= " " + localStorage.getItem('highscore')