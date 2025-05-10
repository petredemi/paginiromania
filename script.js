

const dropbtn = document.querySelector('.dropbutton')
const navbar = document.querySelector('nav')
const dropmenu = document.querySelector('.menu')
const toppage = document.querySelector('.toppage')

const acasa = document.querySelector('.acasa')
const exemple = document.querySelector('.exemple')
const personal = document.querySelector('.personal')
const contact = document.querySelector('.contact')
const contacta = document.querySelector('div.contact > a')
const navlinks = document.querySelectorAll('nav > div')
const navlinksa = document.querySelectorAll('nav > div > a')

console.log(navlinks)

let divwidth = toppage.offsetWidth //width of div 

let menu = 0
dropbtn.addEventListener('click', (e) => {
    divwidth = toppage.offsetWidth
    if(divwidth < 450){
        if(menu == 0){
            navbar.setAttribute('style', 'display:flex')
            menu = 1
        }else{
            navbar.setAttribute('style', 'display:none')
            menu = 0
        }
    }
})
navbar.addEventListener('click', (e) => {
    divwidth = toppage.offsetWidth
    if(divwidth < 450){
        navbar.setAttribute('style', 'display:none')
    }
})
dropmenu.addEventListener('mouseleave', (e) => {
    divwidth = toppage.offsetWidth
    if(divwidth < 450){
    navbar.setAttribute('style', 'display:none')
    }
})