import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"

const fetchData = () => {
  return axios
    .get("https://backend-salsacolombia.herokuapp.com/api/catalog")
    .then((res) => {
      console.log(res.data)
      return res.data
    })
    .catch((err) => {
      console.error(err)
    })
}

const StepsApi = () => {
  const [steps, setSteps] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const loadSteps = () => {
    console.log("loading api")
    fetchData()
      .then((res) => {
        setSteps(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const loadRandomStep = () => {
    console.log("loading random step")
  }

  return (
    <MainDiv>
      <ButtonsDiv>
        <Button onClick={loadSteps}>Load Steps</Button>
        <Button onClick={loadRandomStep}>Load Steps</Button>
      </ButtonsDiv>
      <div>Get Steps from back end</div>
      {steps.map((step) => (
        <div>
          <h4>
            <span>{step.id} </span>
            {step.stepname}
          </h4>
        </div>
      ))}
    </MainDiv>
  )
}

export default StepsApi

const MainDiv = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 500px;
`

const Button = styled.button`
  text-align: center;
  margin: 5px;
  width: 100px;
  height: 40px;
`
const ButtonsDiv = styled.div`
  display: flex;
`
