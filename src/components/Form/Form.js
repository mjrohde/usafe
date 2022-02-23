import React, { useState } from "react";
import "./Form.css";
import countries from "../../Countries";

function Form({ message }) {
  const [isFocus, setIsFocus] = useState({
    focusFirstName: false,
    focusLastName: false,
    focusEmail: false,
    focusPhone: false,
  });
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkFirstName, setCheckFirstName] = useState(false);
  const [checkLastName, setCheckLastName] = useState(false);
  const [checkTlf, setCheckTlf] = useState(false);

  function sendForm() {
    !checkEmail && alert("Emailen må inneholde '@' og '.com eller .no");
    !checkFirstName && alert("Fornavn kan ikke være tom");
    !checkLastName && alert("Etternavn kan ikke være tom");
    !checkTlf && alert("Telefonnummeret må være 8 siffer");
    let elements = [];
    elements = document.getElementsByClassName("input");
    for (var i = 0; i < elements.length; i++) {
      elements[i].value = "";
    }
  }

  function validateEmail(email) {
    !email.trim().includes(("@" && ".com") || ".no")
      ? setCheckEmail(false)
      : setCheckEmail(true);
  }

  function validatePhone(tlf) {
    tlf.trim().length === 8 ? setCheckTlf(true) : setCheckTlf(false);
  }

  function validateFirstName(name) {
    name.trim() === "" ? setCheckFirstName(false) : setCheckFirstName(true);
  }

  function validateLastName(name) {
    name.trim() == "" ? setCheckLastName(false) : setCheckLastName(true);
  }
  return (
    <div className="formContainer">
      <div className="formControl">
        <span className="formName">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "start",
            }}
          >
            <label htmlFor="firstname">
              First name*{" "}
              <span>
                {isFocus.focusFirstName
                  ? checkFirstName
                    ? ""
                    : "Kan ikke være tom"
                  : ""}
              </span>
            </label>
            <input
              type="text"
              className="input firstname"
              required
              onFocus={() =>
                setIsFocus({ focusFirstName: !isFocus.focusFirstName })
              }
              onChange={(e) => validateFirstName(e.target.value)}
              style={{
                borderBottom: isFocus.focusFirstName
                  ? checkFirstName
                    ? "1px solid green"
                    : "1px solid red"
                  : "1px solid white",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "start",
            }}
          >
            <label htmlFor="lastname">
              Last name*
              <span>
                {isFocus.focusLastName
                  ? checkLastName
                    ? ""
                    : " Kan ikke være tom"
                  : ""}
              </span>
            </label>
            <input
              type="text"
              className="input lastname"
              required
              onFocus={() =>
                setIsFocus({ focusLastName: !isFocus.focusLastName })
              }
              onChange={(e) => validateLastName(e.target.value)}
              style={{
                borderBottom: isFocus.focusLastName
                  ? checkLastName
                    ? "1px solid green"
                    : "1px solid red"
                  : "1px solid white",
              }}
            />
          </div>
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "start",
            width: "100%",
          }}
        >
          <label htmlFor="email">
            E-mail*
            <span>
              {isFocus.focusEmail
                ? checkEmail
                  ? ""
                  : " Må inneholde @ og enten .com eller .no"
                : ""}
            </span>
          </label>
          <input
            type="email"
            className="input email"
            required
            onFocus={() => setIsFocus({ focusEmail: !isFocus.focusEmail })}
            onChange={(e) => validateEmail(e.target.value)}
            style={{
              borderBottom: isFocus.focusEmail
                ? checkEmail
                  ? "1px solid green"
                  : "1px solid red"
                : "1px solid white",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "start",
            width: "100%",
          }}
        >
          <label htmlFor="tlf">
            Telefon*{" "}
            <span>
              {isFocus.focusPhone ? (checkTlf ? "" : " Må være 8 siffer") : ""}
            </span>
          </label>
          <input
            type="tlf"
            className="input tlf"
            required
            onFocus={() => setIsFocus({ focusPhone: !isFocus.focusPhone })}
            onChange={(e) => validatePhone(e.target.value)}
            style={{
              borderBottom: isFocus.focusPhone
                ? checkTlf
                  ? "1px solid green"
                  : "1px solid red"
                : "1px solid white",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "start",
            width: "100%",
          }}
        >
          {message ? (
            <>
              <label htmlFor="textarea">Melding</label>
              <textarea rows={4} cols={10} className="input textarea" />
            </>
          ) : (
            <>
              <label htmlFor="dropdown">Antall*</label>
              <select className="dropdown">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </>
          )}
        </div>
        <button className="btn-form" onClick={() => sendForm()}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Form;
