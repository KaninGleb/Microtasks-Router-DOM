import {NavLink, Outlet} from 'react-router-dom';
import {S} from './components/pages/_styles.ts';


export const PATH = {
  HOME: '/',
  PAGE1: '/adidas',
  PAGE2: '/puma',
  PAGE3: '/nike',
  PAGE4: '/prices',
  PROTECTED: '/protected',
  EXCEPTIONS: '*'
} as const;

function App() {
  return (
    <div>
      <S.Header>HEADER</S.Header>
      <S.Body>
        <S.NavContainer>
          {/*Navigation:*/}
          <S.NavWrapper> <NavLink to={PATH.PAGE1}>Adidas</NavLink> </S.NavWrapper>
          <S.NavWrapper> <NavLink to={PATH.PAGE2}>Puma</NavLink> </S.NavWrapper>
          <S.NavWrapper> <NavLink to={PATH.PAGE3}>Nike</NavLink> </S.NavWrapper>
          <S.NavWrapper> <NavLink to={PATH.PAGE4}>For wholesalers</NavLink> </S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.PROTECTED}>Protected Page</NavLink></S.NavWrapper>
        </S.NavContainer>
        <S.Content>
          {/*RRD - 6.4*/}
          <Outlet/>


          {/*Sneakers:*/}
          {/*<Routes>*/}
          {/*  <Route path={PATH.HOME} element={ <Navigate to={PATH.PAGE1}/> }/>*/}

          {/*  <Route path={PATH.PAGE1} element={<Adidas/>}/>*/}
          {/*  <Route path={PATH.PAGE2} element={<Puma/>}/>*/}
          {/*  <Route path={PATH.PAGE3} element={<Nike/>}/>*/}
          {/*  <Route path={PATH.PAGE4} element={<Prices/>}/>*/}

          {/*  <Route path={'/:model/:id'} element={<Model/>}/>*/}

          {/*  <Route path={PATH.EXCEPTIONS} element={ <Error404/> }/>*/}
          {/*</Routes>*/}
        </S.Content>
      </S.Body>
      <S.Footer>2025</S.Footer>
    </div>
  )
}

export default App;