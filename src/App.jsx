import react, { useState } from "react";

function App() {
  // making state for weight and height
  const [Weight, setWeight] = useState("");
  const [Height, setHeight] = useState("");

  // making state for bmi and message
  const [bmi, setBmi] = useState("");
  const [Message, setMessage] = useState("");

  // logic of bmi calculator
  let calBmi = (e) => {
    e.preventDefault();
    if (Weight === 0 || Height === 0) {
      alert("Please Enter the Value");
    } else {
      let bmi = (Weight / (Height * Height)) * 703;
      setBmi(bmi.toFixed(1));
    }

    // over weight or under weight or normal weight or healthy weight
    if (bmi < 25) {
      setMessage("You are under Weight 😢");
    } else if (bmi >= 25 && bmi <= 29.9) {
      setMessage("You are healthy Weight 😊");
    } else {
      setMessage("You are Over Weight 😢 ");
    }
  };

  let Reload = (e) => {
    window.location.reload();
  };

  return (
    <div className="App flex min-h-screen items-center justify-center bg-orange-200">
      <div className="container flex flex-col max-w-md p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center bg-orange-400 rounded-lg text-white p-2 ">
          BMI Calculator
        </h2>
        <form action="" onSubmit={calBmi}>
          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700 font-medium mb-2">
              Weight (LBS):
            </label>
            <input
              type="text"
              placeholder="Enter Weight Value..."
              value={Weight}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 outline-none"
              onChange={(e) => setWeight(e.target.value)}
            />
            {/* w-full p-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-400 */}
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700 font-medium mb-2">
              Height (inch)
            </label>
            <input
              type="text"
              placeholder="Enter Height Value..."
              value={Height}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 outline-none"
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="flex space-x-10 justify-center items-center mt-5 mb-6 ">
            <button
              type="submit"
              className="py-2 px-4 rounded hover:bg-orange-600 transition duration-300  bg-orange-400"
            >
              Submit
            </button>
            <button
              className="py-2 px-4 rounded hover:bg-orange-600 transition duration-300  bg-orange-400"
              type="submit"
              onClick={Reload}
            >
              Reload
            </button>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">Your BMI is : {bmi}</h3>
            <p className="text-black text-lg">{Message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
