

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
let myimage = document.querySelector('#myimage')
const a = './pictures/designerdesk.jpg';
const b = './pictures/laptopondesk.jpg';
const c = './pictures/laptoppink.jpg';
const d = './pictures/laptopgraph.jpg';

const a0 = './pictures/2appledesktops.jpg'
const a1 = './pictures/designroom1.jpg'
const a2 = './pictures/flowersondesck.jpg'
const a3 = './pictures/interiordesign2.jpg'
const a4 = './pictures/ligthonwall.jpg'
const a5 = './pictures/mediaapps.jpg'
const a6 = './pictures/plumberworking.jpg'
const a7 = './pictures/renewablepannels.jpg'
const a8 = './pictures/restaurantplateswithfood.jpg'
const a9 = './pictures/painterroll.jpg'
const a10 = './pictures/hairstylewoman.jpg'
const a11 = './pictures/drone.jpg';
const a12 = './pictures/cameras.jpg'

const laptop = [a, b, c, d]
const picturemix = [a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12]
let run = 0;
function changeimg(){
    if( run == 13){ run = 0}
    myimage.src = picturemix[run]
    run += 1
}
setInterval(changeimg, 4000)

let divwidth = toppage.offsetWidth //width of div 

let menu = 0
dropbtn.addEventListener('click', (e) => {
    divwidth = toppage.offsetWidth
    if(divwidth < 550){
        if(menu == 0){
            navbar.setAttribute('style', 'display:flex; width:160px; transition: width 1s;')
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
        navbar.setAttribute('style', 'display:none')
    }
})
dropmenu.addEventListener('mouseleave', (e) => {
    divwidth = toppage.offsetWidth
    if(divwidth < 550){
    navbar.setAttribute('style', 'display:nonee')
    }
})