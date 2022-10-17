import React from 'react'
import { deleteUser } from '../services/users.service';

export const UserItem = ({ user, onDelete }) => {

    const removeUser = async () => {
        const confirm = window.confirm('¿Esta seguro que desea eliminar este usuario?');
        if (confirm) {
            await deleteUser(user.id);
            if (onDelete) onDelete()
        }
    };

    return (
        <div className='p-2 bg-primary rounded-3 my-2 text-white d-flex justify-content-between'>
            <div className='row row-cols-2 row-cols-lg-3 g-2'>
                <div className='col'><b>Nombres:</b> {user.firstname ?? 'N/A'}</div>
                <div className='col'><b>Apellidos:</b> {user.lastname ?? 'N/A'}</div>
                <div className='col'><b>Telefono:</b> {user.phone ?? 'N/A'}</div>
                <div className='col'><b>Dirección:</b> {user.address ?? 'N/A'}</div>
                <div className='col'><b>Nacimiento:</b> {user.birthday ?? 'N/A'}</div>
                <div className='col'><b>Genero:</b> {user.gender ?? 'N/A'}</div>
                <div className='col'><b>Cargo:</b> {user.job ?? 'N/A'}</div>
            </div>
            <div className='my-auto ms-auto'><button className='btn btn-danger' onClick={() => removeUser()}>X</button></div>
        </div>
    )
}
