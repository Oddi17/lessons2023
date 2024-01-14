
export default function Button ({children,handleClick}){
    return (
    <div className='mybutton' onClick={handleClick}>
        {children} 
        </div>
    )
}