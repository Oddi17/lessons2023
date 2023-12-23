
const $input_height = document.getElementById('height')
const $input_quantity = document.getElementById('quantity')
// const $input_symbolTree = document.getElementById('tree')
// const $input_symbolToy = document.getElementById('toy')

$input_height.oninput = function () {
  $current_height = $input_height.value
  console.log($input_height.value);
}
// $input_symbolTree.oninput = function () {
//   $current_treeSymbol = $input_symbolTree.value
//   console.log($input_symbolTree.value);
// }
// $input_symbolToy.oninput = function () {
//   $current_toySymbol = $input_symbolToy.value
//   console.log($input_symbolToy.value);
// }
$input_quantity.oninput = function () {
  $current_quantity = $input_quantity.value
  console.log($input_quantity.value);
  if ($input_height && $input_quantity){
    quantity = 0
    if (($input_height.value>0 && $input_quantity.value>0)){
        quantity = ((parseInt($current_height)+1)*parseInt($current_height))/2
        if ($current_quantity>quantity) {
            alert("Количество игрушек превышает количество элементов елочки!")
        }
    }
}

}

let save_pic = document.getElementById('pic').textContent
String.prototype.replaceAt = function(index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

let delToy = (e) => {
  picTree = document.getElementById('pic')
  picTreeText = document.getElementById('pic').textContent
  console.log(picTreeText)
  
  indexPic = picTreeText.indexOf(current_toySymbol)
  another = picTreeText.replaceAt(indexPic, current_treeSymbol)
  picTree.textContent = another
  
  console.log(another)
}

$button_takeoff = document.querySelector('.button .toy_off')
$button_takeoff.addEventListener('click', (event) => {
  console.log('takeoff')
  delToy();
})

// $button_takeon = document.querySelector('.button .toy_on')
// $button.addEventListener('click', (event) => {
//   console.log('takeon')
// })
// //change
// $button_garlandoff = document.querySelector('.button .toy_off')
// $button.addEventListener('click', (event) => {
//   console.log('takeoff')
// })
// $button_garlandon = document.querySelector('.button .toy_on')
// $button.addEventListener('click', (event) => {
//   console.log('takeon')
// })


