
export default function Cartaolegal(props){

    function idade (){
        if (props.idade !== undefined)
            alert('minha idade é' + props.idade);
        else 
        alert ("sou muito velho");
    }

    return(
        <div>
            <h1>Esse nome é boiola: {props.nome}</h1> 
            <button onClick={idade}>IDADE</button>
        </div>

    )
}

