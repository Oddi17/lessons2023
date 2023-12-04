const evaluateValue = () =>{
    result = math.evaluate(str_of_operation)
    console.log(result,typeof(result))
    $windowCalculator.innerHTML += '='+result  
}


const aligningSize = () => {
    const $headerInput = document.querySelector('.header .input')
    
    if (!sigFontSize) {
        if (($headerInput.offsetHeight-20)>(2*height_input)){
            // console.log('PREVISHEN!!!')
            $headerInput.style.fontSize = '14px'
        }
    }else {
        $headerInput.style.fontSize = '28px'
        sigFontSize = false
    } 
}

const currentValues = (event) => {
    
    symbolclass = event.target.parentElement.classList[0]
    symbol = event.target.firstChild.data

    if ((perem) && (((symbolclass === 'number') && (symbol !=='AC')) || (symbol === '='))){
        return
    }else perem = false

    if (str_of_operation.length === 0 && symbolclass === 'symbol') {
        $windowCalculator.innerHTML = symbol
        return
    }
    
    if (symbolclass === 'symbol'){
        if ((last_symbol_class) && (symbolclass === last_symbol_class )) return
    }

    if (symbol === '÷') {
        str_of_operation += '/'
    }else if (symbol === 'AC') {
        str_of_operation = ''
        $windowCalculator.innerHTML = start_value
        sigFontSize = true
        return
    }else if (symbol=== '='){
        //evaluateValue()
        result = math.evaluate(str_of_operation)
        $windowCalculator.innerHTML += '='+result
        str_of_operation = result
        perem = true
        return
    }
    else str_of_operation += symbol

    $windowCalculator.innerHTML = str_of_operation
    last_symbol_class = symbolclass
    
}


const $numbersOftable = document.querySelectorAll('.row span')
$windowCalculator =  document.querySelector('.input #current')
start_value = '0'
$windowCalculator.innerHTML = start_value
let perem = false
let str_of_operation = ''
let last_symbol_class
let height_input = document.querySelector('.header .input').offsetHeight-20
sigFontSize = false
$numbersOftable.forEach((elem,i) => {
    new Array(elem).forEach((element)=>{
        element.addEventListener('click', (event)=>{
            currentValues(event),
            aligningSize()
        })
    })

})