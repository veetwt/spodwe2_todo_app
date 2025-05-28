import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../authenticationContext/context';
import { authenticateUser } from '../../API/userService'; 
import '../../App.css';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const data = await authenticateUser({ email, password });
      const userData = {
        name: data.name,
        email: data.email,
      };
      login(data.token, userData);
      navigate('/todos');
    } catch (err) {
      setError(err.message || 'Falha ao efetuar o Login. Tente novamente.');
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      <div className="center-content">
        <p>
          <a href="/register">Registre-se</a>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
