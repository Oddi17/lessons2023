const $input_height = document.getElementById('height')
const $input_quantity = document.getElementById('quantity')
const $treeBlock = document.getElementById('pic')

function showModelTree(block, modelTree) {
  block.innerHTML = modelTree
}
showModelTree($treeBlock, modelTree)

$input_height.oninput = function () {
  $current_height = $input_height.value
}

$input_quantity.oninput = function () {
  $current_quantity = $input_quantity.value
  if ($input_height && $input_quantity) {
    quantity = 0
    if ($input_height.value > 0 && $input_quantity.value > 0) {
      quantity =
        ((parseInt($current_height) + 1) * parseInt($current_height)) / 2
      if ($current_quantity > quantity) {
        alert('Количество игрушек превышает количество элементов елочки!')
      }
    }
  }
}

String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substr(0, index) +
    replacement +
    this.substr(index + replacement.length)
  )
}

let delToy = (e) => {
  indexPic = modelTree.indexOf(current_toySymbol)
  if (indexPic > -1) {
    modelTree = modelTree.replaceAt(indexPic, current_treeSymbol)
    showModelTree($treeBlock, modelTree)
  }
}

let addToy = (e) => {
  indexPic = modelTree.indexOf(current_treeSymbol)
  if (indexPic > -1) {
    modelTree = modelTree.replaceAt(indexPic, current_toySymbol)
    showModelTree($treeBlock, modelTree)
  }
}

sig = true
let garlandOn = (e) => {
  anotherTree = modelTree
  if (sig) {
    for (i = 0; i < 5; i++) {
      index = Math.floor(Math.random() * maxNum.length)
      index_another = maxNum[index]
      anotherTree = anotherTree.replaceAt(index_another, ' ')
      sig = !sig
      showModelTree($treeBlock, anotherTree)
    }
  } else {
    showModelTree($treeBlock, modelTree)
    sig = !sig
  }
}

let garlandOff = (e) => {
  showModelTree($treeBlock, modelTree)
}

$button_takeoff = document.querySelector('.button .toy_off')
$button_takeoff.addEventListener('click', (event) => {
  console.log('toy_off')
  delToy()
})

$button_takeon = document.querySelector('.button .toy_on')
$button_takeon.addEventListener('click', (event) => {
  console.log('toy_on')
  addToy()
})

let timer
$button_garlanOn = document.querySelector('.button .garlandOnOff')
$button_garlanOn.addEventListener('click', (event) => {
  console.log('garlandOn/Off')
  if (timer) {
    timer = clearInterval(timer)
    garlandOff()
  } else timer = setInterval(garlandOn, 1000)
})
