import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <Container>
      <Link to="/">
        <Logo img src="/front_design.png" alt="salsa_logo" />
      </Link>
      <NavMenu>
        <Link to="/">
          <span>Home</span>
        </Link>

        <Link to="/topvideos">
          <span>Top Videos</span>
        </Link>

        <Link to="/quiz">
          <span>Quiz</span>
        </Link>
        <Link to="/choreo">
          <span>Learn</span>
        </Link>
        <Link to="/about">
          <span>About</span>
        </Link>
      </NavMenu>
      <Link to="/prices">
        <Button className="btnPrice">PRIVATE CLASSES</Button>
      </Link>

      <Link to="/">
        <LoginImg src="/rock.JPEG" alt="login_image" />
      </Link>
    </Container>
  )
}

export default Header

const Container = styled.div`
  height: 70px;
  background-color: #011522;
  display: flex;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`

const NavMenu = styled.nav`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-itmes: center;

  span {
    color: white;
    font-size: 13px;
    letter-spacing: 1.42px;
    padding: 0 12px;
    position: relative;
    &:after {
      content: "";
      height: 2px;
      background: white;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -6px;
      opacity: 0;
      transform-origin: left center;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      transform: scaleX(0);
    }
    // &:hover {
    //   span: after {
    //     transform: scaleX(1);
    //     opacity: 1;
    //   }
    // }
  }
`

const Logo = styled.img`
  width: 48px;
`
const LoginImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`
const Button = styled.button`
  margin-right: 20px;
  background-color: #00bdfe;
  border: none;
  height: 30px;
  color: white;

  @media (max-width: 480px) {
    display: none;
  }
`
