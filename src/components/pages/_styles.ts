import styled from 'styled-components';


const Header = styled.div`
    background-color: #000000;
    width: 100%;
    height: 100px;
    text-align: center;
    color: white;
`

const Body = styled.div`
    display: flex;
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
    min-height: 400px;
    padding: 0 50px 10px;
    background-color: #282c34;
    width: 100%;
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
  Header,
  Body,
  NavContainer,
  NavWrapper,
  Content,
  Footer,
}

export const M = {
  NavWrapper,
  SneakersContent
}