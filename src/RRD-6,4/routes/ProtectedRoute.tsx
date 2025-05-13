import {ReactNode} from 'react';
import {Navigate} from 'react-router-dom';
import s from '../../components/pages/Prices.module.css';


type Props = {
  children: ReactNode
}

export const ProtectedRoute = ({ children }: Props) => {
  const isLoggedIn = false

  return (
    <div className={s.pricesContainer}>
      {isLoggedIn ? children : <Navigate to={'/login'}/>}
    </div>
  )
}