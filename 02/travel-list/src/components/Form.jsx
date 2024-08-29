import { useState } from 'react';
import '../index.css'

function Form({onAddItems}) {

    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
   


    function handleSubmit(e) {
        e.preventDefault();
        if (!description) return;
        const newItem = { description, quantity, isPacked: false, id: Date.now() }
        console.log(newItem);
       onAddItems(newItem);

        setDescription('');
        setQuantity(1);
    }


    return (
        <>
            <form className='add-form' onSubmit={handleSubmit}>
                <h3>What do you need for your trip?</h3>
                <select
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}>
                    {/* creating an array from 1-20 */}
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => <option value={num} key={num}>{num}</option>)}
                </select>
                <input
                    type="text"
                    placeholder='Item...'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
                <button>Add</button>
            </form>
        </>
    )
}

export default Form
