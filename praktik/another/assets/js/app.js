document.addEventListener("DOMContentLoaded", () => {
    //console.log("Hello World!");
    let elm = document.getElementById("counter");
    
    //console.log(elm);
  //elm.textContent = 25;


  axios({
    method: 'get',
    url: 'counter',
    responseType: 'json'
  })
    .then(function (response){
        elm.textContent =response.data[0].cnt;
    })


});