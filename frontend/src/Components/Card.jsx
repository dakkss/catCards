import { useState, useEffect } from "react"
import axios from "axios"
import pic from "../Pictures/logo192.png"

export default function Card({cat_name, cat_breed}) {

    const [catCards, setCatCards] = useState()



    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("https://catcards.onrender.com/api/v1/catCards")
            setCatCards(response.data)
        }
        fetchData();
      }, []); // Or [] if effect doesn't need props or state

    console.log(catCards)

    if (catCards) {return (
        <div className="flex flex-row flex-wrap justify-center items-center">
            {catCards.map(card => (
                <div key={card.cat_id} className="border-2 mx-5 my-8 sm:w-40 md:w-52 hover:shadow-xl">
                    <div className="flex justify-center items-center p-5">
                        <h1>IMAGE HERE</h1>
                    </div>
                    <div key={card.cat_id} className="px-2 pt-9 pb-3">
                        <h4>{card.cat_name}</h4>
                        <h4>{card.cat_breed}</h4>
                    </div>
                </div>
            ))}
        </div>
    )}


}