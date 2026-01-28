import { useState } from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const today = new Date();

  const newDate = new Date(today);

  newDate.setDate(today.getDate() + count);

  const currentDate = newDate.getDate();

  const currentDayName = days[newDate.getDay()];

  const currentMonth = months[newDate.getMonth()];
  const currentYear = newDate.getFullYear();

  function incrementStep() {
    setStep((s) => s + 1);
  }

  function decrementStep() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function incrementCount() {
    setCount((c) => c + step);
  }

  function decrementCount() {
    setCount((c) => c - step);
  }

  function handleReset() {
    if (step > 1 || count > 0) {
      setCount((e) => (e = 0));
      setStep((e) => (e = 1));
    }
  }
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <main className="step">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />

        <Step
          step={step}
          incrementStep={incrementStep}
          decrementStep={decrementStep}
        />
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
      </main>
      <main className="count">
        <Count
          count={count}
          incrementCount={incrementCount}
          decrementCount={decrementCount}
        />
      </main>
      <main>
        <Datetime
          count={count}
          currentDayName={currentDayName}
          currentMonth={currentMonth}
          currentDate={currentDate}
          currentYear={currentYear}
        />

        <button onClick={handleReset}>Reset</button>
      </main>
    </section>
  );
}

function Step({ incrementStep, decrementStep, step }) {
  return (
    <article className="stepBox">
      {/* <span onClick={decrementStep} className="btn stepPrev">
        -
      </span> */}
      <span>
        <strong>Step: {step}</strong>
      </span>
      {/* <span onClick={incrementStep} className="btn stepNext">
        +
      </span> */}
    </article>
  );
}

function Count({ incrementCount, decrementCount, count }) {
  return (
    <article className="countBox">
      <span onClick={decrementCount} className="btn countPrev">
        -
      </span>
      <span>{/* <strong>Count: {count} </strong> */}</span>
      <span onClick={incrementCount} className="btn countNxt">
        +
      </span>
    </article>
  );
}

function Datetime({
  currentDayName,
  currentMonth,
  currentDate,
  currentYear,
  count,
}) {
  return (
    <article className="dateDisplay">
      <span>
        {count === 0
          ? "Today is"
          : count > 0
          ? `${count} days from Now`
          : count < 0
          ? `${Math.abs(count)} ago from Today is `
          : ""}
      </span>

      <span>
        {" "}
        {currentDayName} {currentMonth} {currentDate} {currentYear}
      </span>
    </article>
  );
}
