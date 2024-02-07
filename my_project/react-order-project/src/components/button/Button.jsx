
export default function Button ({children,handleClick,name}){
    let nameBut = name ?  'mybutton' + ' ' + name : 'mybutton'
    return (
    <div className={nameBut} onClick={handleClick}>
        {children} 
        </div>
    )
}