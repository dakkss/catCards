import { useState, useEffect } from "react"
import axios from "axios"
// import pic from "../Pictures/logo192.png"

export default function Card({ cat_name, cat_breed }) {

    const [catCards, setCatCards] = useState()


    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("http://localhost:8080/api/v1/catCards")
            setCatCards(response.data)
        }
        fetchData();
    }, []);

    console.log(catCards)

    if (catCards) {
        return (
            <div className="flex flex-row flex-wrap justify-center items-center">
                {catCards.map(card => (
                    <div key={card.cat_id} className="border-2 mx-5 my-8 w-48  hover:shadow-xl">
                        <div className="flex justify-center items-center p-5">
                            <h1>IMAGE HERE</h1>
                        </div>
                        <hr />
                        <div key={card.cat_id} className="px-2 pt-4 pb-3">
                            <h4 className="pb-5 pt-4">{card.cat_name}</h4>
                            <h4 className="">{card.cat_breed}</h4>
                        </div>
                    </div>
                ))}
            </div>
        )
    }


}