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
          <h5>5 Lesson Package $275</h5>
          <p>
            One-on-One lessons are a great way to have a personal experience in
            a class of your choice. Start training like a pro with Nelly
            Maldonado. Classes start from a basic diagnostic warm up, then dance
            technique, steps, choreo modules and finally partner work. You get
            to choose hours that work for you.{" "}
          </p>
        </DivThree>
        <DivFour>
          <h2>VIRTUAL OR IN-PERSON PRIVATE LESSONS</h2>
          <h3>1-on-1 LESSONS</h3>
          <h4>Single Lesson $65</h4>
          <h5>5 Lesson Package $275</h5>
          <p>
            One-on-One lessons are a great way to have a personal experience in
            a class of your choice. Start training like a pro with Nelly
            Maldonado. Classes start from a basic diagnostic warm up, then dance
            technique, steps, choreo modules and finally partner work. You get
            to choose hours that work for you.{" "}
          </p>
        </DivFour>
      </DivTwo>
    </TopDiv>
  )
}
export default Prices

const TopDiv = styled.div`
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
  width: 100%;
  height: 40vh;
`

const DivFour = styled.div`
  border: 5px solid purple;
  width: 100%;
  height: 40vh;
`
