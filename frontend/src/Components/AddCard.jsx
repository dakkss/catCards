import axios from "axios";
const { useState } = require("react");
const dbUrl = axios.create({
    baseURL: "http://localhost:8080/api/v1/catCards",
});

const AddCard = () => {
    const [cat_name, setCatName] = useState("");
    const [cat_breed, setCatBreed] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await dbUrl.post("/", {
                cat_name,
                cat_breed,
            });
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div>
            <h1>Add a Card:</h1>
            <form>
                <div>
                    <input
                        value={cat_name}
                        onChange={(e) => setCatName(e.target.value)}
                        type="text"
                        placeholder="Cat Name"
                    />
                    <div>
                        <input
                            value={cat_breed}
                            onChange={(e) => setCatBreed(e.target.value)}
                            type="text"
                            placeholder="Cat Breed"
                        />
                    </div>
                    <button onClick={handleSubmit} type="submit">
                        Add Card
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddCard