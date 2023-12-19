
function isPalindrome (str) {
    let result = true
    for (i=0; i<str.length; i++) {
        let symbol = str[i]
        let admirroredSymbol = str[str.length - i - 1]
        if (symbol !== admirroredSymbol) {
            result = false
            return result
        }       
    } 
    return result
        
    }


console.log(isPalindrome('7556557'))
console.log(isPalindrome('7886887'))
console.log(isPalindrome('7881236887'))