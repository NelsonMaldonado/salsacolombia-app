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
      <LandingBottons>
        <form
          action="https://sfsalsafestival.com/tickets/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className=" btn2 off" type="submit">
            <Sfcont>www.sfsalsafestival.com 🇺🇸</Sfcont>
          </Button>
        </form>
        <form
          action="https://sfsalsafestival.com/wp-content/uploads/2022/02/SF-Salsa-Festival-Workshop-Schedule-2022.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className=" btn2 off" type="submit">
            <Sfcont>[SFSF] Workshop Schedule 🇺🇸</Sfcont>
          </Button>
        </form>
      </LandingBottons>
      <Link to="/prices">
        <ButtonPrice className=" btn2">💃🏻 Lessons 🕺🏽 </ButtonPrice>
      </Link>
      {/* <Link to="/steps">
        <ButtonPrice className=" btn2">Steps </ButtonPrice>
      </Link> */}

      {/* <Link to="/ukraine">
        <Button className=" btn2">SF Festival Workshop 🇺🇸 </Button>
      </Link> */}
      <MobileBody>
        {/* <Link to="/bestsongs">
          <Button className=" btn2">Salsa Poll</Button>
        </Link> */}

        {/* <form action="https://venmo.com/code?user_id=2033099810537472420&created=1646040905.15421&printed=1">
          <Button className=" btn2 off" type="submit">
            Venmo @Nelly-Maldonado
          </Button>
        </form> */}
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
            Facebook
          </Button>
        </form>
        <form action="https://www.instagram.com/salsacolombia">
          <Button className=" btn2 off" type="submit">
            Instagram
          </Button>
        </form>
        <Footnote>© 2022 SalsaColombia DA. Made in Oakland CA </Footnote>
      </MobileBody>
      <Footnote2>© 2022 SalsaColombia DA. Made in Oakland CA </Footnote2>
    </Container>
  )
}

export default Home

const Container = styled.main`
// border: 1px solid red;
  @media (max-width: 500px) {
    height: 810px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-repeat: repeat-y;
    background-color: #20232a;
  
  }
 
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height:100%;
  flex-direction: column;
  .btn2 {
    width: 340px;
    margin-top: 30px;
    background-color: #00bdfe;
    border: none;
    height: 55px;
    color: white;
    font-size: 20px;
    border-radius: 50px;
    font-family: 'Montserrat', sans-serif;
font-family: 'Nova Round';

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
const Footnote = styled.div`
  display: flex;
  font-size: 10px;
  justify-content: center;
  color: white;
  text-align: center;
  // border: 1px solid white;
  margin-top: 75px;
`
const Sfcont = styled.div`
  color: white;
  font-size: 20px;
`

const Footnote2 = styled.div`
  @media (max-width: 501px) {
    display: none;
  }

  margin-top: 60px;
  color: black;
  
  margin-bottom 10px;
`
const LandingBottons = styled.div`
  @media (min-width: 501px) {
    .off {
      background-color: #01270E2;
      border-radius: 2px;
    }
    display: flex;
    // background-color: grey;
    justify-content: space-around;
    width: 800px;
    // border: 2px solid red;
  }
`
