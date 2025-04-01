import {Navigate, NavLink, Route, Routes} from 'react-router';
import {PageOne} from './components/pages/PageOne.tsx';
import {PageTwo} from './components/pages/PageTwo.tsx';
import {PageThree} from './components/pages/PageThree.tsx';
import {Error404} from './components/pages/Error404.tsx';
import {S} from './components/pages/_styles.ts';


function App() {
  return (
    <div>
      <S.Header><h1>HEADER</h1></S.Header>
      <S.Body>
        <S.NavContainer>
          Navigation:
          <S.NavWrapper> <NavLink to='/page-1'>Page 1</NavLink> </S.NavWrapper>
          <S.NavWrapper> <NavLink to='/page-2'>Page 2</NavLink> </S.NavWrapper>
          <S.NavWrapper> <NavLink to='/page-3'>Page 3</NavLink> </S.NavWrapper>
        </S.NavContainer>
        <S.Content>
          Sneakers:
          <Routes>
            <Route path="/" element={ <Navigate to={"/page-1"}/> }/>

            <Route path="/page-1" element={<PageOne/>}/>
            <Route path="/page-2" element={<PageTwo/>}/>
            <Route path="/page-3" element={<PageThree/>}/>

            <Route path="/page/error" element={ <Error404/> }/>
            <Route path="*" element={ <Navigate to={"/page/error"}/> }/>
          </Routes>
        </S.Content>
      </S.Body>
      <S.Footer>Abibas 2023</S.Footer>
    </div>
  )
}

export default App;