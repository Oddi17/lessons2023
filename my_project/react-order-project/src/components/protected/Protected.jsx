import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Protected(props) {

    const navigate = useNavigate()
    const {Component} = props

    useEffect(()=>{
        let login = localStorage.getItem("login")
        if (!login) {
            // localStorage.setItem()
            navigate("/",{replace:true})
        }
    },[])


    return (
        <Component />

    )
}