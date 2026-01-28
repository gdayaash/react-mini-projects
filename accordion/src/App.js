import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import React from "react";

const data = [
  {
    question: "What is Your Name ?",
    answer: "Dayaash G",
    id: 1,
  },
  {
    question: "When you will comeback ?",
    answer: "January 1 2026",
    id: 2,
  },
  {
    question: "How confident are you ?",
    answer: "Very Confident",
    id: 3,
  },
];

export default function App() {
  const [openId, setOpenId] = useState(null);
  function handleToggle(id) {
    setOpenId((prev) => (prev === id ? null : id));
    console.log(id);
  }
  return (
    <section>
      <h1>Know About me !</h1>
      <ul>
        <Accordion data={data} toggle={handleToggle} accId={openId} />
      </ul>
    </section>
  );
}

function Accordion({ data, toggle, accId }) {
  return (
    <li>
      {data.map((e, index) => (
        <React.Fragment key={e.id}>
          <Question toggle={toggle} id={e.id}>
            {index + 1} {e.question}
          </Question>

          {accId === e.id ? (
            <Answer toggle={toggle} id={e.id}>
              {e.answer}
            </Answer>
          ) : (
            " "
          )}
        </React.Fragment>
      ))}
    </li>
  );
}

function Question({ children, toggle, id }) {
  return (
    <div
      style={{
        fontSize: "24px",
        backgroundColor: "lightgreen",
        color: "#fff",
        padding: "12px 8px",
        borderRadius: "4px",
        display: "flex",
        justifyContent: "space-between",
        gap: "24px",
        margin: "8px 0px",
      }}
    >
      <span>{children}</span>
      <span>
        <FontAwesomeIcon icon={faChevronDown} onClick={() => toggle(id)} />
      </span>
    </div>
  );
}

function Answer({ children, toggle, id }) {
  return (
    <div
      style={{
        backgroundColor: "#4cad4c",
        padding: "4px 10px",
        color: "#fff",
        fontSize: "18px",
        borderRadius: "4px",
        display: "flex",
        justifyContent: "space-between",
        gap: "24px",
        margin: "8px 0px",
      }}
    >
      <span>{children}</span>
      <span>
        <FontAwesomeIcon icon={faChevronUp} onClick={() => toggle(id)} />
      </span>
    </div>
  );
}
