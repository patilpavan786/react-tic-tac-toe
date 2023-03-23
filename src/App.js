import React, { useEffect, useState } from "react";
import "./style.css";

export default function App() {
  const button = [
    { value: "", id: 1, disabled: false },
    { value: "", id: 2, disabled: false },
    { value: "", id: 3, disabled: false },
    { value: "", id: 4, disabled: false },
    { value: "", id: 5, disabled: false },
    { value: "", id: 6, disabled: false },
    { value: "", id: 7, disabled: false },
    { value: "", id: 8, disabled: false },
    { value: "", id: 9, disabled: false }
  ];
  const [list, setList] = useState(button);
  const [user, setUser] = useState("X");
  const [winner, setWinner] = useState("");

  function handleClick(x) {
    setUser(user === "X" ? "O" : "X");
    x.value = user;
    x.disabled = true;
    setList([...list]);
  }

  useEffect(() => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (
        list[a].value &&
        list[a].value === list[b].value &&
        list[a].value === list[c].value
      ) {
        setWinner(list[a].value);
        return;
      }
    }

    if (list.every((button) => button.value !== "")) {
      setWinner("draw");
    }
  }, [list]);
  useEffect(() => {
    if (winner) {
      alert(`${winner} wins!`);
      setList(button);
      setUser("X");
    }
  }, [winner]);

  return (
    <>
      <div className="main">
        <h2>Tic Tac Toe </h2>
        <div className="App">
          {list.map((x, i) => (
            <div key={x.id} className="board">
              <button
                style={{ backgroundColor: x?.value === "O" ? "blue" : "" }}
                disabled={x.disabled}
                onClick={() => handleClick(x)}
              >
                {x.value}
              </button>
            </div>
          ))}
        </div>
       
      </div>
    </>
  );
}
