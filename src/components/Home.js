import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <Container>
      <Link to="/">
        <Logo img src="/front_design.png" alt="salsa_logo" />
      </Link>

      <Player>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/IR1cqagIYJY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </Player>
      <Link to="/prices">
        <ButtonPrice className="btn">PRIVATE CLASSES</ButtonPrice>
      </Link>
      <Link to="/ukraine">
        <Button className="btn">Ukraine Event 🇺🇦 </Button>
      </Link>

      <a href="http://www.salsacolombia.net" className="btn linkOne">
        SC
      </a>
      <a href="http://www.salsacolombia.net" className="btn linkOne ">
        VENMO
      </a>
      <a href="http://www.salsacolombia.net" className="btn linkOne">
        TikTok
      </a>
      <a href="http://www.salsacolombia.net" className="btn linkOne">
        Youtube
      </a>
      <a href="http://www.salsacolombia.net" className="btn linkOne">
        FaceBook
      </a>
    </Container>
  )
}

export default Home

const Container = styled.main`
  @media (max-width: 500px) {
    height: 900px;

    background-color: #0a0a27;
    opacity: 0.8;
    background-image: linear-gradient(135deg, #393c6a 25%, transparent 25%),
      linear-gradient(225deg, #393c6a 25%, transparent 25%),
      linear-gradient(45deg, #393c6a 25%, transparent 25%),
      linear-gradient(315deg, #393c6a 25%, #0a0a27 25%);
    background-position: 23px 0, 23px 0, 0 0, 0 0;
    background-size: 46px 46px;
    background-repeat: repeat;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  flex-direction: column;
  .btn {
    margin-top: 30px;
    background-color: #00bdfe;
    border: none;
    height: 40px;
    color: white;
    width: 300px;
    font-size: 25px;
  }
`
const Player = styled.div`
  margin-top: 100px;
  max-width: 800px;
  min-height: 500px;
  width: 80%;
  height: 40vh;
  @media (max-width: 500px) {
    display: none;
  }
`

const Button = styled.button``
const ButtonPrice = styled.button`
  @media (min-width: 501px) {
    display: none;
  }
`
const Logo = styled.img`
  height: 80px;
`
