import { Link } from "react-router"
import logo from "../assets/logo.png"


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