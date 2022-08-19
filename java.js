//Basic Arithmetic functions
const add = (a,b) => {return Number(a)+Number(b)}
const subtract = (a,b) => {return a-b}
const multiply = (a,b) => {return a*b}
const divide = (a,b) => {return a/b}


//Function to process user input
function operate (input) {
    
    if (operator[0] === 'add') {
        return add (input[0], input[1])
    } else if (operator[0] === 'subtract') {
        return subtract (input[0], input[1])
    } else if (operator[0] ==='multiply') {
        return multiply (input[0], input[1])
    } else if (operator[0] === 'divide') {
        return divide (input[0], input[1])
    }   
}  

//Arrays to hold and display values
const displayText = []
displayText [0]=0
const calculationArray = []
const operator= []

const displayScreen = document.querySelector('#display')

//Basic clear functions for arrays

function rmvDisplay () {
    displayText.splice(0, displayText.length)
}

function rmvCalcs () { 
    calculationArray.splice(0, calculationArray.length)
}

function rmvOperators () {
    operator.splice(0, operator.length)
}


//Operation and number processes when hitting buttons
//INTEGER
const intInput = document.querySelectorAll('.intButton')

intInput.forEach(button => {
    button.addEventListener('click', (e) => { 
      if ((Number(e.target.id) === 0) && (displayText[0]===0)) {
        return
      } else if (displayText[0]===0) {
        rmvDisplay ()
    } 
      displayText.push(Number(e.target.id))
      displayScreen.textContent = displayText.join('')
    })
})


//OPERATOR
const calcInput = document.querySelectorAll('.calcButton')

calcInput.forEach(button => {
    button.addEventListener('click', (e) => {
        if  ((displayText[0]===0) && (calculationArray[0]===undefined)) {
          return
      } else if ((operator[0]===undefined) && (calculationArray[0]===undefined)) {
          calculationArray.push(displayText.join(''))
          rmvDisplay()
          operator.push(e.target.id)
      }else if ((displayText[0]===undefined)) {
          rmvOperators ()
          operator.push(e.target.id)
      } else if ((operator[0]!==undefined) && (calculationArray[0]!==undefined)) {
          calculate ()
          operator.push(e.target.id) 
      } 
})
})



//CALCULATE
const equalsInput = document.querySelector('#equals')
equalsInput.addEventListener('click', calculate)

function calculate () {
    calculationArray.push(displayText.join(''))
    process = operate (calculationArray)
    results = Number(process.toFixed(8))
    
    rmvDisplay ()
    rmvOperators ()
    rmvCalcs ()
    calculationArray.push(results)
    displayScreen.textContent = calculationArray[0]
}

//CLEAR
const clearCalc = document.querySelector('#clear')

clearCalc.addEventListener('click', () => {
    rmvCalcs ()
    rmvDisplay ()
    rmvOperators ()
    displayText[0] = 0
    return displayScreen.textContent = displayText[0]
})