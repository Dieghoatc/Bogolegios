import React from 'react'

import Card from "./Cards"
import './styled/School.css'

class School extends React.Component {
    state = {
        data: [],//Se inicializa en vacio.
        isFetch:true
    };

    //Para iniciar la llamada a la API => Proceso ASincrono (no sabemos cuando empieza pero en algun momento tiene que terminar)
    componentDidMount(){
        this.fetcCharacteres()
    }
    fetcCharacteres = async () => {   ///Peticion GET a un navegador
        const response = await fetch('https://www.datos.gov.co/resource/vwik-av9p');
        const data = await response.json();
        this.setState({
            data: data,
            isFetch: false
        });
    };
    render(){
        if (this.state.isFetch){
            return 'Loading.......'
        }
        return (
            <div className="container">
                <div className="app">
                    <ul className="row">
                        {this.state.data.map(character => (
                            <li className="col-12 col-md-6 mb-2" >
                                <Card character={character}></Card>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
export default School
