import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, SetInputValue] = useState('One Punch');
    const onInputChange = ({ target }) => {
        SetInputValue(target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        SetInputValue("");
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}