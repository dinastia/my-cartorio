import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { withFormik } from 'formik';
import Moment from 'moment';
import axios from 'axios';

// import Debug from 'Debug';
import queryString from 'query-string';

// reactstrap components
import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Button
} from "reactstrap";

const divStyle = {
  padding: '20px'
}

const FormProfile = props => {



  const onCancelHandler = () => {
    props.history.push('/admin/alunos');
  }

  // console.log(aluno);

  if (!props.aluno) {
    props.history.push('/admin/alunos');
  }

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

  return (

    <>
      <Form onSubmit={handleSubmit} style={divStyle}>
        <Row>
          <Col md="12">
            <FormGroup>
              <Input
                name="id"
                type="hidden"
                value={values.id}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="nome"
                placeholder="Nome"
                type="text"
                value={values.nome}
                onChange={handleChange}
              />
            </FormGroup>

          </Col>
        </Row>
        <Row>
          <Col md="6">
            <FormGroup>
              <Input
                placeholder="Data Nascimento"
                name="nasc"
                value={values.nasc}
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Input
                name="cpf"
                placeholder="CPF"
                value={values.cpf}
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <FormGroup>
              <Input
                name="mae"
                placeholder="Nome da Mãe"
                value={values.mae}
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Button color="success" type="submit" disabled={isSubmitting} >Salvar</Button>

        <Button
          color="primary"
          type="button"
          size="md"
          onClick={onCancelHandler} >Voltar</Button>
        {/* <Debug /> */}
      </Form>

    </>

  );
}

const mapStateToProps = (state) => {
  return {
    aluno: state.aluno.selectedAluno
  }
}

const EnhanceFormProfile = withFormik({
  mapPropsToValues: props => ({
    id: props.aluno.map(p => p._id) || '',
    nome: props.aluno.map(p => p.nome), //props.aluno.map(p => p.nome) || '',
    nasc: props.aluno.map(p => Moment(p.nasc).local().format("DD/MM/YYYY")) || '',
    cpf: props.aluno.map(p => p.cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")) || '',
    mae: props.aluno.map(p => p.mae) || ''
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


})


export default connect(mapStateToProps)(withRouter(EnhanceFormProfile(FormProfile)));