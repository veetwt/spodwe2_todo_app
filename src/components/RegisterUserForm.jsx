import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../API/userService'; 
import '../../App.css';

const RegisterUserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await registerUser({ name, email, password });
      navigate('/login');
    } catch (err) {
      setError(err.message||'Falha ao cadastrar. psnte novamente.');
    }
  };

  return (
    <div className="container">
      <h1>Register</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
      <div className="center-content">
        <p>
         Já tenho conta <a href="/login">Área de login</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterUserForm;
