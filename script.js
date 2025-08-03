
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
    if(divwidth < 550){
        if(menu == 0){
            navbar.setAttribute('style', 'width:160px; transition: width 1s;')
            menu = 1
        }else{
            navbar.setAttribute('style', 'width: 0px; transition: width 1s;')
            menu = 0
        }
    }
})
navbar.addEventListener('click', (e) => {
    divwidth = toppage.offsetWidth
    if(divwidth < 550){
        navbar.setAttribute('style', 'widtt:0px; transition: width 1s;')
    }
})
dropmenu.addEventListener('mouseleave', (e) => {
    divwidth = toppage.offsetWidth;
    if(divwidth < 550){
    navbar.setAttribute('style', 'width: 0px; transition: width 1s;')
    }
})
