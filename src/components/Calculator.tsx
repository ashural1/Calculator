import React, { useState, ChangeEvent } from "react";

const Calculator: React.FC = () => {
  const [bill, setBill] = useState<number | string>("");
  const [tip, setTip] = useState<number>(0);
  const [people, setPeople] = useState<number>(1);

  const handleBillChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBill(e.target.value);
  };

  const handleTipChange = (value: number) => {
    setTip(value);
  };

  const handlePeopleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPeople(Number(e.target.value));
  };

  const calculateTipAmount = (): number => {
    if (!bill || !people) return 0;
    return (Number(bill) * (tip / 100)) / people;
  };

  const calculateTotalAmount = (): number => {
    if (!bill || !people) return 0;
    return (Number(bill) + calculateTipAmount() * people) / people;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#C5E4E7] flex-col p-10 ">
      <div>
        <h2 className="text-3xl text-teal-400 mono pb-5">
          SPLI <br />
          TTER
        </h2>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4 mono">Bill</h2>
            <input
              type="number"
              value={bill}
              onChange={handleBillChange}
              className="w-full p-2 rounded-lg border-2 bg-[#C5E4E7] mono  mb-4"
            />
            <h2 className="text-xl font-semibold mb-4">Select Tip %</h2>
            <div className="grid grid-cols-3 gap-4">
              {[5, 10, 15, 25, 50].map((value) => (
                <button
                  key={value}
                  onClick={() => handleTipChange(value)}
                  className={`p-2 rounded-lg ${
                    tip === value ? "bg-teal-500 text-white" : "bg-[#00474B] mono"
                  }`}
                >
                  {value}%
                </button>
              ))}
              <input
                type="number"
                placeholder="Custom"
                onChange={(e) => handleTipChange(Number(e.target.value))}
                className="w-full p-2 rounded-lg border-2 bg-[#C5E4E7] mono"
              />
            </div>
            <h2 className="text-xl font-semibold mb-4 mt-4">
              Number of People
            </h2>
            <input
              type="number"
              value={people}
              onChange={handlePeopleChange}
              className="w-full p-2 rounded-lg border-2 bg-[#C5E4E7] mono"
            />
          </div>
          <div className="bg-teal-800 text-white p-8 rounded-lg mono">
            <h2 className="text-lg mb-4 mono" >
              Tip Amount <span className="text-teal-300 mono">/ person</span>
            </h2>
            <p className="text-4xl mb-8 mono">${calculateTipAmount().toFixed(2)}</p>
            <h2 className="text-lg mb-4 mono">
              Total <span className="text-teal-300 mono">/ person</span>
            </h2>
            <p className="text-4xl mb-8 mono">
              ${calculateTotalAmount().toFixed(2)}
            </p>
            <button
              onClick={() => {
                setBill("");
                setTip(0);
                setPeople(1);
              }}
              className="w-full p-2 bg-teal-500 rounded-lg mono"
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
