import React from "react"
import styled from "styled-components"
const Prices = () => {
  return (
    <TopDiv>
      <DivOne>Left box</DivOne>
      <DivTwo>
        right box
        <DivThree>
          <h2>VIRTUAL OR IN-PERSON PRIVATE LESSONS</h2>
          <h3>1-on-1 LESSONS</h3>
          <h4>Single Lesson $65</h4>
          <h4>5 Lesson Package $275</h4>
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
  border: 5px solid red;
  height: 800px;
  display: flex;
  justify-content: space-between;
`
const DivOne = styled.div`
  border: 5px solid blue;
  width: 60%;
`

const DivTwo = styled.div`
  border: 5px solid green;
  width: 35%;
  margin: autol;
`
const DivThree = styled.div`
  border: 5px solid brown;
  width: 96%;
  height: 40vh;
  padding-left: 10px;
`

const DivFour = styled.div`
  border: 5px solid purple;
  width: 96%;
  height: 40vh;
  padding-left: 10px;
`
