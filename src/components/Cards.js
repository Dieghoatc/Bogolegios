import React from "react";

const Card = (props) => {
    return (
        <div className="card">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.character.nombreestablecimiento}</h5>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-6">
                            <ul>
                                <li>Direccion: {props.character.direccion}</li>
                                <li>Telefono: {props.character.telefono}</li>
                                <li>Tipo: {props.character.tipo_establecimiento}</li>
                                <li>Jornada: {props.character.jornada}</li>
                                <li>Niveles: {props.character.niveles}</li>
                                <li>Especialidad: {props.character.especialidad}</li>
                                <li>Modelo Educativo: {props.character.modelos_educativos}</li>
                                <li>Discapacidades: {props.character.discapacidades}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                    the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
};
export default Card
