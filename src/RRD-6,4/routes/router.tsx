import {createBrowserRouter, RouteObject} from 'react-router';
import {App} from '../../App.tsx';
import {Adidas} from '../../components/pages/Adidas.tsx';
import {Puma} from '../../components/pages/Puma.tsx';
import {Nike} from '../../components/pages/Nike.tsx';
import {Prices} from '../../components/pages/Prices.tsx';
import {Model} from '../../components/pages/Model.tsx';
import {Login} from '../../components/pages/Login/Login.tsx';
import {ProtectedPage} from '../pages/ProtectedPage.tsx';
import {Outlet, Navigate} from 'react-router-dom';
import s from '../../components/pages/Prices.module.css';


export const PATH = {
  HOME: '/',
  ADIDAS: '/adidas',
  PUMA: '/puma',
  NIKE: '/nike',
  PRICES: '/prices',
  MODEL: '/:model/:id',
  PROTECTED: '/protected',
  ERROR: '/error',
  LOGIN: '/login',
} as const;

const publicRoutes: RouteObject[] = [
  { path: PATH.ADIDAS, element: <Adidas/> },
  { path: PATH.PUMA, element: <Puma/> },
  { path: PATH.NIKE, element: <Nike/> },
  { path: PATH.PRICES, element: <Prices/> },
  { path: PATH.MODEL, element: <Model/> },
  { path: PATH.ERROR, element: <Login/> },
]

const privateRoutes: RouteObject[] = [
  { path: PATH.PROTECTED, element: <ProtectedPage/> },
]

export const PrivateRoutes = () => {
  const isAuth = false

  return (
    <div className={s.pricesContainer}>
      {isAuth ? <Outlet/> : <Navigate to={PATH.LOGIN}/>}
    </div>
  )
}

export const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <App/>,
    errorElement: <Navigate to={PATH.ERROR} />,
    children: [
      {
        index: true,
        element: <Navigate to={PATH.ADIDAS} />,
      },
      {
        element: <PrivateRoutes/>,
        children: privateRoutes
      },
      ...publicRoutes,
    ],
  },
])

// useNavigation, useMatches, useRouteError