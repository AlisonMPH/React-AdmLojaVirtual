import { NumberFormatter, DateFormatter } from './formatters';

const TableUsersLine = ({ item, handleDeleteUser }) => {
    return (
        <tr>
            <td>{NumberFormatter.format(item.id, 6)}</td>
            <td>{item.nome}</td>
            <td>{item.cpf}</td>
            <td>{item.data_nascimento}</td>
            <td>{item.email}</td>
            <td>
                <button className="btn btn-outline-danger btn-sm" title="Excluir" onClick={() => handleDeleteUser(item.id)}>
                    <i className="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    )
}

export default TableUsersLine;