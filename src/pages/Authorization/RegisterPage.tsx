import { SignUp } from 'components/Autorization/SignUp';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className="person">
      <h1>Register</h1>
      <SignUp />
      <p className="person__text">
        Already have an account?{' '}
        <Link className="person__text__link" to="/login">
          Sing in
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
