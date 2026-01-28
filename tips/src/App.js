import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [tip, setTip] = useState({ you: 10, friend: 10 });
  const [bill, setBill] = useState(0);

  function billAmount(e) {
    setBill(Number(e.target.value));
  }

  useEffect(() => {
    console.log(bill);
  }, [bill]);

  function tipChange(role, value) {
    setTip((prev) => ({
      ...prev,
      [role]: value,
    }));
  }

  useEffect(() => {
    console.log(tip);
  }, [tip]);

  let totalAmount = () => {
    let totalTip = (tip.you + tip.friend) / 2;
    let totalTipPercentage = (bill * totalTip) / 100;
    let finalBill = bill + totalTipPercentage;
    return Math.round(finalBill);
  };

  function reset() {
    setBill(0);
    setTip({ you: 10, friend: 10 });
  }

  return (
    <section>
      <h1>Tip Calculator</h1>
      <Tipform
        bill={bill}
        onBillChange={billAmount}
        tip={tip}
        tipChange={tipChange}
        totalAmount={totalAmount}
        reset={reset}
      />
    </section>
  );
}

//=== Controlled Elements to the rescue ===

function Tipform({ bill, tip, onBillChange, tipChange, totalAmount, reset }) {
  return (
    <main>
      <form className="form-control" onSubmit={(e) => e.preventDefault()}>
        <legend>Tell us Your Experience to process the bill</legend>
        <aside>
          <label htmlFor="billAmount">Bill Amount:</label>
          <input
            type="number"
            name="billAmount"
            id="billAmount"
            value={bill}
            onChange={onBillChange}
          />
        </aside>
        <Tip
          label="Your Opinion"
          value={tip.you}
          onChange={(val) => tipChange("you", val)}
        />

        <Tip
          label="Friend's Opinion"
          value={tip.friend}
          onChange={(val) => tipChange("friend", val)}
        />
        {bill !== 0 ? (
          <aside>
            <ul>
              <li>Bill Amount: {bill}</li>
              <li>Your Tip: {tip.you}</li>
              <li>Friend's Tip: {tip.friend}</li>
              <li>Total Bill Amount: {totalAmount()}</li>
            </ul>
          </aside>
        ) : (
          ""
        )}
        <aside>
          <button onClick={reset}>Reset</button>
        </aside>
      </form>
    </main>
  );
}

function Tip({ label, value, onChange }) {
  return (
    <aside>
      <label>{label}</label>
      <select value={value} onChange={(e) => onChange(Number(e.target.value))}>
        <option value={15}>Excellent</option>
        <option value={10}>Good</option>
        <option value={5}>Okay</option>
        <option value={0}>Bad</option>
      </select>
    </aside>
  );
}
