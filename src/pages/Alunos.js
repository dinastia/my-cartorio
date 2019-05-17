import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loadAlunos, setSelectedAluno } from 'store/actions/Aluno';

import axios from 'axios';

import {
  Card,
  CardHeader,
  Container,
  Row,
} from 'reactstrap';

import Header from "components/Headers/NoHeader.jsx";
import Tabela from 'components/Aluno/Tabela/TabelaAluno.jsx';

const Alunos = (props) => {

  // const [aluno, setAluno] = useState(0);

  useEffect(() => {
    // if(!props.alunos) {
    props.dispatch(loadAlunos());
    // }
  }, []);

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Tabela de Alunos</h3>
              </CardHeader>
              <Tabela alunos={props.alunos} />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}

const mapStateToProps = state => {
  return {
    alunos: state.aluno.listAluno,
    aluno: state.aluno.selectedAluno
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     onLoadAlunos: () => dispatch(actions.loadAlunos())
//   }
// }

export default connect(mapStateToProps)(Alunos)
