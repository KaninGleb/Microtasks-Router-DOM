import {createBrowserRouter} from 'react-router';
import {Error404} from '../../components/pages/Error404.tsx';
import {Adidas} from '../../components/pages/Adidas.tsx';
import {Croses} from '../components/Croses.tsx';
import {Puma} from '../../components/pages/Puma.tsx';
import {Nike} from '../../components/pages/Nike.tsx';


export const PATH = {
  HOME: '/',
  ADIDAS: '/adidas',
  PUMA: '/puma',
  NIKE: '/nike',
  PRICES: '/prices',
  EXCEPTIONS: '*'
} as const;

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Croses/>,
    errorElement: <Error404/>,
    children: [
      { path: PATH.ADIDAS, element: <Adidas/> },
      { path: PATH.PUMA, element: <Puma/> },
      { path: PATH.NIKE, element: <Nike/> },
    ]
  },
])

// useNavigation, useMatches, useRouteError