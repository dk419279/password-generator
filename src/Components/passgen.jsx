import React, { useState } from "react";
import "./passgen.css";

const PassGen = () => {
  const [length, setLength] = useState("");
  const [capital, setCapital] = useState("");
  const [special, setSpecial] = useState("");
  const [numbers, setNumbers] = useState("");
  const [generatedPass, setGeneratedPass] = useState("");

  var lettersLower = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  var lettersCap = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var specialCharList = [
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ];

  var caseBi = false;
  var specialBi = false;
  var numberBi = false;
  var allYes = [];

  const userInput = () => {
    if (capital) {
      caseBi = true;
    }
    if (special) {
      specialBi = true;
    }
    if (numbers) {
      numberBi = true;
    }
  };

  const passLogic = () => {
    if (caseBi == true && specialBi == true && numberBi == true) {
      allYes = [
        ...lettersLower,
        ...lettersCap,
        ...specialCharList,
        ...numberList,
      ];
    } else if (caseBi == false && specialBi == false && numberBi == false) {
      allYes = [...lettersLower];
    } else if (caseBi == true && specialBi == true && numberBi == false) {
      allYes = [...lettersLower, ...lettersCap, ...specialCharList];
    } else if (caseBi == true && specialBi == false && numberBi == false) {
      allYes = [...lettersLower, ...lettersCap];
    } else if (caseBi == false && specialBi == true && numberBi == true) {
      allYes = [...lettersLower, ...specialCharList, ...numberList];
    } else if (caseBi == false && specialBi == false && numberBi == true) {
      allYes = [...lettersLower, ...numberList];
    } else if (caseBi == false && specialBi == true && numberBi == false) {
      allYes = [...lettersLower, ...specialCharList];
    } else if (caseBi == true && specialBi == false && numberBi == true) {
      allYes = [...lettersLower, ...lettersCap, ...numberList];
    }
  };

  const randomPassFun = () => {
    let randomPass = "";
    for (let i = 0; i < length; i++) {
      let randomIdx = Math.floor(Math.random() * allYes.length);
      console.log(randomIdx);
      let randomChar = allYes[randomIdx];
      randomPass += randomChar;
    }
    setGeneratedPass(randomPass);
  };

  // const checkHandler = () => {
  //   select;
  // };

  return (
    <div>
      <form>
        <label>
          Enter password length number:
          <input
            className="lengthClass"
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </label>
      </form>
      <form>
        <label>
          Caps included? Yes or No:
          <input
            className="capClass"
            type="checkbox"
            value={capital}
            onChange={(e) => setCapital(e.target.checked)}
          />
        </label>
      </form>
      <form>
        <label>
          Special characters? Yes or No:
          <input
            className="specialClass"
            type="checkbox"
            value={special}
            onChange={(e) => setSpecial(e.target.checked)}
          />
        </label>
      </form>
      <form>
        <label>
          Do you want numbers?
          <input
            className="numberClass"
            type="checkbox"
            value={numbers}
            onChange={(e) => setNumbers(e.target.checked)}
          />
        </label>
      </form>
      <button
        type="button"
        onClick={function () {
          userInput();
          passLogic();
          randomPassFun();
          console.log(allYes);
        }}
      >
        Generate Password
      </button>
      <p className="passBox">Password: {generatedPass}</p>
    </div>
  );
};

export default PassGen;
