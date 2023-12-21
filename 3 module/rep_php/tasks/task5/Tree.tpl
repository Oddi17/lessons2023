<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Christmas</title>
</head>
<body>
    <div class="pic_tree">
        <p>
        <?php 

        $FirstTree = new ChristmasTree('#',5);
        $FirstTree->DrawTree(true); 
        $FirstTree->ShowParams();?>
        <br>
        <?php
        $Ball = new Toy();
        $Ball->setSymbol('*');
        $FirstTree->AddDelToy('add',$Ball);
        $FirstTree->DrawTree(true); 
        $FirstTree->ShowParams();
        
        ?>
        </p>
    </div>
    <div class="diff_buttons">
        <form action="./ClassChristmasTree.php" method="POST"></form>
            <div class="garland-input">
                <input name="garland" id="garland" type="hidden" value="1"> 
                <button type="submit" value="true">Вкл/Выкл гирлянду</button>
            </div>
        </form>
        <form action="./ClassChristmasTree.php" method="POST"></form>
            <div class="toy-input">
                <input name="toy" id="toy" type="button" value="Повесить игрушку" >
            </div>
        </form>    
        <!-- <div class="email-input">
            <label for="email">Email address</label>
            <input name="email" id="email" type="text">
        </div>
        <div class="email-input">
            <label for="email">Email address</label>
            <input name="email" id="email" type="text">
        </div> -->
    </div>
    
</body>
</html>