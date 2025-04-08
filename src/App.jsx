import { useEffect, useState } from "react"
import Card from "./components/Card"
import { Link } from "react-router"
import logo from "./assets/logo.png"


function App() {

  const [characters, setCharacters] = useState(null)
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
      setCharacters(null)
    }
  }, [input])

  const fetchCharacters = async (e) => {
    e.preventDefault(0)
    const url = `${BASE_URL}/character?name=${input}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      setCharacters(data.results)
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
              className=" rounded-lg text-lg pl-3 py-1"
              placeholder="Rick Sanchez..."
            />

            <button type='submit' className=' bg-white py-1 px-4 rounded-lg'>
              <p className="text-md">Search</p>
            </button>
          </form>
        </header>



        {!input
          ? (
            <div className="flex items-center justify-center flex-col">
              {character && (
                <Link to={`/character/${character.id}`}>
                  <Card character={character} key={character.id} />
                </Link>
              )}
            </div>
          )
          : (
            <div className='grid grid-cols-2 gap-3'>
              {characters && characters.length > 0 && (
                characters.map(character => (
                  <Link to={`/character/${character.id}`}>
                    <Card character={character} key={character.id} />
                  </Link>
                ))

              )}
            </div>
          )
        }

      </div>
    </>
  )
}

export default App
