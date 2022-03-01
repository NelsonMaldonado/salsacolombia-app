import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <Container>
      <Link className="logOne" to="/">
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
        <ButtonPrice className=" btn2">PRIVATE CLASSES</ButtonPrice>
      </Link>
      <Link to="/ukraine">
        <Button className=" btn2">Ukraine Event 🇺🇦 </Button>
      </Link>
      <MobileBody>
        <form action="https://www.salsacolombia.net/">
          <Button className=" btn2 off" type="submit">
            Private Classes
          </Button>
        </form>
        <form action="https://venmo.com/code?user_id=2033099810537472420&created=1646040905.15421&printed=1">
          <Button className=" btn2 off" type="submit">
            Venmo
          </Button>
        </form>
        <form action="https://www.tiktok.com/@salsacolombiatiktok">
          <Button className=" btn2 off" type="submit">
            TikTok
          </Button>
        </form>
        <form action="https://www.youtube.com/c/salsacolombiaofficial">
          <Button className=" btn2 off" type="submit">
            YouTube
          </Button>
        </form>
        <form action="https://www.facebook.com/salsacolombia.net">
          <Button className=" btn2 off" type="submit">
            FaceBook
          </Button>
        </form>
      </MobileBody>
    </Container>
  )
}

export default Home

const Container = styled.main`

  @media (max-width: 500px) {
    height: 900px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 40px;

    background-color: #0a0a27;
    opacity: 0.8;
    background-image: linear-gradient(135deg, #393c6a 25%, transparent 25%),
      linear-gradient(225deg, #393c6a 25%, transparent 25%),
      linear-gradient(45deg, #393c6a 25%, transparent 25%),
      linear-gradient(315deg, #393c6a 25%, #0a0a27 25%);
    background-position: 23px 0, 23px 0, 0 0, 0 0;
    background-size: 46px 46px;
    background-repeat: repeat;
    background-attachment: fixed;



  }
 
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 1080px;
  flex-direction: column;
  .btn2 {
    width: 340px;
    margin-top: 30px;
    background-color: #00bdfe;
    border: none;
    height: 75px;
    color: white;
    font-size: 25px;
    border-radius: 50px;
  }


    


   
  }
`
const Player = styled.div`
  max-width: 800px;
  min-height: 500px;
  margin-top: 50px;
  margin-bottom: 20px;
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
  height: 120px;
  @media (min-width: 501px) {
    display: none;
  }
`
const MobileBody = styled.div`
  @media (min-width: 501px) {
    display: none;
  }
`
