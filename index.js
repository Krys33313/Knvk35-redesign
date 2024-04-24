function close_tab(){
    let side = document.querySelector("#side")
    let article = document.querySelector("#article")
    let button_open = document.querySelector("#open")
    side.style.width = "0%"
    article.style.width = "100%"
    button_open.style.opacity = "1"
}
function open_side(){
    let side = document.querySelector("#side")
    let article = document.querySelector("#article")
    let button_open = document.querySelector("#open")
    side.style.width = "25%"
    article.style.width = "75%"
    button_open.style.opacity = "0"
}
