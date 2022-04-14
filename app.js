
const randomBtn = document.querySelector('.random-color')
const colorInfo = document.querySelector('p')
const values = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
]
function randomColor() {
    let color = '#'
for (let i=0; i<6; i++ ){
    const randomNumber =Math.floor(Math.random() * values.length)
    const randomColor = values[randomNumber]
    color += randomColor
    
}
return color
}





randomBtn.addEventListener('click', (e) =>{
    const deg = Math.floor(Math.random() * 360)
    const color1 = randomColor()
    const color2 = randomColor()
    document.querySelector('body').style.background = `linear-gradient(${deg}deg, ${color1}, ${color2})`
    colorInfo.textContent = `Linear-gradient (${deg}deg, ${color1}, ${color2})`
    colorInfo.style.background = `linear-gradient(${deg}deg, ${color2}, ${color1})`
    
})