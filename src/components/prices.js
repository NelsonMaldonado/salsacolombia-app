import React from "react"
import styled from "styled-components"
const Prices = () => {
  return (
    <TopDiv>
      <DivOne>Left box</DivOne>
      <DivTwo>right box</DivTwo>Inside main div
    </TopDiv>
  )
}
export default Prices

const TopDiv = styled.div`
  border: 5px solid red;
`
const DivOne = styled.div`
  border: 5px solid blue;
`

const DivTwo = styled.div`
  border: 5px solid green;
`
