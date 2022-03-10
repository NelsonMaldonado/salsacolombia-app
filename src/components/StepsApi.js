import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"

// const fetchData = () => {
//   return axios
//     .get("https://backend-salsacolombia.herokuapp.com/api/catalog")
//     .then((res) => {
//       console.log(res.data)
//       return res.data
//     })
//     .catch((err) => {
//       console.error(err)
//     })
// }

const StepsApi = () => {
  //   const [steps, setSteps] = useState([])
  const [form, setForm] = useState({ stepname: "", website: "" })

  //   useEffect(() => {
  //     fetchData()
  //   }, [])

  //   const loadSteps = () => {
  //     console.log("loading api")
  //     fetchData()
  //       .then((res) => {
  //         setSteps(res)
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //   }

  //   const loadRandomStep = () => {
  //     console.log("loading random step")
  //   }

  //   const reset = () => {
  //     console.log("clearing page")
  //   }

  const handleSubmit = (event) => {
    alert(`Your step was added to the list: + ${form}`)
    event.preventDefault()
  }

  const handleOnChange = (event) => {
    const { stepname, website } = event.target
    setForm({ ...form })
  }

  return (
    <>
      <TopSection>
        <ButtonsDiv>
          {/* <Button onClick={loadSteps}>Load Steps</Button> */}
          {/* <Button onClick={loadRandomStep}>Load Steps</Button>
          <Button onClick={reset}>Clear Page</Button> */}
        </ButtonsDiv>

        {/* {steps.map((step, idx) => (
          <div key={idx}>
            <h4>
              <span>{step.id} </span>
              {step.stepname}
            </h4>
          </div>
        ))} */}

        <FormSection>
          <form onSubmit={handleSubmit}>
            <label>
              <h3>Step Name</h3>
              {form}
              <input
                type="text"
                name="stepname"
                value={form.stepname}
                onChange={handleOnChange}
              ></input>
            </label>
            <label>
              <h3>Website</h3>
              <input type="text" name="website" value={form.website}></input>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </FormSection>
      </TopSection>
    </>
  )
}

export default StepsApi

const TopSection = styled.div`
  border: 1px solid red;
  display: flex;
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
  background-color: white;
  border-radius: 30px;
`
const ButtonsDiv = styled.div`
  display: flex;
`
const FormSection = styled.div`
  border: 1px solid blue;
`
