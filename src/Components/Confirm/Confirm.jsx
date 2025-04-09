import React from "react";
import "./Comfirm.css";
const Confirm = () => {
  return (
    <footer>
      <h2>Հաստատեք ձեր ներկայությունը</h2>
      <div class="confirm">
        <div class="input">
          <input
            type="text"
            required
            id="guestName"
            placeholder="Գրեք ձեր անուն ազգանունը"
          />
        </div>
        <div class="yesNo">
          <label for="yes">
            
            <input type="radio" required value="yes" name="yesno" id="yes" />
            Գալու եմ
          </label>
          <label for="no">
            
            <input type="radio" required value="no" name="yesno" id="no" /> Չեմ
            կարող գալ
          </label>
        </div>

        <div class="select">
          <h3>Նշեք հյուրերի քանակը</h3>
          <select name="count" id="guestCount" disabled>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <button class="confBtn" id="sendEmail">
          Հաստատել
        </button>
      </div>
    </footer>
  );
};

export default Confirm;
