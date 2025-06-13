import React from "react";
import "./confirm.css";
import { useState } from "react";
import axios from "axios";

function Confirm() {
  const [formData, setFormData] = useState({
    name: "",
    coming: "",
    count: "1",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "coming" && value === "no") {
      setFormData((prev) => ({
        ...prev,
        count: 1,
        [name]: value,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.coming) {
      alert("Խնդրում ենք լրացնել բոլոր դաշտերը");
      return;
    }
    console.log("formData:", formData);

    try {
      await axios.post("http://localhost:5000/addGuests", formData);
      alert("Ձեր պատասխանը ստացվել է 🙏");
      setFormData({ name: "", coming: "", count: "1" })
    } catch (err) {
      alert("Սխալ առաջացավ, փորձեք կրկին");
      console.error(err);
    }
  };

  return (
    <footer>
      <h2>Հաստատեք ձեր ներկայությունը</h2>
      <div className="confirm">
        <div className="input">
          <input
            type="text"
            id="guestName"
            name="name"
            autoComplete="off"
            placeholder="Գրեք ձեր անուն ազգանունը"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="yesNo">
          <label>
            <input
              type="radio"
              value="yes"
              name="coming"
              checked={formData.coming === "yes"}
              onChange={handleChange}
              required
            />
            Գալու եմ
          </label>
          <label>
            <input
              type="radio"
              value="no"
              name="coming"
              checked={formData.coming === "no"}
              onChange={handleChange}
              required
            />
            Չեմ կարող գալ
          </label>
        </div>

        <div
          className="select"
          style={{ height: `${formData.coming === "yes" ? "30px" : 0}` }}
        >
          <h3>Նշեք հյուրերի քանակը</h3>
          <select
            name="count"
            value={formData.count}
            onChange={handleChange}
            disabled={formData.coming !== "yes"}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <button className="confBtn" onClick={handleSubmit}>
          Հաստատել
        </button>
      </div>
    </footer>
  );
}

export default Confirm;
