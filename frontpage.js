
let simbol11 = document.querySelector('div.simbol11')
let simbol12 = document.querySelector('div.simbol12')

const socket = new WebSocket('wss://ws.finnhub.io?token=d2c3hr9r01qvh3vdtos0d2c3hr9r01qvh3vdtosg');

// Connection opened -> Subscribe
socket.addEventListener('open', function (event) {
   // socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'BINANCE:BTCUSDT'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'BINANCE:ETHUSDT'}))
})

// Listen for messages
let btctrend = 100000;
let ethtrend = 4000;
socket.addEventListener('message', function (event) {
   // console.log('Message from server ', event.data);
  let ee = JSON.parse(event.data)
  let coin = ee.data[0].s
  let pp = ee.data[0].p.toFixed(2)
  let price = pp.toString()
  if (coin == 'BINANCE:BTCUSDT'){
        simbol11.textContent = ' $'+ price.substr(0, 3) + ',' + price.substr(3)
        if (pp - btctrend > 0){ simbol11.style.backgroundColor = 'rgb(8, 200, 8)'}
        else if( pp - btctrend < 0) { simbol11.style.backgroundColor = 'rgba(251, 56, 56, 0.76)'}
        else{ simbol11.style.backgroundColor = 'white'}
        btctrend = pp
    } else if (coin == 'BINANCE:ETHUSDT'){
        simbol12.textContent = ' $'+ price//.substr(0, 3) + ',' + price.substr(3)
        if (pp - ethtrend > 0){ simbol12.style.backgroundColor = 'rgb(8, 200, 8)'}
        else if( pp - ethtrend < 0) { simbol12.style.backgroundColor = 'rgba(251, 56, 56, 0.76)'}
        else { simbol12.style.backgroundColor = 'white'}
            ethtrend = pp;
    }
})

// Unsubscribe
 var unsubscribe = function(symbol) {
    socket.send(JSON.stringify({'type':'unsubscribe','symbol': symbol}))
}
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
let igg = './icons/trianglegreen.png';
let marketstatus = document.querySelector('div.marketstatus');
let timedisplay = document.querySelector('div.time');

let nyhour = 1;
function localTime(){
        const dd = new Date()
        const hour = dd.getHours()
       // let nyhour 
        if( hour == 0){nyhour = 19}
        else if( hour == 1){ nyhour = 20}
        else if ( hour ==2){ nyhour = 21}
        else if( hour == 3){ nyhour = 22}
        else if (hour == 4){ nyhour = 23}
        else{ nyhour =  hour - 5}
        const min = '0' + dd.getMinutes()
        timedisplay.textContent = 'NewYork time: ' + nyhour+ ' : ' + min.slice(-2);
}
setInterval(localTime, 1000);

const symbols = [simbol1, simbol2, simbol3, simbol4, simbol5, simbol6, simbol7, simbol8, simbol9 ];
const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
const shares = ['AMZN', 'AAPL', 'GOOG', 'META', 'TSLA', 'NVDA', 'MSFT', 'AVGO', 'AMD', 'IBM'];
async function finnhubPrice(x, n){
    try{
        const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${x}&exchange=US&token=d2c3hr9r01qvh3vdtos0d2c3hr9r01qvh3vdtosg`, {mode:'cors'});
        const openstatus = await fetch(`https://finnhub.io/api/v1/stock/market-status?exchange=US&token=d2c3hr9r01qvh3vdtos0d2c3hr9r01qvh3vdtosg`, {mode:'cors'});
        const stock = await response.json();
        const open = await openstatus.json()             
        if(!response.ok || !openstatus){
            throw 'no data'
        }else{
            let openclosed; 
            if(open.isOpen == false){
                 openclosed = 'Closed'
            }else if(open.isOpen == true){
                openclosed = 'Open'
            }
//            console.log(stock)
            symbols[n].textContent = x + ': ' + stock.c + ' ' + ' ' + stock.dp.toFixed(2) + '%'
            marketstatus.textContent = 'US Markets: ' + openclosed
            if(stock.dp > 0){
            imgs[n].src = igg
            }else if (stock.dp < 0){
                imgs[n].src = igr
            }
        }
    }catch(error){
        console.log(error)
    };
};
function checkPrices(){
        for (let i = 0; i < shares.length; i++){
            finnhubPrice(shares[i], i)  
        };
};
function updatePrices(){
    let weekday = new Date()
    let x = weekday.getDay()
    if( x > 0 && x < 6){
        if( nyhour > 8 || nyhour < 16){
            for (let i = 0; i < shares.length; i++){
                finnhubPrice(shares[i], i)  
            };
        }
    }
};
checkPrices()
setInterval(updatePrices, 100000)

