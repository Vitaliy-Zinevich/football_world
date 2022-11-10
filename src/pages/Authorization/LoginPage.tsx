import { Login } from 'components/Autorization/Login';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="person">
      <h1>Login</h1>
      <Login />
      <p className="person__text">
        Or{' '}
        <Link className="person__text__link" to="/register">
          register
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
