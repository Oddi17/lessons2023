let board=[ ["black queen",0,0,0,0,0,"black bishop",0],["white pawn",0," white pawn",0,"white king",0,0,0],[0,0,0,"white pawn",0,0,0,0],[0,0,0,0,0,0,"white pawn",0],[0,"black pawn",0,"white knight","white pawn",0,0,"white pawn"],["black knight",0,0,0,0,'black knight',0,0],["black pawn",0,0,"black pawn","white bishop","black pawn","white knight","black pawn"],["black rook",0,"black bishop","black king",0,0,0,"black rook"]]
// console.log(board[0].length)
// console.log(board[1].length)
// console.log(board[2].length)
// console.log(board[3].length)
// console.log(board[4].length)
// console.log(board[5].length)
// console.log(board[6].length)
// console.log(board[7].length)


// console.log(board[4][3])

// alert(board[4][3])

// let figure = "black bishop"


// for (let item of board) 
let letters = ["A","B","C","D","E","F","G","H"]

for (let i=0;i< board.length; i++) {

    for (let k=0;k<board[i].length;k++){
        let cell = board[i][k]
        // console.log(cell)
        if(cell !== 0)  console.log(cell + " на позиции "+ letters[k] + (i+1) )
       
    }

}

