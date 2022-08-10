import './index.scss'
import { useState } from 'react'

export default function Masqueico(props){
        const [N1,setN1] = useState (0)
        const [N2,setN2] = useState (0)
        const [Resul, setResul] = useState (0)

        function somar (){
            let x = N1 + N2;
            setResul(x);
        }

    return (
        <div className=''>
            <h1>CALCULADORA</h1>
            <div><input type = "Number" value={N1} onChange={e => setN1(Number(e.target.value))}/>Numero 1</div>
            <div><input type = "Number" value={N2} onChange={e => setN2(Number(e.target.value))}/>Numero 2 </div>
            <div> {Resul} </div>
            <button onClick={somar}>Resultado</button>
            
        </div>
    )
}
