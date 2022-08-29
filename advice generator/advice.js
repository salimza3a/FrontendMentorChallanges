const adviceNumber = document.querySelector('.advice_number');
const adviceText = document.querySelector('.card_text');

const btn = document.querySelector('.btn');






const ADVICE_API = "https://api.adviceslip.com/advice";

function generateRandomNum() {
let randomValue = Math.floor(Math.random() * 1000)
getNewAdvice(randomValue)
}
fetch(ADVICE_API).then(res => {
    return res.json()
}).then (data => {
    generateAdvice(data.slip)
})

async function getNewAdvice (value) {
    console.log(value,'value')
    const res = await fetch(`https://api.adviceslip.com/advice/${value}`);
    const data = await res.json();
    console.log(data,'data')
   try{
    generateAdvice(data.slip)
   }
   catch(err) {
    console.log(err)
   }
}

async function generateAdvice (arg) {
    const response = await arg
    setTimeout(() => {
        console.log(arg)
    adviceNumber.innerText = `Advice #${response?.id}`
    adviceText.innerText = response?.advice;
   
    },2500)
}

btn.addEventListener('click', generateRandomNum)