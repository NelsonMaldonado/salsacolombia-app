import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
const Ukraine = () => {
  return (
    <MainDiv>
      <LogoHolder>
        <Link className="logOne" to="/">
          <Logo img src="/front_design.png" alt="salsa_logo" />
        </Link>
      </LogoHolder>
      <h1>Workshop in Ukraine</h1>
      <h2>Sorry this event has been canceled untill further notice 😥</h2>
      <ol>
        <h3>What you will learn Basic Level:</h3>
        <li> Basico Caleno </li>
        <li> Basico Linea </li>
        <li> Side Step </li>
        <li> Punta Talon (easy version)</li>
        <li> Diamond </li>
        <li> Titere </li>
        <li> Marchados</li>
        <li> Piques</li>
      </ol>

      <ol>
        <h3>Intermediate Level (Most steps include a Cha Cha or Repique):</h3>
        <li> Basico Caleno </li>
        <li> Basico Linea </li>
        <li> Side Step </li>
        <li> Punta Talon </li>
        <li> Diamond </li>
        <li> Titere </li>
        <li> Marchados</li>
        <li> Latino</li>
        <li> Jales</li>
        <li> 7 Step</li>
        <li> Patacon Pisado</li>
        <li> Jales 2</li>
        <li> Piques</li>
      </ol>
      <ol>
        <h3> Partner Work:</h3>
        <p> Apply footwork to dance with a partner</p>
      </ol>
    </MainDiv>
  )
}

export default Ukraine

const Logo = styled.img`
  height: 120px;
  @media (min-width: 501px) {
    display: none;
  }
`
const LogoHolder = styled.div`
  padding-top: 36px;
  text-align: center;
  // border: 1px red solid;
`
const MainDiv = styled.div`
  padding-left: 35px;
  padding-down: 35px;
  border: 2px solid red;
  color: white;
  background-color: #20232a;
  padding-bottom: 36px;
`
