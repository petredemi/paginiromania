

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
 //   myimage.setAttribute('style', 'max-width: 450px; transition: width 1s')
    run += 1
}
setInterval(changeimg, 4000)

let simbol1 = document.querySelector('div.simbol1')
let img1 = document.querySelector('#img1')

let simbol2 = document.querySelector('div.simbol2')
let img2 = document.querySelector('#img2')

let simbol3 = document.querySelector('div.simbol3')
let img3 = document.querySelector('#img3')

let simbol4 = document.querySelector('div.simbol4')
let img4 = document.querySelector('#img4')

let simbol5 = document.querySelector('div.simbol5')
let img5 = document.querySelector('#img5')

let simbol6 = document.querySelector('div.simbol6')
let img6 = document.querySelector('#img6')

let simbol7 = document.querySelector('div.simbol7')
let img7 = document.querySelector('#img7')

let simbol8 = document.querySelector('div.simbol8')
let img8 = document.querySelector('#img8')

let simbol9 = document.querySelector('div.simbol9')
let img9 = document.querySelector('#img9')

let igr = './icons/trianglered.png'
let igg = './icons/trianglegreen.png'


const symbols = [simbol1, simbol2, simbol3, simbol4, simbol5, simbol6, simbol7, simbol8, simbol9 ]
const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

async function finnhubPrice(x, n){
    try{
       const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${x}&exchange=US&token=d2c3hr9r01qvh3vdtos0d2c3hr9r01qvh3vdtosg`, {mode:'cors'});
       const stock = await response.json();
             
        if(!response.ok){
            throw 'no data'
        }else{
            console.log(stock)
            symbols[n].textContent = x + ': ' + stock.c + ' ' + ' ' + stock.dp.toFixed(2) + '%'
            if(stock.dp > 0){
            imgs[n].src = igg
            }else if (stock.dp < 0){
                imgs[n].src = igr
            }
        }
    }catch(error){
        console.log(error)
    };
}
finnhubPrice('AMZN', 0)
finnhubPrice('AAPL', 1)
finnhubPrice('GOOG', 2)
finnhubPrice('META', 3)
finnhubPrice('TSLA', 4)
finnhubPrice('NVDA', 5)
finnhubPrice('MSFT', 6)
finnhubPrice('AVGO', 7)
finnhubPrice('AMD', 8)
