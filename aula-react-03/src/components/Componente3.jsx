import { useState } from "react"
import { Button } from "../styled"

function Componente3(){
    const [tarefa, setTarefa] = useState("")
    const [todas, setTodas] = useState([])
    const anotarTarefa = (e) =>{
        setTarefa(e.target.value)
    }

    const inserirTarefa = ()=>{
        setTodas([...todas, tarefa])
        setTarefa("")
    }
    return(
        <div>
            <textarea onChange={anotarTarefa} value={tarefa}></textarea>
            <br />
            <Button $isOn={tarefa} onClick={inserirTarefa}>Anotar Tarefa</Button>
            {todas.map((tar, i)=> <li key={i}>{tar}</li>)}
        </div>
        
    )
}
export default Componente3