import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  let [inputText,setInputText] = useState("")
  let [list,setList] = useState([])

  let addItem = ()=>{
    let copyList = [...list]
    copyList.push(inputText)
    setList(copyList)
    // console.log(setList)

  }
  let handler = (e)=>{
    setInputText(e.target.value)
  }

  let delItem = (index)=>{
    let copyList = [...list]
    copyList.splice(index, 1)
    setList(copyList)
  }

  return (
    <>
      <input className="inp" onChange={handler} type="text" name="" id="" />
      <button className='addBtn' onClick={addItem}>Add Items</button>

    <ul>
      {
        list.map((data,index)=>{
          return(
            <li className='li' key={index}>
              {data} <button onClick={()=>delItem(index)}>Delete</button>
            </li>
          )
        })
      }
    </ul>
      
    </>
  )
}

export default App
