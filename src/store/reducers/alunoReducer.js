import Immutable from 'seamless-immutable';
import actionTypes from '../actions/Aluno';
import {updateObject} from 'shared/utility';

export const initialState = Immutable({
    loading: false,
    listAlunos: [],
    selectedAluno: null,
    error: false,
  });

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.LOAD_ALUNOS:
        return state.merge({
          listAlunos: action.alunos,
          loading: true
        });

      case actionTypes.FATCH_ALUNOS_FAILED:
        return state.merge({
          error: true,
        });
        
      case actionTypes.SELECTED_ALUNO:
        return state.merge({
          selectedAluno: action.aluno
        })
        // return updateObject(state, {selectAluno: action.aluno})
  
      default:
        return state;
    }
  };
  
  export default reducer;