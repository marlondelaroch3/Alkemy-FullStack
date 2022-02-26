import { useState } from "react";
import Lightbox from "../Lightbox/Lightbox.jsx";
import Input from "./Input.jsx";
import "./styles/form.sass";
import axios from "axios";

export default function FormToRegisterOperations() {
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState();
  function handleOnSubmit(event) {
    event.preventDefault();
    if (input) {
      axios
        .post("http://localhost:3001/registerOperation", input)
        .then(() => {
          setInput();
          setModal(true);
        })
        .catch((error) => {
          alert(error);
        });
    }
    event.target.reset();
  }

  return (
    <div className="containerForm">
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <Lightbox modal={modal} setModal={setModal} />
        <div className="containerInputs">
          <Input
            type="text"
            label="Concept:"
            name="concept"
            input={input}
            setInput={setInput}
          />
          <Input
            type="number"
            label="Amount:"
            name="amount"
            input={input}
            setInput={setInput}
          />
          <Input
            type="date"
            label="Date:"
            name="date"
            input={input}
            setInput={setInput}
          />
          <Input label="Type:" name="type" input={input} setInput={setInput} />
          <button className="btnSubmit" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
