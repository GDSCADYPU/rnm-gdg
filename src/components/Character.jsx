import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import Card from "./Card"

function Character() {

    let { id } = useParams()
    const [character, setCharacter] = useState(null)

    useEffect(() => {

        const url = `https://rickandmortyapi.com/api/character/${id}`

        const fetchData = async () => {

            try {
                const response = await fetch(url)
                const data = await response.json()
                console.log(data)
                setCharacter(data)
            } catch (error) {
                console.log(error)
            }

        }

        fetchData()

    }, [])

    return (
        <>
            <div className="p-10 bg-slate-200">



                <Card character={character} />


                {character && character.episode && (
                    <div className="">

                        <p className="text-3xl font-bold my-4">Episodes: </p>
                        <div className="grid grid-cols-2">
                            {character.episode.map((episode, index) => (
                                <Link to={episode}>
                                    <p className="text-xl">{episode}</p>
                                </Link>
                            ))}
                        </div>

                    </div>

                )}
            </div>
        </>
    )
}

export default Character