import React, { useState } from "react"
import styled from "styled-components"

const Quiz = () => {
  const [name, setName] = useState("")

  const nameFunc = (event) => {
    setName(event.target.value)
  }

  return (
    <div>
      <h1>This is a quiz to check what level of salsa you have</h1>
      <form>
        <h2> Hey {name}</h2>
        <label>
          Full Name
          <input type="text" name="name" onChange={nameFunc} />
        </label>
      </form>
      <Card></Card>
    </div>
  )
}

export default Quiz

const Card = styled.div`
  margin: 30px auto 0 auto;
  height: 500px;
  width: 300px;
  border: 1px solid red;
`
