import {ReactNode} from 'react';
import {Navigate} from 'react-router-dom';

type Props = {
  children: ReactNode
}


export const ProtectedRoute = ({ children }: Props) => {
  const isLoggedIn = true

  return isLoggedIn ? children : <Navigate to={'/error'}/>
}