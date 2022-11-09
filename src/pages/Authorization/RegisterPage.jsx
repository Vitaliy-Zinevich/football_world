import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className="person">
      <h1>Register</h1>

      <p>
        Already have an account? <Link to="/login">Sing in</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
