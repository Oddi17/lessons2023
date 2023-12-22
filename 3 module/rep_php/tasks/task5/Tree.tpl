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
                    Символ елки:<input type="text" name="tree[symbol]" /> <br />
                    Высота елки: <input type="text" name="tree[height]" /> <br />
                    Символ игрушки:<input type="text" name="toy[symbol]" /> <br />
                    <input type="submit" value="Создать">
                    
                    
                </div>
            </form>
        </div>
        <div class="pic_tree">
                <p>
                <?php 
                if ($tree['symbol']==null || $tree['height']==null){
                    
                }else{
                    echo $tree_draw ;
                }
                 ?>
                </p>
        </div>
        <div class="window_buttons">
            
            <div class = "button">
                <div class = "toy_off"> 
                    Снять игрушку
                </div>
            </div>
        </div>
           
    </div>

<script src="js_file.js"></script>    
<script> let js_object = <?php echo json_encode("Rondo")?>; </script>   
</div>    
</body>
</html>