import { useEffect, useState } from 'react';
import './App.css';
import { UserForm } from './components/UserForm';
import { UsersList } from './components/UsersList';
import { getUsers } from './services/users.service';

function App() {

  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false)

  const loadUsers = async () => {
    setLoadingUsers(true);
    const users = await getUsers();
    setLoadingUsers(false);
    setUsers(users);
  }

  useEffect(() => { loadUsers() }, [])

  return (
    <div className="container">
      <div className='row'>
        <div className='col-12 text-center my-3'><h1>GESTION DE USUARIOS</h1></div>
        <div className='col-12 col-lg-3'>
          <UserForm onSave={() => loadUsers()} />
        </div>
        <div className='col-12 col-lg-9'>
          <UsersList users={users} loading={loadingUsers} onUserDeleted={() => loadUsers()} onRefresh={() => loadUsers()}/>
        </div>
      </div>
    </div>
  );
}

export default App;
