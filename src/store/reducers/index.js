import { combineReducers } from 'redux';
import alunoReducer from './alunoReducer';

export default () => {
  const rootReducer = combineReducers({
    aluno: alunoReducer,
  });

  return rootReducer;
};