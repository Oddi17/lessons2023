const initTooltip = () => {
    const toolMouseOverHandler = (e) => {
        const $eleme = e.target
        // $toolTipUnder.target.classList.contains('prev')
        let $toolTipUnder = document.createElement('div')
        $toolTipUnder.className = 'text'
        let tooltipTex = $eleme.innerText
        $toolTipUnder.innerHTML = <span>Нажмите на кнопку для перехода в + tooltipTex </span>




    }

    const $plashtooltip = document.querySelectorAll('.tooltip')
    $plashtooltip.array.forEach((element,i) => {
        element.addEventListener('mouserover', toolMouseOverHandler)
    });
    
}

initTooltip()

//задержка появления плашки