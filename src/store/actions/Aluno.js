import Immutable from 'seamless-immutable';
import Axios from 'axios';

const LOAD_ALUNOS = "LOAD_ALUNOS"
const FETCH_ALUNOS_FAILED = "FATCH_ALUNOS_FAILED"
const SELECTED_ALUNO = "SELECTED_ALUNO"

// Craete Immutable object
const actionTypes = Immutable({
    LOAD_ALUNOS,
    SELECTED_ALUNO,
    FETCH_ALUNOS_FAILED,
  });
  
export default actionTypes;

export const setAlunos = (alunos) => {
    return {
        type: actionTypes.LOAD_ALUNOS,
        alunos: alunos
    };
}

export const setAlunosFailed = () => {
    return {
        type: actionTypes.FETCH_ALUNOS_FAILED,
        // error: error
    }
}

export const setSelectedAluno = (aluno) => {
    return {
        type: actionTypes.SELECTED_ALUNO,
        aluno: aluno
    }
}

export const loadAlunos = () => {
      return dispatch => {
          Axios.get('http://localhost:5000/teste')
          .then(response => {
              dispatch(setAlunos(response.data))
          })
          .catch(error => {
              dispatch(setAlunosFailed())
          })
      };
}