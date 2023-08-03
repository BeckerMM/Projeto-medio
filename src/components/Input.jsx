import { useState } from "react"

export default function Input(props){
    const [valor, setValor] = useState("");


    return(
        <div className="">
            <input type={props.type} placeholder={props.placeholder} value={valor} onChange={(e) => {setValor(e.target.value)}} className="" />
        </div>
    )
}