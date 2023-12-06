//управлять с клавиатры [1,2,3,4,5,6,7,8,9,0,-,+,/,AC=Delete]
//также управлять по кликам на клавиши 

const aligningSize = () => {
  const $headerInput = document.querySelector('.header .input')
  if (!sigFontSize) {
    if ($headerInput.offsetHeight - 20 > 2 * height_input) {
      // console.log('PREVISHEN!!!')
      $headerInput.style.fontSize = '14px'
    }
  } else {
    $headerInput.style.fontSize = '28px'
    sigFontSize = false
  }
}

const Checking = (symbol,symbolclass,last_symbol_class) => {
  let desicion = false
  if (str_of_operation.length === 0 && symbolclass === 'symbol') {
    $windowCalculator.innerHTML = symbol
    return desicion = true
  }
  if ( perem && ((symbolclass === 'number' && symbol !== 'AC') || symbol === '=')) {
    return desicion = true
    }else perem = false
  if (symbolclass === 'symbol') {
    if (last_symbol_class && symbolclass === last_symbol_class) desicion = true 
  } 
  return desicion
}

const forKeyboard = (event) => {
  let symbol
  let symbolclass
  const key = event.key
  const code = event.code
  const libKeys= ['+','=','-','/','Delete','.']
  if (code.slice(0,code.length-1) === 'Digit') {
    symbol = key
    symbolclass = 'number'
  } else {
    libKeys.forEach(element => {
      if (element === key) {
        symbol = key
        symbolclass = 'symbol'
      }
    });
  }
  return [symbol, symbolclass]
}

const forClick = (event) => {
  symbolclass = event.target.parentElement.classList[0]
  symbol = event.target.firstChild.data
  return [symbol, symbolclass]
}

const ShowIn = (symbol,symbolclass) => {
  let sigOfcheck
  sigOfcheck = Checking(symbol,symbolclass,last_symbol_class)
  if (sigOfcheck) return
  if (symbol === '÷' || symbol == '/') {
    str_of_operation += '/'
  } else if (symbol === 'AC' || symbol == 'Delete') {
    str_of_operation = ''
    $windowCalculator.innerHTML = start_value
    sigFontSize = true
    return
  } else if (symbol === '=') {
    result = math.evaluate(str_of_operation)
    $windowCalculator.innerHTML += '=' + result
    str_of_operation = result
    perem = true
    return
  } else str_of_operation += symbol

  $windowCalculator.innerHTML = str_of_operation
  last_symbol_class = symbolclass
}


const currentValues = (event) => {
  let symbol 
  let symbolclass
  let elementsFrom

  if (!event.key) {
    elementsFrom = forClick(event)
    symbolclass = event.target.parentElement.classList[0]
    symbol = event.target.firstChild.data
  } else elementsFrom = forKeyboard(event)
  
  symbol = elementsFrom[0]
  symbolclass = elementsFrom[1]
  if (!symbol) return

  ShowIn(symbol,symbolclass)

}

const $numbersOftable = document.querySelectorAll('.row span')
$windowCalculator = document.querySelector('.input #current')
start_value = '0'
$windowCalculator.innerHTML = start_value
let perem = false
let str_of_operation = ''
let last_symbol_class
let height_input = document.querySelector('.header .input').offsetHeight - 20
sigFontSize = false
$numbersOftable.forEach((elem, i) => {
  new Array(elem).forEach((element) => {
    element.addEventListener('click', (event) => {
      currentValues(event), aligningSize()
    })
  })
})
document.addEventListener('keydown', (event) => {
    currentValues(event), aligningSize()
});