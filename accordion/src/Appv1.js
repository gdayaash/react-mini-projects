import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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

  function toggleAccordion(id) {
    setOpenId((prev) => (prev === id ? null : id));
  }
  return (
    <main>
      <h1>Accordion Exercise</h1>
      <Accordion toggle={toggleAccordion} open={openId} />
    </main>
  );
}

function Accordion({ toggle, open }) {
  return (
    <article>
      <Question data={data} toggle={toggle} open={open} />
    </article>
  );
}

function Question({ data, toggle, open }) {
  return (
    <ul>
      {data.map((x, index) => (
        <li key={x.id}>
          <aside className="questions">
            <span>{"0" + (index + 1) + " " + x.question} </span>
            <span>
              <FontAwesomeIcon
                className="drop-Down"
                icon={faChevronDown}
                onClick={() => toggle(x.id)}
              />
            </span>
          </aside>
          {open === x.id && (
            <aside className="answers">
              <span>{x.answer}</span>
            </aside>
          )}
        </li>
      ))}
    </ul>
  );
}
