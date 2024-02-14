function addQuestion(){
  //console.log('function addQuestion')
  let form = document.getElementById('form')  
  console.log(form)
  let data = new FormData(form); 
  //console.log(data)
  const qElem = document.getElementById('q') 
  const questionInput = document.getElementById('question')  
   
    axios({
      method: 'post',
      url: 'add',
      responseType: 'json',
      data: data  
  
    })
      .then(function (response){
          //elm.textContent =response.data[0].cnt;
          
          //console.log('question added')
          if (response.data['code'] == 200){
            qElem.setAttribute('style','display:block')
            questionInput.value = ''
          }else{
            alert(response.data['message'])
          }
      })
}


