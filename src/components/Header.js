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
        <MobileBody>
          {/* <Link to="/bestsongs">
          <Button className=" btn2">Salsa Poll</Button>
        </Link> */}

          {/* <form action="https://venmo.com/code?user_id=2033099810537472420&created=1646040905.15421&printed=1">
          <Button className=" btn2 off" type="submit">
            Venmo @Nelly-Maldonado
          </Button>
        </form> */}
          <a href="https://www.tiktok.com/@salsacolombiatiktok">
            <Components className=" btn2 off" type="submit">
              TikTok
            </Components>
          </a>
          <a href="https://www.youtube.com/c/salsacolombiaofficial">
            <Components className=" btn2 off" type="submit">
              YouTube
            </Components>
          </a>
          <a href="https://www.facebook.com/salsacolombia.net">
            <Components className=" btn2 off" type="submit">
              Facebook
            </Components>
          </a>
          <a href="https://www.instagram.com/salsacolombia">
            <Components className=" btn2 off" type="submit">
              Instagram
            </Components>
          </a>
        </MobileBody>
        {/* <Link to="/topvideos">
          <span>Top Videos</span>
        </Link> */}

        {/* <Link to="/quiz">
          <span>Quiz</span>
        </Link>
        <Link to="/choreo">
          <span>Learn</span>
        </Link>
        <Link to="/about">
          <span>About</span>
        </Link> */}
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

  @media (max-width: 500px) {
    display: none;
  }
`

const NavMenu = styled.nav`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-itmes: center;

  @media (max-width: 500px) {
    display: none;
  }

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

  font-family: "Montserrat", sans-serif;
  font-family: "Nova Round";

  @media (max-width: 500px) {
    display: none;
  }
`
const MobileBody = styled.div`
  display: flex;
  // border: 1px solid red;
  width: 350px;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  justify-content: space-evenly;
`
const Components = styled.text`
  color: white;
`
