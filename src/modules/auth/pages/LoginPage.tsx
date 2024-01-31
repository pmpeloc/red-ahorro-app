import { loginRequest } from '../services/auth';
import { useAuthStore } from '../store/auth.store';

export const LoginPage = () => {
  const setToken = useAuthStore((state) => state.setToken);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;

    const token = await loginRequest(email, password);

    setToken(token);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='email' placeholder='Ingrese su email' />
      <input type='password' placeholder='Ingrese su contraseña' />
      <button type='submit'>Iniciar Sesión</button>
    </form>
  );
};
