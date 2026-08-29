
const dropbtn = document.querySelector('.dropbutton')
const navbar = document.querySelector('nav')
const dropmenu = document.querySelector('.menu')
const toppage = document.querySelector('.toppage')

let divwidth = toppage.offsetWidth //width of div 

let menu = 0
dropbtn.addEventListener('click', (e) => {
    divwidth = toppage.offsetWidth
    if(divwidth < 550){
        if(menu == 0){
            navbar.setAttribute('style', 'transform: translateX(0px); transition: 1s')
            menu = 1
        }else{
            navbar.setAttribute('style', 'transform: translateX(200px); transition: 1s')
            menu = 0
        }
    }
})
navbar.addEventListener('click', (e) => {
    divwidth = toppage.offsetWidth
    if(divwidth < 550){
        navbar.setAttribute('style', 'transform: translateX(200px); transition: 1s')
    }
})

dropmenu.addEventListener('mouseleave', (e) => {
    divwidth = toppage.offsetWidth;
    if(divwidth < 550){
    navbar.setAttribute('style', 'transform: translateX(200px); transition: 1s')
    }
})
