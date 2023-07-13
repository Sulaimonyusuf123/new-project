const url = ("https://api.adviceslip.com/advice");
const firstInput = document.getElementById('inputs');
const secondInput = document.getElementById('empty');
const thirdInput = document.getElementById('icon3');





firstInput.innerText = 'ADVICE #123'
secondInput.innerText = "click to get a fun programming with olatech"
secondInput.style.fontSize = '1.5rem';
thirdInput.addEventListener('click', ()=>{
fetch (url)
.then(response => response.json())
.then(data => {
    secondInput.textContent = data.slip.advice
    firstInput.textContent = "ADVICE # " +data.slip.id
})
})