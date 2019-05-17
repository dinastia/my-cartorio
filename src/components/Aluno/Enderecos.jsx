import React from 'react'

import {
    Card,
    CardBody,
} from "reactstrap";

const Enderecos = props => {   
    return (
        <>
            <Card className="shadow" key={props.endereco.id}>
                <CardBody>
                    <p>{props.endereco.principal}</p>
                    <p>{props.endereco.nome}</p>
                    <p>{props.endereco.logradouro}</p>
                    <p>{props.endereco.cep - props.endereco.cidade - props.endereco.estado}</p>
                </CardBody>

            </Card>
        </>
    ) 
}

export default Enderecos;