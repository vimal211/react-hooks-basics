import React, { useEffect, useState } from "react";

function Hooks() {
  // const [age, setAge] = useState(21);
  // const [siblings, setsibling] = useState(4);
  const [obj, setObj] = useState({ age: 21, siblings: 4 });
  const [count, setCount] = useState(0);

  const changeAge = () => {
    // setAge(age + 1);
    setObj((p) => {
      let age = obj.age;
      return { ...p, age: age + 1 };
    });
  };
  const changeSiblings = () => {
    // setsibling(siblings + 1);
    setObj((p) => {
      let sib = obj.siblings;
      return { ...p, siblings: sib + 1 };
    });
  };

  useEffect(() => {
    document.title = `You are ${obj.age} years old`;
  }, [obj.age]);

  return (
    <div>
      <h1>Today I am {obj.age} years old</h1>
      <h1>I've {obj.siblings} siblings</h1>
      <button onClick={changeSiblings}>More siblings</button>
      <button onClick={changeAge}>Get older</button>
      <h3>Count value is {count}</h3>
      <div className="btnCont">
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Plus(+)</button>
        <button onClick={() => setCount(count - 1)}>Minus(-)</button>
      </div>
    </div>
  );
}

export default Hooks;
