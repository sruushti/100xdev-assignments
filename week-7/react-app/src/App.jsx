/* without context api

import {useState} from "react"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Count count={count}/>
      <Buttons count={count} setCount={setCount} />
    </div>
  )
}

function Count({count}) {
  return <div>
    {count}
  </div>
}

function Buttons({count, setCount}) {
  return <div>
    <button onClick = {() => {
      setCount(count+1)
    }}>Increase</button>
    <button onClick = {() => {
        setCount(count-1)
    }}>Decrease</button>
  </div>
}

export default App
*/


//using recoil

import {useState} from "react"
import { CountContext } from "./context";
import { useContext } from "react";
import { countAtom } from "./store/atoms/count";
import { RecoilRoot, useRecoilState } from "recoil";


function App() {


  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons  />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);

  return <div>
    {count}
  </div>
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom)
  return <div>
    <button onClick = {() => {
      setCount(count+1)
    }}>Increase</button>
    <button onClick = {() => {
        setCount(count-1)
    }}>Decrease</button>
  </div>
}

export default App
