import React from 'react';

import {
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    Progress,
    Table,
    UncontrolledDropdown,
    UncontrolledTooltip
} from 'reactstrap';
import Aux from 'hoc/Aux/Aux';

const Tabela = props => {

    const rowTableOptions = (
        <Aux>
            <td>
                <div className="d-flex align-items-center">
                    <span className="mr-2">60%</span>
                    <div>
                        <Progress
                            max="100"
                            value="60"
                            barClassName="bg-danger"
                        />
                    </div>
                </div>
            </td>
            <td className="text-right">
                <UncontrolledDropdown>
                    <DropdownToggle
                        className="btn-icon-only text-light"
                        href="#pablo"
                        role="button"
                        size="sm"
                        color=""
                        onClick={e => e.preventDefault()}
                    >
                        <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                        <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                            Action
                            </DropdownItem>
                        <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                            Another action
                            </DropdownItem>
                        <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                            Something else here
                            </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </td>
        </Aux>
    );

    let rowTableAluno = Object.values(props.alunos).map((aluno, key) => {
        return (
            <tr key={key}>
                <td>{aluno.nome}</td>
                <td>{aluno.nasc}</td>
                <td>{aluno.cpf}</td>
                <td>{key}</td>
                {rowTableOptions}

            </tr>

        )
    })

    


    return (
        <Table className="align-items-center table-flush" responsive>
            <thead className="thead-light">
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">nasc</th>
                    <th scope="col">CPF</th>
                    <th scope="col">Key</th>
                    <th scope="col">Progressão</th>
                    <th scope="col" />
                </tr>
            </thead>
            <tbody>
                {rowTableAluno}
            </tbody>
        </Table>
    );
}


export default Tabela;