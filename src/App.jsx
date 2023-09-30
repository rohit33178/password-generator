import { useState, useCallback, useEffect } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [useNumber, setUseNumber] = useState(false)
  const [useCharecter, setUseCharecter] = useState(false)
  const [password, setPassword] = useState("")
 
  const passwordGenerator = useCallback(() => {
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let number = "0123456789"
    let specialChar = "!@#$%^&"
    if(useNumber) str += number
    if(useCharecter) str += specialChar
    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1)
      password += str.charAt(char);
    }
    console.log(length)
    setPassword(password)

  }, [length, useNumber, useCharecter, setPassword])
  useEffect(() => {
    passwordGenerator()
  }, [length, useNumber, useCharecter])

  return (
    <div className="w-full h-screen bg-black p-5">
      <h1 className="text-4xl text-center text-yellow-400">Password Generator</h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-600">
        <div className="flex shadow-rounded-lg overflow-hidden mb-4">
          <input 
            type="text" 
            name="" 
            id="" 
            className="w-full p-2"
            readOnly={true}
            value={password}  
            onChange={() => {}}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 ">Copy</button>
        </div>
        <div className="flex gap-2 text-sm">
          <div className="flex item-center gap-x-1">
            <input type="range" 
            min={6} 
            max={36}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          
          <div className="flex item-center gap-x-1">
            <input 
              type="checkbox" 
              defaultChecked={useNumber ? true : false}
              value={useNumber}
              onChange={(e) => setUseNumber( prevNumber => !prevNumber)}
            />
            <label>Number</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input 
              type="checkbox" 
              defaultChecked={useCharecter ? true : false}
              value={useCharecter}
              onChange={(e) => setUseCharecter(prevCharecter => !prevCharecter)}
            />
            <label>Charecter</label>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
