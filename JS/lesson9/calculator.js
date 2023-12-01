const evaluateValue = () =>{
    result = math.evaluate(str_of_operation)
    console.log(result,typeof(result))
    $windowCalculator.innerHTML += '='+result
    //$windowCalculatorResult = document.querySelector('.input #result')
    //$windowCalculatorResult.innerHTML = '=' + ' ' + result
    
}


const aligningSize = () => {
    
}

const currentValues = (event) => {
    
    symbolclass = event.target.parentElement.classList[0]
    console.log("last:",symbolclass)
    symbol = event.target.firstChild.data
    console.log("last:",last_symbol_class)
    console.log("input_symbol:",symbolclass)


    if ((perem) && (((symbolclass === 'number') && (symbol !=='AC')) || (symbol === '='))){
        return
    }else{
        perem = false
    }

    if (str_of_operation.length === 0 && symbolclass === 'symbol') {
        $windowCalculator.innerHTML = symbol
        return
    }
    
    if (symbolclass === 'symbol'){
        if ((last_symbol_class) && (symbolclass === last_symbol_class )) {
            // console.log('two symbols podryad')
            // console.log(str_of_operation)
            return
        }
    }

    if (symbol === '÷') {
        str_of_operation += '/'
    }else if (symbol === 'AC') {
        str_of_operation = ''
        $windowCalculator.innerHTML = start_value
        return
    }else if (symbol=== '='){
        //evaluateValue()
        result = math.evaluate(str_of_operation)
        $windowCalculator.innerHTML += '='+result
        str_of_operation = result
        perem = true
        return
    }
    else{
        str_of_operation += symbol
    }   
    $windowCalculator.innerHTML = str_of_operation
    last_symbol_class = symbolclass
    
}

const currentValue = () => {

}

const $numbersOftable = document.querySelectorAll('.row span')
$windowCalculator =  document.querySelector('.input #current')
start_value = '0'
$windowCalculator.innerHTML = start_value
let perem = false
let str_of_operation = ''
let last_symbol_class
$numbersOftable.forEach((elem,i) => {
    new Array(elem).forEach((element)=>{
        element.addEventListener('click', (event)=>{
            currentValues(event)

        })
    })

})