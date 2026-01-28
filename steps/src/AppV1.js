import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

//This is an Example of Each component has its own state
export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}
// The Above component has Steps component twice though it return two times the Steps Component both will not mix with each other states
// To check that if you run it change or close the component only the component selected will be closing another one will be still.

function Steps() {
  // const step = 1;
  const [step, setStep] = useState(1);

  //Open Close Tracking
  const [isOpen, setIsOpen] = useState(true);

  // const [test, setTest] = useState({ name: "x" });
  //For useState structure I consoled it
  // console.log(useState(0));

  function handlePrevious() {
    //bad way of updating state
    // if (step > 1) setStep(step - 1);
    //good way of updating state should be done with call back function as below
    if (step - 1) setStep((s) => s - 1);
  }
  function handleNext() {
    //bad way of updating state
    // if (step < 3) setStep(step + 1);
    //good way of updating state should be done with call back function as below
    if (step < 3) setStep((s) => s + 1);

    //Bad Practice
    // test.name = "Dayaash";

    // Good Practice
    // setTest({ name: "Dayaash" });
  }

  function closeBox() {
    setIsOpen((s) => !s);
  }

  return (
    <>
      <button className="close" onClick={closeBox}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step: {step} {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
