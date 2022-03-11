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
  const [newStep, setNewStep] = useState()

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

  const reset = () => {
    setSteps([""])
  }

  const handleSubmit = (event) => {
    alert(`Your step was added to the list: + ${newStep}`)
    event.preventDefault()
    const paso = { newStep }

    fetch("https://backend-salsacolombia.herokuapp.com/api/catalog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(paso),
    })
      .then(() => {
        console.log("Step added")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleOnChange = (event) => {
    setNewStep(event.target.value)
  }

  return (
    <>
      <TopSection>
        <ButtonsDiv>
          <Button onClick={loadSteps}>Load Steps</Button>
          {/* <Button onClick={loadRandomStep}>Load Steps</Button> */}
          <Button onClick={reset}>Clear Page</Button>
        </ButtonsDiv>

        {steps.map((step, idx) => (
          <div key={idx}>
            <h4>
              <span>{step.id} </span>
              {step.stepname}
            </h4>
          </div>
        ))}

        <FormSection>
          <form onSubmit={handleSubmit}>
            <label>
              <h2>Step className:</h2>
              <h4>Enter and submit the step you mastered today</h4>

              <input
                type="text"
                name="stepname"
                value={newStep}
                onChange={handleOnChange}
              ></input>
            </label>
            {/* <label> */}
            {/* <h3>Website</h3>
              <input type="text" name="website" value="stepname"></input>
            </label> */}
            <input type="submit" value="Submit" />
          </form>
        </FormSection>
      </TopSection>
    </>
  )
}

export default StepsApi

const TopSection = styled.div`
  //   border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 600px;
`

const Button = styled.button`
  text-align: center;
  margin: 5px;
  width: 100px;
  height: 40px;
  background-color: #61dafb;
  border-radius: 30px;
  border: 1px dashed #20232a;
  color: #20232a;
`
const ButtonsDiv = styled.div`
  margin-top: 36px;
  display: flex;
`
const FormSection = styled.div`
  border: 1px solid black;
  background-color: #282c34;
  padding-top: 10px;
  padding-left: 50px;
  padding-bottom: 20px;
  border-radius: 20px;
  width: 300px;
  color: #61dafb;
  margin: 30px;
`
