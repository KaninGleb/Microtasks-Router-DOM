import {useNavigate, NavLink, Outlet} from 'react-router-dom';
import {PATH} from './RRD-6,4/routes/router.tsx';
import {S} from './components/pages/_styles.ts';


export const App = () => {
  const navigate = useNavigate()
  const navigateHandler = () => {
    navigate(-1)
  }

  return (
    <S.AppContainer>
      <S.Header>HEADER</S.Header>
      <S.Body>
        <S.NavContainer>
          {/*Navigation:*/}
          <S.NavWrapper> <NavLink to={PATH.ADIDAS}>Adidas</NavLink> </S.NavWrapper>
          <S.NavWrapper> <NavLink to={PATH.PUMA}>Puma</NavLink> </S.NavWrapper>
          <S.NavWrapper> <NavLink to={PATH.NIKE}>Nike</NavLink> </S.NavWrapper>
          <S.NavWrapper> <NavLink to={PATH.PRICES}>For wholesalers</NavLink> </S.NavWrapper>
          <S.NavWrapper> <NavLink to={PATH.PROTECTED}>Protected Page</NavLink> </S.NavWrapper>
        </S.NavContainer>
        <S.Content>
          <S.HorizontalNavigation>
            <S.HomeLink to={PATH.ADIDAS}>Home</S.HomeLink>
            <S.BackLink onClick={navigateHandler}>Back</S.BackLink>
          </S.HorizontalNavigation>


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
    </S.AppContainer>
  )
}