import TableUsersLine from "./TableUsersLine"

const TableUsers = ({ items, handleDeleteUser }) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Data de Nascimento</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {items.map(p => <TableUsersLine item={p} key={p.id} handleDeleteUser={handleDeleteUser} />)}
            </tbody>
        </table>
    )
}

export default TableUsers;