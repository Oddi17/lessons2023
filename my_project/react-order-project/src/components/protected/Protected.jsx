import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Protected(props) {

    const navigate = useNavigate()
    const {Component} = props

    useEffect(()=>{
        let auth = localStorage.getItem("auth")
        if (!auth) {
            navigate("/",{replace:true})
        }
    },[])

    return (
        <Component />
    )
}