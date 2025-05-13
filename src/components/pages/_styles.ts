import styled from 'styled-components';
import {Link} from 'react-router-dom';


const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    font-weight: 700;
    background-color: #000000;
    padding: 30px 0;
    color: white;
`

const Body = styled.div`
    display: flex;
    flex: 1;
`

const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    gap: 10px;
    padding: 10px;
    min-height: 400px;
    min-width: 300px;
    color: #282c34;
    font-size: 30px;
`

const NavWrapper = styled.div`
    display: block;
    padding: 10px;
    max-width: fit-content;
    font-size: 28px;

    & > a {
        text-decoration: none;
        color: #2c3e50;
        padding: 10px;
        border-radius: 10px;
        transition: .3s;
    }

    & > a.active {
        text-decoration: none;
        color: #ffffff;
        background-color: #55a2d5;
    }

    & > a:hover {
        color: #ffffff;
        background-color: #2a7fb7;
    }
`

const Content = styled.div`
    font-size: 30px;
    color: white;
    padding: 0 50px 10px;
    background-color: #282c34;
    width: 100%;
`

const HorizontalNavigation = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
`

const HomeLink = styled(Link)`
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #0056b3;
    }
`

const BackLink = styled.button`
    padding: 10px 20px;
    background-color: #ff00b7;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background-color: #980569;
    }
`

const Footer = styled.div`
    background-color: #000000;
    width: 100%;
    height: 120px;
    text-align: center;
    color: white;
`

const SneakersContent = styled.div`
    font-size: 30px;
    color: white;
    text-align: center;
    min-height: 400px;
    width: 95%;
    padding: 10px 50px;
    background-color: #282c34;
`

export const S = {
  AppContainer,
  Header,
  Body,
  NavContainer,
  NavWrapper,
  Content,
  HorizontalNavigation,
  HomeLink,
  BackLink,
  Footer,
}

export const M = {
  NavWrapper,
  SneakersContent
}