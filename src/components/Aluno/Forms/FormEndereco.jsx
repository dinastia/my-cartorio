import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { withFormik } from 'formik';
import axios from 'axios';
import _ from 'lodash';

import {
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
    Button
} from "reactstrap";

import Enderecos from '../Enderecos';

const divStyle = {
    padding: '20px'
}

const EnhanceForm = withFormik({
    mapPropsToValues: props => ({
        // id: props.aluno.map(p => p._id) || '',
        // nome: props.aluno.map(p => p.nome), //props.aluno.map(p => p.nome) || '',
        // nasc: props.aluno.map(p => Moment(p.nasc).local().format("DD/MM/YYYY")) || '',
        // cpf: props.aluno.map(p => p.cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")) || '',
        // mae: props.aluno.map(p => p.mae) || ''
    }),

    handleSubmit: async (values, { setSubmitting }) => {
        // return new Promise((resolve, reject) => {
        // setTimeout(() => {
        try {
            // console.log(JSON.stringify(values.nome, null, 2));
            // alert(JSON.stringify(values).replace(/[\[\]']+/g, ''));
            const res = await axios.put('http://localhost:5000/teste/' + values.id,
                JSON.stringify(values).replace(/[\[\]']+/g, ''),
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            setSubmitting(false);
            // console.log(res);
        } catch (e) {
            console.log('Erro ' + e);
        }

    },

});

const FormEndereco = props => {
    
    const {
        values,
        touched,
        errors,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
      } = props;
    
    // const entries = Object.entries(props.aluno[0].endereco);
    // let endereco = [];
    // for (const [key, value] in Object.entries(props.aluno[0].endereco)) {
    //     if (entries.hasOwnProperty(key)) {
    //         // endereco[key] = Object.entries(entries[key][1])
    //         console.log(key + " -> " + value);
            
    //     }
    // }

    let obj = props.aluno[0].endereco;

    let enderecos = []

    // _.forIn(obj, (value, key) => {
        
    //     enderecos.push(

    //     )
    // })

    return (

        <>
            
            <Form onSubmit={handleSubmit} style={divStyle}>
                { _.forIn(obj, (value, key) => {
                    return <Enderecos endereco={value} /> 
                    }
                )}
            
            
            
            
            </Form>
        </>
    )


}

const mapStateToProps = (state) => {
    return {
        aluno: state.aluno.selectedAluno
    }
}

export default connect(mapStateToProps)(withRouter(EnhanceForm(FormEndereco)));