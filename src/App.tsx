import {Navigate, NavLink, Route, Routes} from 'react-router';
import {PageOne} from './components/pages/PageOne.tsx';
import {PageTwo} from './components/pages/PageTwo.tsx';
import {PageThree} from './components/pages/PageThree.tsx';
import {Error404} from './components/pages/Error404.tsx';
import {S} from './components/pages/_styles.ts';


const PATH = {
  HOME: '/',
  PAGE1: '/page1',
  PAGE2: '/page2',
  PAGE3: '/page3',
  ERROR: '/page/error',
  EXCEPTIONS: '*'
} as const;

function App() {
  return (
    <div>
      <S.Header><h1>HEADER</h1></S.Header>
      <S.Body>
        <S.NavContainer>
          Navigation:
          <S.NavWrapper> <NavLink to={PATH.PAGE1}>Page 1</NavLink> </S.NavWrapper>
          <S.NavWrapper> <NavLink to={PATH.PAGE2}>Page 2</NavLink> </S.NavWrapper>
          <S.NavWrapper> <NavLink to={PATH.PAGE3}>Page 3</NavLink> </S.NavWrapper>
        </S.NavContainer>
        <S.Content>
          Sneakers:
          <Routes>
            <Route path={PATH.HOME} element={ <Navigate to={"/page-1"}/> }/>

            <Route path={PATH.PAGE1} element={<PageOne/>}/>
            <Route path={PATH.PAGE2} element={<PageTwo/>}/>
            <Route path={PATH.PAGE3} element={<PageThree/>}/>

            {/*<Route path={PATH.ERROR} element={ <Error404/> }/>*/}
            {/*<Route path={PATH.EXCEPTIONS} element={ <Navigate to={PATH.ERROR}/> }/>*/}

            <Route path={PATH.EXCEPTIONS} element={ <Error404/> }/>
          </Routes>
        </S.Content>
      </S.Body>
      <S.Footer>Abibas 2023</S.Footer>
    </div>
  )
}

export default App;