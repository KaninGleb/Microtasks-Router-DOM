import {createBrowserRouter} from 'react-router';
import App from '../../App.tsx';
import {Error404} from '../../components/pages/Error404.tsx';
import {Adidas} from '../../components/pages/Adidas.tsx';
import {Puma} from '../../components/pages/Puma.tsx';
import {Nike} from '../../components/pages/Nike.tsx';
import {Prices} from '../../components/pages/Prices.tsx';
import {Model} from '../../components/pages/Model.tsx';
import {ProtectedRoute} from './ProtectedRoute.tsx';
import {ProtectedPage} from '../pages/ProtectedPage.tsx';


const PATH = {
  ADIDAS: '/adidas',
  PUMA: '/puma',
  NIKE: '/nike',
  PRICES: '/prices',
  MODEL: '/:model/:id',
  PROTECTED: '/protected',
  ERROR: '/error',
} as const;

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error404/>,
    children: [
      {path: PATH.ADIDAS, element: (<Adidas/>)},
      {path: PATH.PUMA, element: (<Puma/>)},
      {path: PATH.NIKE, element: (<Nike/>)},
      {path: PATH.PRICES, element: (<Prices/>)},
      {path: PATH.MODEL, element: (<Model/>)},
      {
        path: PATH.PROTECTED, element: (
          <ProtectedRoute>
            <ProtectedPage/>
          </ProtectedRoute>
        )
      },
      {path: PATH.ERROR, element: (<Error404/>)},
    ],
  },
]);

// useNavigation, useMatches, useRouteError