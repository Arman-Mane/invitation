import React from 'react'
import "./confirm.scss"

const Confirm = () => {
  
  return (
    <div className="confirm-presence scrollAnim">
    <form action="">
      <h1 className="title">Խնդրում ենք հաստատել ձեր ներկայությունը</h1>

      <input type="text" className="name" placeholder="Անուն" />
      <select name="count" className="name" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <div className="yesOrNo">
        <label>
          <input type="radio" name="radio" />
          <span>Իհարկե Կգամ</span>
        </label>
        <label>
          <input type="radio" name="radio" />
          <span>Չեմ գա</span>
        </label>

        <button>Հաստատել</button>
      </div>
    </form>
  </div>
  )
}

export default Confirm
