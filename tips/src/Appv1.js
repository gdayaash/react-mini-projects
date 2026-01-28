import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [tip, setTip] = useState(15);
  const [bill, setBill] = useState(0);

  function handleBill(e) {
    setBill(Number(e.target.value));
  }

  function totalBill(bill, tip) {
    let billAmount = bill;
    let totalTip = tip.reduce((prev, tip) => {
      return prev + tip;
    }, 0);
    let averageTip = totalTip / 2;
    let overallBill = billAmount + (billAmount * averageTip) / 100;
    console.log(overallBill);
    return overallBill;
  }

  useEffect(() => {
    console.log(bill);
  }, [bill]);

  return (
    <section>
      <h1>Tip Calculator</h1>
      <Tipform
        billData={handleBill}
        tip={tip}
        bill={bill}
        tipChange={setTip}
        totalBill={totalBill}
      />
    </section>
  );
}

//=== Controlled Elements to the rescue ===

function Tipform({ billData, tip, bill, tipChange, totalBill }) {
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
            onChange={billData}
          />
        </aside>
        <Tip tip={tip} tipChange={tipChange}>
          Your Opinion
        </Tip>
        <Tip tip={tip} tipChange={tipChange}>
          Friend's Opinion
        </Tip>
        {bill !== 0 ? (
          <aside>
            <ul>
              <li>Bill Amount: {bill}</li>
              <li>Your Tip: </li>
              <li>Friend's Tip: </li>
              <li>Total Bill Amount: {totalBill}</li>
            </ul>
          </aside>
        ) : (
          ""
        )}
        <aside>
          <button onSubmit={totalBill}>Submit</button>
        </aside>
      </form>
    </main>
  );
}

function Tip({ children, tip, tipChange }) {
  return (
    <aside>
      <label htmlFor="priOp">{children}</label>
      <select
        name="ratingSelf"
        id="priOp"
        value={tip}
        onChange={(e) => tipChange(Number(e.target.value))}
      >
        <option value={15}>Excellant</option>
        <option value={10}>Good</option>
        <option value={5}>Okay</option>
        <option value={0}>Bad</option>
      </select>
    </aside>
  );
}
