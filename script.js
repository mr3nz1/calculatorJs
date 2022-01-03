let btnsWithNumbers = document.querySelectorAll(".numbers")
let arithmOperators = document.querySelectorAll(".arithm-operators")
let belowDisplay = document.querySelector(".before-ans")
let aboveDisplay = document.querySelector(".after-ans")
let currentOperator
let numbersForCalculations = [];
let initialNumber;
let whichNumber = "firstNumber"
let moreFunctionalityBtns = document.querySelectorAll(".more-functionality-buttons");
let hasNegativeSign = false
let hasDot = false

btnsWithNumbers.forEach(btnNumber => {
    btnNumber.addEventListener("click", () => {
        appendToDisplay(belowDisplay, parseFloat(btnNumber.textContent))
        initialNumber = parseFloat(belowDisplay.textContent)
    })
})

arithmOperators.forEach(arithmBtn => {
    arithmBtn.addEventListener("click", () => {
        numbersForCalculations.push(initialNumber)
        aboveDisplay.textContent = numbersForCalculations[numbersForCalculations.length - 1]
        belowDisplay.textContent = 0
    
        if (numbersForCalculations.length > 1) {
            if (currentOperator == "+") {
                let a = parseFloat(numbersForCalculations[numbersForCalculations.length - 2])
                let b = parseFloat(numbersForCalculations[numbersForCalculations.length - 1])
                let ansToGive = add(a, b);
                numbersForCalculations.push(ansToGive)
                aboveDisplay.textContent = ansToGive
            } else if (currentOperator == "-") {
                let a = numbersForCalculations[numbersForCalculations.length - 2]
                let b = numbersForCalculations[numbersForCalculations.length - 1]
                let ansToGive = subtract(a, b);
                numbersForCalculations.push(ansToGive)
                aboveDisplay.textContent = ansToGive
            } else if (currentOperator == "x") {
                let a = numbersForCalculations[numbersForCalculations.length - 2]
                let b = numbersForCalculations[numbersForCalculations.length - 1]
                let ansToGive = multiply(a, b);
                numbersForCalculations.push(ansToGive)
                aboveDisplay.textContent = ansToGive                
            } else if (currentOperator == "÷") {
                let a = numbersForCalculations[numbersForCalculations.length - 2]
                let b = numbersForCalculations[numbersForCalculations.length - 1]
                let ansToGive = divide(a, b);
                numbersForCalculations.push(ansToGive)
                aboveDisplay.textContent = ansToGive                
            } else if (currentOperator == "%") {
                let a = numbersForCalculations[numbersForCalculations.length - 2]
                let b = numbersForCalculations[numbersForCalculations.length - 1]
                let ansToGive = modulo(a, b);
                numbersForCalculations.push(ansToGive)
                aboveDisplay.textContent = ansToGive                
            }
        }
        
        currentOperator = arithmBtn.textContent
    })
})

moreFunctionalityBtns.forEach(moreFuncBtn => {
    moreFuncBtn.addEventListener("click", () => {
        if (moreFuncBtn.value == "=") {
            // aboveDisplay.textContent = equal()
            aboveDisplay.textContent = equal(parseFloat(belowDisplay.textContent))
        } else if (moreFuncBtn.value == "sin") {
            let ansToTrigIdentity = Math.sin(Math.PI / 180 * parseFloat(belowDisplay.textContent)).toFixed(2)
            belowDisplay.textContent = ansToTrigIdentity
            initialNumber = ansToTrigIdentity
        } else if (moreFuncBtn.value == "cos") {
            let ansToTrigIdentity = Math.cos(Math.PI / 180 * parseFloat(belowDisplay.textContent)).toFixed(2)
            belowDisplay.textContent = ansToTrigIdentity
            initialNumber = ansToTrigIdentity            
        } else if (moreFuncBtn.value == "tan") {
            let ansToTrigIdentity = Math.tan(Math.PI / 180 * parseFloat(belowDisplay.textContent)).toFixed(2)
            belowDisplay.textContent = ansToTrigIdentity
            initialNumber = ansToTrigIdentity
        } else if (moreFuncBtn.value == "cot") {
            let ansToTrigIdentity = 1 / Math.tan(Math.PI / 180 * parseFloat(belowDisplay.textContent)).toFixed(2)
            belowDisplay.textContent = ansToTrigIdentity
            initialNumber = ansToTrigIdentity
        } else if (moreFuncBtn.value == "x²") {
            let ansToTrigIdentity = Math.pow(parseFloat(belowDisplay.textContent), 2)
            belowDisplay.textContent = ansToTrigIdentity
            initialNumber = ansToTrigIdentity
        } else if (moreFuncBtn.value == "√") {
            let ansToTrigIdentity = Math.sqrt(parseFloat(belowDisplay.textContent))
            belowDisplay.textContent = ansToTrigIdentity
            initialNumber = ansToTrigIdentity
        } else if (moreFuncBtn.value == "1/x") {
            let ansToTrigIdentity = 1 / parseFloat(belowDisplay.textContent)
            belowDisplay.textContent = ansToTrigIdentity
            initialNumber = ansToTrigIdentity
        } else if (moreFuncBtn.value == "+/-") {
            if (!hasNegativeSign) {
                ansToTrigIdentity = `-${parseFloat(belowDisplay.textContent)}`
            } else if (hasNegativeSign) {
                ansToTrigIdentity = belowDisplay.textContent.slice(1, belowDisplay.textContent.length)    
            }
            hasNegativeSign = !hasNegativeSign
            belowDisplay.textContent = ansToTrigIdentity
            initialNumber = ansToTrigIdentity
        } else if (moreFuncBtn.value == ".") {
            let ansToTrigIdentity = parseFloat(belowDisplay.textContent)
            if (!hasDot) {
                ansToTrigIdentity = `${ansToTrigIdentity}.`
                belowDisplay.textContent = ansToTrigIdentity
                initialNumber = ansToTrigIdentity
                hasDot = true
            }
            ansToTrigIdentity = belowDisplay.textContent.slice(1, belowDisplay.textContent.length)    
        } else if (moreFuncBtn.value == "C") {
            let ansToTrigIdentity = belowDisplay.textContent
            ansToTrigIdentity = ansToTrigIdentity.slice(0, ansToTrigIdentity.length - 1)
            belowDisplay.textContent = ansToTrigIdentity
            initialNumber = ansToTrigIdentity
        } else if (moreFuncBtn.value == "CA") {
            let ansToTrigIdentity = 0
            belowDisplay.textContent = ansToTrigIdentity
            initialNumber = ansToTrigIdentity
        } else if (moreFuncBtn.value == "CE") {
            let ansToTrigIdentity = 0
            belowDisplay.textContent = ansToTrigIdentity
            initialNumber = ansToTrigIdentity
            numbersForCalculations.length = 0
            aboveDisplay.textContent = initialNumber
            console.log(numbersForCalculations)
        }
        
    })
})




function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function modulo(a, b) {
    return a % b
}

function equal(b) {
    let a = parseFloat(numbersForCalculations[numbersForCalculations.length - 1])
    b = parseFloat(b)
    if (currentOperator == "+") {
        return add(a, b)
    } else if (currentOperator == "-") {
        return subtract(a, b)
    } else if (currentOperator == "x") {
        return multiply(a, b)
    } else if (currentOperator == "÷") {
        return divide(a, b)
    } else if (currentOperator == "%") {
        return modulo(a, b)
    }
}

function appendToDisplay(placeToDisplayOn, value) {
    placeToDisplayOn.textContent += value
    placeToDisplayOn.textContent = parseFloat(placeToDisplayOn.textContent)
}