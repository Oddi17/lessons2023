function getUrl(url){
    let domain = url.substring(url.indexOf("//")+2,url.indexOf("/",url.indexOf(("//"))+2))
    return domain


}


let a = getUrl('https://github.com/Oddi17/lessons2023/blob/master/lesson10/css/mobile.css')
console.log(a)