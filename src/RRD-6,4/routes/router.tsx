import {Navigate, Outlet} from 'react-router-dom';
import {createBrowserRouter, type RouteObject} from 'react-router';
import {App} from '../../App.tsx';
import {Adidas, Puma, Nike, Prices, Model, Login} from '../../components';
import {ProtectedPage} from '../pages/ProtectedPage.tsx';
import s from '../../components/pages/Prices/Prices.module.css';


export const PATH = {
  HOME: '/Microtasks-Router-DOM/',
  ADIDAS: '/Microtasks-Router-DOM/adidas',
  PUMA: '/Microtasks-Router-DOM/puma',
  NIKE: '/Microtasks-Router-DOM/nike',
  PRICES: '/Microtasks-Router-DOM/prices',
  MODEL: '/Microtasks-Router-DOM/:model/:id',
  PROTECTED: '/Microtasks-Router-DOM/protected',
  ERROR: '/Microtasks-Router-DOM/error',
  LOGIN: '/Microtasks-Router-DOM/login',
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