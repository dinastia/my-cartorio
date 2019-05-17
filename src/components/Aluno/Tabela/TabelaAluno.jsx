import React from 'react';
import ReactTable from 'react-table';
import Moment from 'moment';
import { connect } from 'react-redux';
import matchSorter from 'match-sorter'
import { Redirect, withRouter } from 'react-router-dom';
import { setSelectedAluno } from 'store/actions/Aluno';

import 'react-table/react-table.css';
import {
    Button
} from 'reactstrap'

const TabelaAluno = props => {
    
    const onHandlerEdit = (id) => {
        const aluno = props.alunos.filter(res => res._id === id);
        props.dispatch(setSelectedAluno(aluno));
        props.history.push('/admin/alunos/profile');
        // return  <Redirect to='/admin/alunos/profile' />
        // console.log(aluno);
      }

    const columns = [{
        id: 'nome',
        Header: 'Nome',
        accessor: d => d.nome.toUpperCase(),
        // filterMethod: (filter, rows) =>
        //     matchSorter(rows, filter.value, { keys: ["nome"] }),
        // filterAll: true
        // Cell: row => (
        //     // <span><a href="#" onClick={() => props.MyFunctionCallback('abc', row.value)}>{row.value}</a></span>  
        // ),
        filterMethod: (filter, row) =>
            row[filter.id].startsWith(filter.value.toUpperCase()) ||
            row[filter.id].endsWith(filter.value.toUpperCase())
    }, {
        id: 'nasc',
        Header: 'Nasc',
        accessor: d => {
            return Moment(d.nasc)
            .local()
            .format("DD/MM/YYYY")
        }
    }, {
        id: 'cpf',
        Header: 'CPF',
        accessor: d => (
            d.cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
        )
            
    }, {
        // id: 'id',
        Header: 'Action',
        accessor: '_id',
        Cell: row => (
                <div>
                    <Button color="warning" size="sm" type="button" onClick={() => onHandlerEdit(row.value)}>
                    <span className="btn-inner--icon"><i className="fas fa-pencil-alt" />
                    </span></Button>
                    <Button color="danger" size="sm" type="button" onClick={() => alert(row.value)}>
                    <span className="btn-inner--icon"><i className="fas fa-trash-alt" />
                    </span></Button>
                    <Button color="info" size="sm" type="button" onClick={() => alert(row.value)}>
                    <span className="btn-inner--icon"><i className="fas fa-barcode" />
                    </span></Button>
                
                </div>
            )
    }];

    return (
        <ReactTable
            data={props.alunos}
            columns={columns}
            filterable
            defaultFilterMethod={(filter, row) =>
                String(row[filter.id]) === filter.value}
            defaultPageSize={10}
            className="-striped -highlight"
            sortable={false}
            resizable={false}
            style={{
                textAlign: "center"
            }}
            
        />
    );
}

const mapStateToProps = state => {
    return {
      aluno: state.aluno.selectedAluno,
      alunos: state.aluno.listAlunos
    }
  }

export default connect(mapStateToProps)(withRouter(TabelaAluno));