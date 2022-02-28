import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <Container>
      <Link to="/">
        <Logo img src="/front_design.png" alt="salsa_logo" />
      </Link>
      <Link to="/prices">
        <ButtonPrice className="btn">PRIVATE CLASSES</ButtonPrice>
      </Link>
      <Player>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/IR1cqagIYJY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Player>
      <Link to="/ukraine">
        <Button className="btn">Ukraine Event 🇺🇦 </Button>
      </Link>
      <Link to="/ukraine">
        <Button className="btn">TikTok </Button>
      </Link>
      <Link to="/ukraine">
        <Button className="btn">YouTube </Button>
      </Link>
      <Link to="/ukraine">
        <Button className="btn">YouTube </Button>
      </Link>
    </Container>
  )
}

export default Home

const Container = styled.main`
  @media (max-width: 500px) {
    height: 900px;
    background-image: url("https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80");
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
