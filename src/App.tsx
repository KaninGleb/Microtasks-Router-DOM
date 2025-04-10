import {Navigate, NavLink, Route, Routes} from 'react-router';
import {Adidas} from './components/pages/Adidas.tsx';
import {Puma} from './components/pages/Puma.tsx';
import {Nike} from './components/pages/Nike.tsx';
import {Model} from './components/pages/Model.tsx';
import {Error404} from './components/pages/Error404.tsx';
import {S} from './components/pages/_styles.ts';


export const PATH = {
  HOME: '/',
  PAGE1: '/adidas',
  PAGE2: '/puma',
  PAGE3: '/nike',
  EXCEPTIONS: '*'
} as const;

function App() {
  return (
    <div>
      <S.Header><h1>HEADER</h1></S.Header>
      <S.Body>
        <S.NavContainer>
          {/*Navigation:*/}
          <S.NavWrapper> <NavLink to={PATH.PAGE1}>Adidas</NavLink> </S.NavWrapper>
          <S.NavWrapper> <NavLink to={PATH.PAGE2}>Puma</NavLink> </S.NavWrapper>
          <S.NavWrapper> <NavLink to={PATH.PAGE3}>Nike</NavLink> </S.NavWrapper>
        </S.NavContainer>
        <S.Content>
          {/*Sneakers:*/}
          <Routes>
            <Route path={PATH.HOME} element={ <Navigate to={PATH.PAGE1}/> }/>

            <Route path={PATH.PAGE1} element={<Adidas/>}/>
            <Route path={PATH.PAGE2} element={<Puma/>}/>
            <Route path={PATH.PAGE3} element={<Nike/>}/>

            <Route path={'/:model/:id'} element={<Model/>}/>

            <Route path={PATH.EXCEPTIONS} element={ <Error404/> }/>
          </Routes>
        </S.Content>
      </S.Body>
      <S.Footer>2025</S.Footer>
    </div>
  )
}

export default App;