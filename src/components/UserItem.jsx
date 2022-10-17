import React from 'react'
import { deleteUser } from '../services/users.service';

export const UserItem = ({ user, onDelete, onEdit }) => {

    const removeUser = async () => {
        const confirm = window.confirm('¿Esta seguro que desea eliminar este usuario?');
        if (confirm) {
            await deleteUser(user.id);
            if (onDelete) onDelete()
        }
    };

    return (
        <div className='p-2 bg-primary rounded-3 my-2 text-white d-flex justify-content-between'>
            <div className='my-auto me-2'><img className='rounded-circle' height={50} src={user.photo} alt="user avatar" /></div>
            <div className='row row-cols-2 row-cols-lg-3 g-2'>
                <div className='col'><b>Nombres:</b> {user.firstname ?? 'N/A'}</div>
                <div className='col'><b>Apellidos:</b> {user.lastname ?? 'N/A'}</div>
                <div className='col'><b>Telefono:</b> {user.phone ?? 'N/A'}</div>
                <div className='col'><b>Dirección:</b> {user.address ?? 'N/A'}</div>
                <div className='col'><b>Nacimiento:</b> {user.birthday ?? 'N/A'}</div>
                <div className='col'><b>Genero:</b> {user.gender ?? 'N/A'}</div>
                <div className='col'><b>Cargo:</b> {user.job ?? 'N/A'}</div>
            </div>
            <div className='my-auto ms-auto'>
                <button className='btn btn-warning mb-1' onClick={() => onEdit(user.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg>
                </button>
                <button className='btn btn-danger' onClick={() => removeUser()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
