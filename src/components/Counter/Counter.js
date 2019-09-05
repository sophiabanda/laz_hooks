import React, { useContext, useEffect } from "react";
import { AppContext, AppContextProvider } from "../../context/AppContext";

const Counter = () => {
  const { counter, setCounter } = useContext(AppContext);

  useEffect(() => {
    console.log("Counter Mounted!")
    const interval = setInterval(() => {
      setCounter(prevState => prevState + 1)

    }, 1000 )
    return () => {
      console.log("Counter Unmounted!")
      clearInterval(interval)
      setCounter(0)
    }
  }, [setCounter])

  return (
  <div>
    <h1>Let's count nothing.</h1>
    <h2>{counter}</h2>
  </div>
  )
}

export default Counter;
