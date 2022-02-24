import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <Container>
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
        <Button>Ukraine Event 🇺🇦 </Button>
      </Link>
    </Container>
  )
}

export default Home

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 100px;
  flex-direction: column;
`
const Player = styled.div`
  max-width: 800px;
  width: 80%;
  height: 40vh;
`
const Button = styled.button`
  margin-top: 30px;
  background-color: #00bdfe;
  border: none;
  height: 40px;
  color: white;
  width: 300px;
  font-size: 25px;
`
