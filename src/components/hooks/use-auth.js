import { useSelector } from 'react-redux';

export function useAuth() {
  const { email, token, id } = useSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}

// С помощью этого хука можем получить инф-ию о каждом пользователе в любой части приложения.
