import { Login } from '@/components/loginform';

export default function Auth() {
  let user = {
    name: "Arun",
    email: "arun@gmail.com"
  }
  let isLogin = false;
  return (
    <div>
      {
        isLogin ? (
          <div>
            <p>Email: {user.email}</p>
            <p>Name: {user.name}</p>
          </div>
        ) : (
          <div>
            <Login />
          </div>
        )
      }
    </div>
  )
}