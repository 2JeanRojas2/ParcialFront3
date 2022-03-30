import React from "react";

class Recordatorio extends React.Component {
    render() {
        return (
            <div className="recordatorio">
                <h3>Seleccion anterior: {this.props.opcionAnterior}</h3>
                <ul>
                    {this.props.historial.map((opcion, index) => (
                        <li key={index}>{opcion}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Recordatorio;