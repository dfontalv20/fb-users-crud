import { createContext } from 'react';
import './App.css';
import { UserForm } from './components/UserForm';

export const UsersContext = createContext();

function App() {
  return (
    <div className="container">
      <div className='row'>
        <div className='col-12 text-center my-3'><h1>GESTION DE USUARIOS</h1></div>
        <div className='col-12 col-lg-3'>
          <UserForm />
        </div>
      </div>
    </div>
  );
}

export default App;
