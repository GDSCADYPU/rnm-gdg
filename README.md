
# React Project 
    

### 1. Update App.jsx

```javascript
function App() {

  return (
    <>
      <h1 className="text-red-500">Rick and Morty</h1>
    </>
  )
}

export default App

```

### 2. Update App.jsx
At this point, we can now see the data in the console tab.

```javascript
import { useEffect } from "react"

function App() {

  const BASE_URL = 'https://rickandmortyapi.com/api'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/character`)
        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])


  return (
    <>
      <h1 className="text-red-500">Rick and Morty</h1>
    </>
  )
}

export default App

```

### 3. Update App.jsx
Now we're saving the response from the API in a state.

```javascript
import { useEffect, useState } from "react"

function App() {

  const BASE_URL = 'https://rickandmortyapi.com/api'

  const [character, setCharacter] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/character`)
        const data = await response.json()
        // console.log(data)
        setCharacter(data.results[0])
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  console.log(character)


  return (
    <>
      <h1 className="text-red-500">Rick and Morty</h1>
    </>
  )
}

export default App
```

### 4. Update App.jsx
This code contains the header section of the website with a background gradient, logo and search box.

Download Rick and Morty Logo from [Logo Image Link](https://logolook.net/rick-and-morty-logo/) and place it inside the **ASSETS** folder.

```javascript
import { useEffect, useState } from "react"
import logo from "./assets/image.png"

function App() {

  const BASE_URL = 'https://rickandmortyapi.com/api'

  const [character, setCharacter] = useState(null)
  const [input, setInput] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/character`)
        const data = await response.json()
        // console.log(data)
        setCharacter(data.results[0])
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  // console.log(character)


  return (
    <>
      <div className="overflow-x-hidden h-screen w-screen px-5 bg-gradient-to-b from-[#304e45] to-[#84d2d7]">

        <header className="flex flex-row justify-between">
          <div className="flex-1"></div>
          <img src={logo} alt="logo" className="w-96 h-64 flex-1" />
          <form className="flex justify-end items-center gap-5 flex-1">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              className=" rounded-lg text-lg pl-3 py-1 bg-white"
              placeholder="Rick Sanchez..."
            />

            <button type='submit' className=' bg-white py-1 px-4 rounded-lg'>
              <p className="text-md">Search</p>
            </button>
          </form>
        </header>

      </div>
    </>
  )
}

export default App
```

### 5. Update App.jsx
When searching for a character, an object is printed out on the console containing all the characters with that string (character name).

```javascript
import { useEffect, useState } from "react"
import logo from "./assets/image.png"

function App() {

  const BASE_URL = 'https://rickandmortyapi.com/api'

  const [allCharacters, setAllCharacters] = useState(null)
  const [character, setCharacter] = useState(null)
  const [input, setInput] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/character`)
        const data = await response.json()
        // console.log(data)
        setCharacter(data.results[0])
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const fetchCharacters = async (e) => {
    e.preventDefault(0)
    const url = `${BASE_URL}/character?name=${input}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      setAllCharacters(data.results)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <div className="overflow-x-hidden h-screen w-screen px-5 bg-gradient-to-b from-[#304e45] to-[#84d2d7]">

        <header className="flex flex-row justify-between">
          <div className="flex-1"></div>
          <img src={logo} alt="logo" className="w-96 h-64 flex-1" />
          <form onSubmit={fetchCharacters} className="flex justify-end items-center gap-5 flex-1">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              className=" rounded-lg text-lg pl-3 py-1 bg-white"
              placeholder="Rick Sanchez..."
            />

            <button type='submit' className=' bg-white py-1 px-4 rounded-lg cursor-pointer'>
              <p className="text-md">Search</p>
            </button>
          </form>
        </header>

        {character && (
          <div className="flex items-center justify-center flex-col">
            <div className=" p-8 rounded-3xl shadow-md flex flex-row gap-7 bg-[#c0ccd3]">
              <img src={character.image} alt={character.name} className="rounded-xl shadow-lg shadow-[#3d6055] " />
              <div className="flex flex-col justify-around flex-1">
                <p className="text-3xl text-center font-bold mt-6">{character.name}</p>
                <div className="flex justify-center flex-col text-center">
                  <p className="text-gray-500 text-xl">{character.description}</p>
                  <p className="text-gray-500 text-xl">Status: {character.status}</p>
                  <p className="text-gray-500 text-xl">Gender: {character.gender}</p>
                  <p className="text-gray-500 text-xl">Species: {character.species}</p>
                  <p className="text-gray-500 text-xl">Location: {character.location.name}</p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  )
}

export default App

```

### 6. Create component Card.jsx
Create a folder name **components** inside the *src* folder. Create a file named **Card.jsx** inside the newly created components folder.

```javascript
function Card({ character }) {
    return (
        <>
            {
                character && (

                    <div className=" p-8 rounded-3xl shadow-md flex flex-row gap-7 bg-[#c0ccd3]">
                        <img src={character.image} alt={character.name} className="rounded-xl shadow-lg shadow-[#3d6055] " />
                        <div className="flex flex-col justify-around flex-1">
                            <p className="text-3xl text-center font-bold mt-6">{character.name}</p>
                            <div className="flex justify-center flex-col text-center">
                                <p className="text-gray-500 text-xl">{character.description}</p>
                                <p className="text-gray-500 text-xl">Status: {character.status}</p>
                                <p className="text-gray-500 text-xl">Gender: {character.gender}</p>
                                <p className="text-gray-500 text-xl">Species: {character.species}</p>
                                <p className="text-gray-500 text-xl">Location: {character.location.name}</p>
                            </div>
                            <div></div>
                        </div>
                    </div>

                )
            }
        </>
    )
}

export default Card
```

Update App.jsx

```javascript
import { useEffect, useState } from "react"
import logo from "./assets/image.png"
import Card from "./components/Card"

function App() {

  const BASE_URL = 'https://rickandmortyapi.com/api'

  const [allCharacters, setAllCharacters] = useState(null)
  const [character, setCharacter] = useState(null)
  const [input, setInput] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/character`)
        const data = await response.json()
        // console.log(data)
        setCharacter(data.results[0])
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const fetchCharacters = async (e) => {
    e.preventDefault(0)
    const url = `${BASE_URL}/character?name=${input}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      setAllCharacters(data.results)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <div className="overflow-x-hidden h-screen w-screen px-5 bg-gradient-to-b from-[#304e45] to-[#84d2d7]">

        <header className="flex flex-row justify-between">
          <div className="flex-1"></div>
          <img src={logo} alt="logo" className="w-96 h-64 flex-1" />
          <form onSubmit={fetchCharacters} className="flex justify-end items-center gap-5 flex-1">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              className=" rounded-lg text-lg pl-3 py-1 bg-white"
              placeholder="Rick Sanchez..."
            />

            <button type='submit' className=' bg-white py-1 px-4 rounded-lg cursor-pointer'>
              <p className="text-md">Search</p>
            </button>
          </form>
        </header>

        <div className="flex items-center justify-center flex-col">
          {character && (
            <Card character={character} key={character.id} />
          )}
        </div>

      </div>
    </>
  )
}

export default App

```

### 7. Update App.jsx
Conditionally rendering a character card or the results of a search query.

```javascript
import { useEffect, useState } from "react"
import logo from "./assets/image.png"
import Card from "./components/Card"

function App() {

  const BASE_URL = 'https://rickandmortyapi.com/api'

  const [allCharacters, setAllCharacters] = useState(null)
  const [character, setCharacter] = useState(null)
  const [input, setInput] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/character`)
        const data = await response.json()
        // console.log(data)
        setCharacter(data.results[0])
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const fetchCharacters = async (e) => {
    e.preventDefault(0)
    const url = `${BASE_URL}/character?name=${input}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      setAllCharacters(data.results)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <div className="overflow-x-hidden h-screen w-screen px-5 bg-gradient-to-b from-[#304e45] to-[#84d2d7]">

        <header className="flex flex-row justify-between">
          <div className="flex-1"></div>
          <img src={logo} alt="logo" className="w-96 h-64 flex-1" />
          <form onSubmit={fetchCharacters} className="flex justify-end items-center gap-5 flex-1">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              className=" rounded-lg text-lg pl-3 py-1 bg-white"
              placeholder="Rick Sanchez..."
            />

            <button type='submit' className=' bg-white py-1 px-4 rounded-lg cursor-pointer'>
              <p className="text-md">Search</p>
            </button>
          </form>
        </header>

        {input
          ? (
            <div className='grid grid-cols-2 gap-3'>
              {allCharacters && allCharacters.length > 0 && (
                allCharacters.map(character => (
                  <Card character={character} key={character.id} />
                ))

              )}
            </div>
          )
          : (
            <div className="flex items-center justify-center flex-col">
              {character && (
                <Card character={character} key={character.id} />
              )}
            </div>
          )
        }

      </div>
    </>
  )
}

export default App

```

### 8. Update App.jsx
Fix.

```javascript
import { useEffect, useState } from "react"
import Card from "./components/Card"
import logo from "./assets/image.png"


function App() {

  const [allCharacters, setAllCharacters] = useState(null)
  const [character, setCharacter] = useState(null)
  const [input, setInput] = useState('')

  const BASE_URL = 'https://rickandmortyapi.com/api'

  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await fetch(`${BASE_URL}/character`)
        const data = await response.json()
        console.log(data)
        setCharacter(data.results[0])
      } catch (error) {
        console.log(error)
      }

    }

    fetchData()

  }, [])

  useEffect(() => {
    if (!input) {
      setAllCharacters(null)
    }
  }, [input])

  const fetchCharacters = async (e) => {
    e.preventDefault(0)
    const url = `${BASE_URL}/character?name=${input}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      setAllCharacters(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="overflow-x-hidden h-screen w-screen px-5 bg-gradient-to-b from-[#304e45] to-[#84d2d7]">

        {/* using form only for accessibility and feature of pressing 'Enter' to submit */}

        <header className="flex flex-row justify-between">
          <div className="flex-1"></div>
          <img src={logo} alt="logo" className="w-96 h-64 flex-1" />
          <form onSubmit={fetchCharacters} className="flex justify-end items-center gap-5 flex-1">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              className=" rounded-lg text-lg pl-3 py-1 bg-white"
              placeholder="Rick Sanchez..."
            />

            <button type='submit' className=' bg-white py-1 px-4 rounded-lg cursor-pointer'>
              <p className="text-md">Search</p>
            </button>
          </form>
        </header>



        {input
          ? (
            <div className='grid grid-cols-2 gap-3'>
              {allCharacters && allCharacters.length > 0 && (
                allCharacters.map(character => (
                  <Card character={character} key={character.id} />
                ))

              )}
            </div>
          )
          : (
            <div className="flex items-center justify-center flex-col">
              {character && (
                <Card character={character} key={character.id} />
              )}
            </div>
          )
        }

      </div>
    </>
  )
}

export default App

```
