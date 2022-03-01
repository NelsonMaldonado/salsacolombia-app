import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
const Prices = () => {
  return (
    <TopDiv>
      <Link className="logOne" to="/">
        <Logo img src="/front_design.png" alt="salsa_logo" />
      </Link>
      <DivOne></DivOne>
      <DivTwo>
        <DivThree>
          <h2>VIRTUAL OR IN-PERSON PRIVATE LESSONS</h2>
          <h3>1-on-1 LESSONS</h3>
          <span>Single Lesson $65</span> <br />
          <span>5 Lesson Package $275</span>
          <p>
            One-on-One lessons are a great way to have a personal experience in
            a class of your choice. Start training like a pro with Nelly
            Maldonado. Classes start from a basic diagnostic warm up, then dance
            technique, steps, choreo modules and finally partner work. You get
            to choose hours that work for you.{" "}
          </p>
        </DivThree>
        <DivFour>
          <h2>
            GROUP (BIRTHDAY / WEDDING / FAMILY / FRIENDS /
            TECH-HEALTH-WORKSHOPS)
          </h2>

          <span>Livestream Package 1: $150 (Up to 10-people)</span>
          <br />
          <span>Livestream Package 2: $300 (Up to 10-people)</span>
          <br />
          <span>Livestream Package 3: 650 (Up to 50-people)</span>
          <p>
            Enjoy a private dance group lesson exclusive to YOUR circle! This
            package is great for birthday parties, team bonding and overall
            group fun, social events, coorperate events, festivals and more!
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
    font-size: 12px;
  }

  height: 800px;
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

  @media (max-width: 500px) {
    width: 90%;
    text-align: center;
  }
`

const DivTwo = styled.div`
  width: 35%;
  margin: autol;

  @media (max-width: 500px) {
    width: 90%;

    justify-content: center;
    height: 810px;
  }
`
const DivThree = styled.div`
  width: 96%;

  padding-left: 10px;

  @media (max-width: 500px) {
    width: 90%;
    text-align: center;
  }
`

const DivFour = styled.div`
  width: 96%;

  padding-left: 10px;

  @media (max-width: 500px) {
    width: 90%;
    text-align: center;
  }
`
const Logo = styled.img`
  height: 20px;
`
