import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import {router} from './RRD-6,4';
import './index.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Router DOM - 6.4
root.render(
  <RouterProvider router={router}/>
);


// New syntaxes
// root.render(
//   <HashRouter>
//     <App/>
//   </HashRouter>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();