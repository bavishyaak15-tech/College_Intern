/*
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Courses />
      </main>

      <Footer />
    </>
  );
}

export default App;

*/
/*
//hook 
import {useState} from "react";
function App() {
  const[count,setCount] = [useState(0)];
  function increment(){
    setCount(count+1)
    console.log(count+1);
  }
  function decrement(){
    setCount(count-1);
    console.log(count-1);
  }
  return(
    <div>
    <h1>Count:{count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={()=>setCount(0)}>Reset</button>
    </div>
/*
    Arrow functions
    <div>
      <h1>Count:</h1>
      <button onClick={()=>{
        setCount(count+1)
        console.log(count+1);
      }}>Increment</button>
      <button onClick={()=>{
        setCount(count-1)
        console.log(count-1)
      }}>Decrement</button>
      <button> onClick={()=>{setCount(0)}}>Reset</button>
    </div>
*/


  /*return (
    <>
      
      <Student
        //name="Bavi"
        //age={19}
        //course="AIML"
        //name = "Johnn"
        //age = "19"
        //gender = "Male"
      />
  
      
    </>
  );
  */
/*
//Cricket Tournament
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [four, setFour] = useState(0);
  const [six, setSix] = useState(0);

  const addFour = () => {
    setScore((prevScore) => prevScore + 4);
    setFour((prevFour) => prevFour + 1);
  };

  const addSix = () => {
    setScore((prevScore) => prevScore + 6);
    setSix((prevSix) => prevSix + 1);
  };

  const reset = () => {
    setScore(0);
    setFour(0);
    setSix(0);
  };

  return (
    <div>
      <h1>CRICKET TOURNAMENT</h1>

      <h1>{score}</h1>
      <p>TOTAL RUNS</p>

      <h2>
        {four} FOURS | {six} SIXES
      </h2>

      <button onClick={addFour}>+4 FOUR</button>
      <button onClick={addSix}>+6 SIX</button>
      <button onClick={reset}>RESET SCORE</button>
    </div>
  );
}

export default App;
*/
/*
//1.without dependency array 
import {useEffect,useState} from "react";                //fetching data and display the output
function App(){
  const[count,setCount] = useState(0);

  //it will run at initial render after every subsequent render 
  
  useEffect(()=>{                                            // API call
    console.log("Use Effect is working");
  })
  return(
    <div>
      <h1>"Hello bavi"</h1>
    </div>
  )
}
export default App;
*/
/*
//2.with dependency array 
//it will run at initial render again it will never render
import {useEffect,useState} from "react";                //fetching data and display the output
function App(){
  const[count,setCount] = useState(0);
  useEffect(()=>{                                            // API call
    console.log("Use Effect is working");
  },[])
  return(
    <div>
      <h1>"Hello bavi"</h1>
    </div>
  )
}
export default App;
*/

//3.Dependency array with value
//it will run at initial render , if we update the count then it will render
import {useEffect,useState} from "react";                //fetching data and display the output
function App(){
  const[count,setCount] = useState(0);
  useEffect(()=>{                                            // API call
    console.log("Use Effect is working");
  },[count])
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}
export default App;

/*
//Modifying the tab name
import {useEffect,useState} from "react";                //fetching data and display the output
function App(){
  const[count,setCount] = useState(0);
  useEffect(()=>{                                            // API call
    document.title="React"                                  //changing the browser tab name 
  },[])
  return(
    <div>
      <h1>Hello</h1>
    </div>
  )
}
export default App;
*/
