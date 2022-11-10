import { Form } from './Form';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const { push } = useNavigate;

  const handleLogin = (email, password) => {
    const auth = getAuth();
    console.log(auth);
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.id,
            token: user.accessToken,
          }),
        );
        push('/');
      })
      .catch(console.error);
  };

  return <Form title="sing in" handleClick={handleLogin} />;
};

export { Login };