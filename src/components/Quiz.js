import React from "react"

const Quiz = () => {
  return (
    <div>
      <h1>This is a quiz to check what level of salsa you have</h1>
      <form>
        <label>
          Full Name
          <input type="text" name="name" />
        </label>
      </form>
    </div>
  )
}

export default Quiz
