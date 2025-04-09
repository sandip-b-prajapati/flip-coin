import React, { useEffect, useState } from "react";

const Coin = ["Heads", "Tails"];
function FlipCoin() {
  const [coinFlipResult, setCoinFlipResult] = useState("");
  const [headInput, setHeadsInput] = useState("");
  const [tailsInput, setTailsInput] = useState(0);
  const [factorialNumber, setFactorialNumber] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("white");
  const handleFlipCoin = () => {
    let randomNumber = Math.random();
    const result = randomNumber.toFixed();
    setCoinFlipResult(Coin[result]);
    setHeadsInput("");
    setTailsInput(0);
  };

  const getFactorialNumber = (num) => {
    let val = num;
    for (let i = num - 1; i > 1; i--) {
      val = val * i;
    }
    return val;
  };
  const handlePalidromeString = () => {
    const strArray = headInput.split("");
    const reverseString = strArray.reverse().join("");
    const isPalindrome =
      headInput.toLowerCase() === reverseString.toLowerCase();
    isPalindrome ? setBackgroundColor("green") : setBackgroundColor("red");
  };

  const handleFactorialNumber = () => {
    if (tailsInput <= 0) {
      setBackgroundColor("red");
      return;
    }
    const result = getFactorialNumber(tailsInput);
    setFactorialNumber(result);
    setBackgroundColor("green");
  };
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        width: "100vw",
        height: "100vh",
      }}
    >
      <div>Flip The Coin</div>
      <div>{coinFlipResult}</div>
      {coinFlipResult === Coin[0] && (
        <div>
          <div> Enter String: </div>
          <input
            type="text"
            onChange={(e) => {
              const result = e.target.value;
              setHeadsInput(result);
            }}
          />
          <button onClick={handlePalidromeString}>
            Check Palindrome String
          </button>
        </div>
      )}
      {coinFlipResult === Coin[1] && (
        <div>
          <div>Enter Number: </div>
          <input
            type="number"
            onChange={(e) => {
              const result = e.target.value;
              setTailsInput(parseInt(result));
            }}
          />
          <div>Factorial number is : {factorialNumber}</div>
          <button onClick={handleFactorialNumber}>
            Find Factorial of Number
          </button>
        </div>
      )}
      <button onClick={handleFlipCoin}>Flip Coin</button>
    </div>
  );
}

export default FlipCoin;
