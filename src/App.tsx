import {Navigate, NavLink, Route, Routes} from 'react-router';
import {PageOne} from './components/pages/PageOne.tsx';
import {PageTwo} from './components/pages/PageTwo.tsx';
import {PageThree} from './components/pages/PageThree.tsx';
import {Error404} from './components/pages/Error404.tsx';
import s from './components/Site.module.css';


function App() {
  return (
    <div>
      <div className={s.header}><h1>HEADER</h1></div>
      <div className={s.body}>
        <div className={s.nav}>
          Здесь будет навигация
          <NavLink
            to='/page-1'
            className={ ({ isActive }) => isActive ? s.activeNavLink : s.navLink }
          >Page 1</NavLink>
          <NavLink
            to='/page-2'
            className={ ({ isActive }) => isActive ? s.activeNavLink : s.navLink }
          >Page 2</NavLink>
          <NavLink
            to='/page-3'
            className={ ({ isActive }) => isActive ? s.activeNavLink : s.navLink }
          >Page 3</NavLink>
        </div>
        <div className={s.content}>
          Здесь будут кроссовки
          <Routes>
            <Route path="/" element={ <Navigate to={"/page-1"}/> }/>

            <Route path="/page-1" element={<PageOne/>}/>
            <Route path="/page-2" element={<PageTwo/>}/>
            <Route path="/page-3" element={<PageThree/>}/>

            <Route path="/page/error" element={ <Error404/> }/>
            <Route path="*" element={ <Navigate to={"/page/error"}/> }/>
          </Routes>
        </div>
      </div>
      <div className={s.footer}>Abibas 2023</div>
    </div>
  )
}

export default App;