import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
const Prices = () => {
  return (
    <TopDiv>
      <DivOne></DivOne>
      <DivTwo>
        <LogoHolder>
          <Link className="logOne" to="/">
            <Logo img src="/front_design.png" alt="salsa_logo" />
          </Link>
        </LogoHolder>
        <DivThree>
          <h2>VIRTUAL OR IN-PERSON PRIVATE LESSONS</h2>
          <h3>1-on-1 LESSONS</h3>
          <span>Single Lesson (1 hour) $65</span> <br />
          <span>5 Hour Lesson Package $275</span>
          <br />
          <span>10 Hour Lesson Package $500</span>
          <br />
          <br />
          <span>
            DM
            <a href="http://www.instagram.com/salsacolombia"> @Instagram</a> or
            email:
          </span>
          <a href="mailto:nelly@salsacolombia.net">nelly@salsacolombia.net</a>
          <p>
            One-on-One lessons are a great way to have a personal experience in
            a class of your choice. Start training like a pro with Nelly
            Maldonado. Classes start from a basic diagnostic warm up, then dance
            technique, steps, choreo modules and finally partner work. You get
            to choose hours that work for you.{" "}
          </p>
          <p>
            ** location at 24hr fitness in Oakland (+$15 for San Francisco)**
          </p>
        </DivThree>
        <DivFour>
          <h2>
            GROUP (BIRTHDAY / WEDDING / FAMILY / FRIENDS /
            TECH-HEALTH-WORKSHOPS)
          </h2>

          <span>Livestream Package 1: $150 (Up to 10-people)</span>
          <br />
          <span>Livestream Package 2: $300 (Up to 20-people)</span>
          <br />
          <span>Livestream Package 3: 650 (Up to 50-people)</span>
          <p>
            Enjoy a private dance group lesson exclusive to YOUR circle! This
            package is great for birthday parties, team bonding and overall
            group fun, social events, coorperate events, festivals and more! We
            also do workshops in your office space.
          </p>
        </DivFour>
      </DivTwo>
    </TopDiv>
  )
}
export default Prices

const TopDiv = styled.div`
  font-family: poppins-extralight, poppins, sans-serif;
  span {
    font-weight: bold;
    font-size: 14px;
  }
  padding-bottom: 36px;
  height: 1045px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    color: white;
    background-color: #20232a;
  }
`
const DivOne = styled.div`
  width: 60%;
  // border: 1px solid red;
  @media (max-width: 500px) {
    width: 90%;
    text-align: center;
  }
`

const DivTwo = styled.div`
  width: 35%;
  margin-top: 0px;
  // border: 1px solid red;
  @media (max-width: 500px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    height: 900px;
  }
`
const DivThree = styled.div`
  width: 96%;
  a {
    color: #00bdfe;
  }
  @media (max-width: 500px) {
    margin-top: 20px;
    width: 90%;

    // border: 1px solid blue;
    margin-left: auto;
    margin-right: auto;
  }
`

const DivFour = styled.div`
  width: 96%;

  @media (max-width: 500px) {
    width: 90%;

    // border: 1px solid blue;
    margin-left: auto;
    margin-right: auto;
  }
`
const Logo = styled.img`
  height: 120px;
  @media (min-width: 501px) {
    display: none;
  }
`
const LogoHolder = styled.div`
  // margin-top: 36px;
  text-align: center;
  // border: 1px red solid;
`
