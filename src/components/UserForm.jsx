import React, { useEffect } from 'react';

import { useState } from "react";
import { addUser, updateUser } from '../services/users.service';

const genderList = ['Masculino', 'Femenino']

export const UserForm = ({ onSave, onCancel, user, editing }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAdress] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [job, setJob] = useState('');

  const [validationMessages, setValidationMessages] = useState({})

  useEffect(() => {
    if (!user) return resetFields()
    setFirstname(user.firstname)
    setLastname(user.lastname)
    setPhone(user.phone)
    setAdress(user.address)
    setBirthday(user.birthday)
    setGender(user.gender)
    setJob(user.job)
  }, [user])


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validData()) {
      await saveUser();
      resetFields();
    }
  }

  const resetFields = () => {
    setFirstname('')
    setLastname('')
    setAdress('')
    setPhone('')
    setBirthday('')
    setGender('')
    setJob('')
  }

  const saveUser = async () => {
    const userData = { firstname, lastname, phone, address, birthday, gender, job }
    editing ? await updateUser(user.id, userData) : await addUser(userData)
    if (onSave) onSave()
  }

  //VALIDATIONS
  //===================================

  const validFirstName = () => {
    if (!firstname || firstname.trim().length === 0) {
      setValidationMessages(prev => ({ ...prev, name: 'Debe ingresar un nombre' }));
      return true
    };
    setValidationMessages(prev => ({ ...prev, name: null }));
    return true;
  }
  const validLastName = () => {
    if (!lastname || lastname.trim().length === 0) {
      setValidationMessages(prev => ({ ...prev, lastname: 'Debe ingresar un apellido' }));
      return false;
    };
    setValidationMessages(prev => ({ ...prev, lastname: null }));
    return true;
  }
  const validAddress = () => {
    if (!address || address.trim().length === 0) {
      setValidationMessages(prev => ({ ...prev, address: 'Debe ingresar una dirección' }));
      return false;
    }
    setValidationMessages(prev => ({ ...prev, address: null }));
    return true;
  }
  const validBirthday = () => {
    if (!birthday || birthday.trim().length === 0) {
      setValidationMessages(prev => ({ ...prev, birthday: 'Debe ingresar una fecha' }));
      return false;
    }
    setValidationMessages(prev => ({ ...prev, birthday: null }));
    return true;
  }
  const validPhone = () => {
    if (!phone || phone.trim() === '') {
      setValidationMessages(prev => ({ ...prev, phone: 'Debe ingresar un telefono' }));
      return false;
    }
    if (!Number.isInteger(Number(phone)) || parseInt(phone) <= 0) {
      setValidationMessages(prev => ({ ...prev, phone: 'El telefono debe ser un entero positivo' }));
      return false;
    }
    setValidationMessages(prev => ({ ...prev, phone: null }));
    return true;
  }
  const validJob = () => {
    if (!job || job.trim === '') {
      setValidationMessages(prev => ({ ...prev, job: 'Ingrese un cargo' }))
      return false
    }
    setValidationMessages(prev => ({ ...prev, job: null }))
    return true
  }
  const validGender = () => {
    if (!gender || !genderList.includes(gender)) {
      setValidationMessages(prev => ({ ...prev, gender: 'Seleccione un genero valido' }))
      return false
    }
    setValidationMessages(prev => ({ ...prev, gender: null }))
    return true
  }

  const validData = () => {
    return validFirstName()
      & validLastName()
      & validPhone()
      & validAddress()
      & validBirthday()
      & validGender()
      & validJob()
  }
  //===================================

  return (
    <form action='#' method='get' onSubmit={e => handleSubmit(e)}>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Agregar Usuario</h3>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">Nombres</label>
            <input className={`form-control form-control-sm ${validationMessages.name ? 'is-invalid' : ''}`} type="text" min={0} value={firstname} onChange={e => setFirstname(e.target.value)} />
            <div className="invalid-feedback d-block">{validationMessages.name ?? ''}</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Apellidos</label>
            <input className={`form-control form-control-sm ${validationMessages.lastname ? 'is-invalid' : ''}`} type="text" min={0} value={lastname} onChange={e => setLastname(e.target.value)} />
            <div className="invalid-feedback d-block">{validationMessages.lastname ?? ''}</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Dirección</label>
            <input className={`form-control form-control-sm ${validationMessages.address ? 'is-invalid' : ''}`} type="text" min={0} value={address} onChange={e => setAdress(e.target.value)} />
            <div className="invalid-feedback d-block">{validationMessages.address ?? ''}</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Telefono</label>
            <input className={`form-control form-control-sm ${validationMessages.phone ? 'is-invalid' : ''}`} type="number" min={0} value={phone} onChange={e => setPhone(e.target.value)} />
            <div className="invalid-feedback d-block">{validationMessages.phone ?? ''}</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Genero</label>
            <select className={`form-select form-select-sm ${validationMessages.gender ? 'is-invalid' : ''}`} value={gender} onChange={e => setGender(e.target.value)}>
              <option selected hidden>-</option>
              {genderList.map(gender => <option>{gender}</option>)}
            </select>
            <div className="invalid-feedback d-block">{validationMessages.gender ?? ''}</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Cargo</label>
            <input className={`form-control form-control-sm ${validationMessages.job ? 'is-invalid' : ''}`} value={job} onChange={e => setJob(e.target.value)} />
            <div className="invalid-feedback d-block">{validationMessages.job ?? ''}</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Fecha de Nacimiento</label>
            <input className={`form-control form-control-sm ${validationMessages.birthday ? 'is-invalid' : ''}`} type="date" value={birthday} onChange={e => setBirthday(e.target.value)} />
            <div className="invalid-feedback d-block">{validationMessages.birthday ?? ''}</div>
          </div>
          <div className='d-flex justify-content-center'>
            <input type='submit' className={`btn btn-${editing ? 'warning' : 'primary'} w-50`} value={editing ? 'Actualizar' : 'Agregar'} />
            {editing && <button type='button' className='btn btn-danger w-50' onClick={() => onCancel()}>Cancelar</button>}
          </div>
        </div>
      </div>
    </form>
  )
}
