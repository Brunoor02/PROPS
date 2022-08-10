import CINZA from '../../assets/images/cinza.PNG';
import './naosei.scss';

function BrunexDaora(props) {
    return (
        <div className={props.scss2}>

            <h1>SEÇÃO {props.nSecao}</h1>
            <div className={props.scss}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex odio, varius non maximus at, consectetur non purus. Ut nec ullamcorper nisl, non porttitor dui.</p>
                <img src={CINZA} />
            </div>
        </div>
    );
}

export default BrunexDaora;