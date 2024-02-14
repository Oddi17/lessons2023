<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Christmas</title>
    <link rel='stylesheet' href='style.css' />
</head>
<body>
<div class="container">
    <div class="diff_buttons">
        <div class="create_forms"> 
            <form action="" method="post">
                <div class="create">
                    Символ елки:<input type="text" id = "tree" name="tree[symbol]" /> <br />
                    Высота елки: <input type="text" id="height" name="tree[height]" /> <br />
                    Символ игрушки:<input type="text" id="toy" name="toy[symbol]" /> <br />
                    Количество игрушек:<input type="text" id="quantity" name="toy[quantity]" /> <br />
                    <input type="submit" value="Создать">
                </div>
            </form>
        </div>
        <div class="pic_tree">
                <pre id="pic">
                </pre>
        </div>
        <div class="window_buttons">
            <div class = "button">
                <div class = "toy_off"> 
                    Снять игрушку
                </div>
            </div>
            <div class = "button">
                <div class = "toy_on"> 
                    Повесить игрушку
                </div>
            </div>
            <div class = "button">
                <div class = "garlandOnOff"> 
                    Вкл/Выкл гирлянду
                </div>
            </div>
        </div>  
    </div>
<script> let modelTree = "<?php echo $tree_draw; ?>"; </script>
<script src="js_file.js"></script>
<script> 
let current_treeSymbol = "<?php echo $tree_symbol; ?>";
let current_toySymbol = "<?php echo $toySymbol; ?>";
let maxNum = JSON.parse('<?php echo $positionsElem; ?>');
let minNum = "<?php echo $minNum; ?>";
 </script>   
</div>    
</body>
</html>