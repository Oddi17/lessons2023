function addAnswer(){
  /////////////////////////
    let $buttons = document.querySelectorAll('#button-answer')
    let arrFromControls = Array.from($buttons)
    console.log(arrFromControls)

    let handleClick = (e) => {
      // console.log('done')
      console.log('zashel')
      console.log(e)
      //let form = document.getElementById('form-answ') 
      //let data = new FormData(form); 
      
      
    }
    arrFromControls.forEach((element)=>{
      //console.log(element)
      element.addEventListener('click', handleClick) 
    })
   ////////////////////////////

    let form = document.getElementById('form-answ') 
    let data = new FormData(form); 
    //console.log(data)
      axios({
        method: 'post',
        url: 'give',
        responseType: 'json',
        data: data
    
      })
        .then(function (response){
            // console.log(response.data)
            if (response.data['code'] == 200){
                let $answers = document.querySelector('answer')
                console.log()
                

            }else{
              alert(response.data['message'])
            }
        })
  }
  
  
  